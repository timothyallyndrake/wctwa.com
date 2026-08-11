import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { intentLabels, type LeadInput } from "./schema.js";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

function parseRecipients(raw: string): string[] {
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function sendLeadEmail(lead: LeadInput): Promise<void> {
  const to = parseRecipients(requiredEnv("LEAD_NOTIFY_TO"));
  const from = requiredEnv("LEAD_NOTIFY_FROM");
  const region = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "us-west-2";

  if (to.length === 0) throw new Error("LEAD_NOTIFY_TO has no addresses");

  const subject = `[WCTWA] ${intentLabels[lead.intent]} — ${lead.name}`;
  const text = [
    `Intent: ${intentLabels[lead.intent]}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Message: ${lead.message || "(none)"}`,
    "",
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");

  const client = new SESv2Client({ region });
  await client.send(
    new SendEmailCommand({
      FromEmailAddress: from,
      Destination: { ToAddresses: to },
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: { Text: { Data: text, Charset: "UTF-8" } },
        },
      },
    }),
  );
}
