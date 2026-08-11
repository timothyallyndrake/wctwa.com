import * as path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

function envOr(name: string, fallback: string): string {
  return process.env[name] && process.env[name]!.trim() !== ""
    ? process.env[name]!
    : fallback;
}

export class WctwaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Set in CI / shell before `cdk deploy`. Placeholders allow `cdk synth` locally.
    const leadNotifyTo = envOr("LEAD_NOTIFY_TO", "you@example.com,master@example.com");
    const leadNotifyFrom = envOr("LEAD_NOTIFY_FROM", "noreply@wctwa.com");
    const corsOrigin = envOr("CORS_ORIGIN", "https://wctwa.com");

    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const distribution = new cloudfront.Distribution(this, "SiteDistribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        compress: true,
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: "/404.html",
          ttl: cdk.Duration.minutes(1),
        },
      ],
    });

    const webDist = path.join(__dirname, "..", "..", "apps", "web", "dist");
    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [s3deploy.Source.asset(webDist)],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ["/*"],
    });

    const leadsFn = new NodejsFunction(this, "LeadsFunction", {
      entry: path.join(__dirname, "..", "..", "apps", "api", "src", "handler.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_22_X,
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      environment: {
        LEAD_NOTIFY_TO: leadNotifyTo,
        LEAD_NOTIFY_FROM: leadNotifyFrom,
        CORS_ORIGIN: corsOrigin,
      },
      bundling: {
        minify: true,
        sourceMap: true,
        target: "node22",
      },
    });

    leadsFn.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["ses:SendEmail", "ses:SendRawEmail"],
        resources: ["*"],
      }),
    );

    const fnUrl = leadsFn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: [corsOrigin],
        allowedMethods: [lambda.HttpMethod.POST],
        allowedHeaders: ["content-type"],
      },
    });

    new cdk.CfnOutput(this, "CloudFrontDomain", {
      value: distribution.distributionDomainName,
    });
    new cdk.CfnOutput(this, "SiteBucketName", {
      value: siteBucket.bucketName,
    });
    new cdk.CfnOutput(this, "LeadsFunctionUrl", {
      value: fnUrl.url,
    });
  }
}
