#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { WctwaStack } from "../lib/wctwa-stack";

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION ?? "us-west-2";

new WctwaStack(app, "WctwaStack", {
  env: account ? { account, region } : { region },
  description: "wctwa.com — Astro static site + leads Lambda + SES wiring",
});
