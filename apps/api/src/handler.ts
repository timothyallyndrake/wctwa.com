import type {
  APIGatewayProxyHandlerV2,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";
import { ZodError } from "zod";
import { sendLeadEmail } from "./email.js";
import { leadSchema } from "./schema.js";

const corsOrigin = process.env.CORS_ORIGIN ?? "*";

function json(
  statusCode: number,
  body: unknown,
): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": corsOrigin,
      "access-control-allow-headers": "content-type",
      "access-control-allow-methods": "POST,OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const method = event.requestContext.http.method;
  const path = event.rawPath.replace(/\/$/, "") || "/";

  if (method === "OPTIONS") {
    return json(204, {});
  }

  if (method === "GET" && (path === "/health" || path === "/")) {
    return json(200, { ok: true });
  }

  if (method === "POST" && path.endsWith("/leads")) {
    try {
      const payload = event.body
        ? JSON.parse(event.isBase64Encoded
            ? Buffer.from(event.body, "base64").toString("utf8")
            : event.body)
        : {};
      const lead = leadSchema.parse(payload);
      await sendLeadEmail(lead);
      return json(200, { ok: true });
    } catch (err) {
      if (err instanceof ZodError) {
        return json(400, { ok: false, error: "Invalid input", details: err.issues });
      }
      if (err instanceof SyntaxError) {
        return json(400, { ok: false, error: "Invalid JSON" });
      }
      console.error("lead_submit_failed", err);
      return json(500, { ok: false, error: "Server error" });
    }
  }

  return json(404, { ok: false, error: "Not found" });
};
