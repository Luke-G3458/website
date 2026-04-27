import { createElement } from "react";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { ContactEmail } from "@/emails/contact-email";

export const runtime = "nodejs";

const inquiryTypes = new Map([
  ["engineering", "Engineering"],
  ["software", "Software"],
  ["music", "Music"],
  ["lessons", "Lessons"],
  ["other", "Other"],
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  domain?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(message: string, status = 400) {
  return Response.json({ message }, { status });
}

function emailError(message: string, status = 502) {
  const safeMessage =
    process.env.NODE_ENV === "development"
      ? `The message could not be sent: ${message}`
      : "The message could not be sent. Please try again in a moment.";

  return jsonError(safeMessage, status);
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return jsonError("Invalid request body.");
  }

  const name = cleanString(body.name);
  const email = cleanString(body.email);
  const domain = cleanString(body.domain);
  const message = cleanString(body.message);
  const website = cleanString(body.website);

  if (website) {
    return Response.json({ message: "Thanks. Your message has been sent." });
  }

  if (!name || !email || !message) {
    return jsonError("Please fill out your name, email, and note.");
  }

  if (!emailPattern.test(email)) {
    return jsonError("Please enter a valid email address.");
  }

  if (domain && !inquiryTypes.has(domain)) {
    return jsonError("Please choose one of the listed topics.");
  }

  if (name.length > 120 || email.length > 254 || message.length > 4000) {
    return jsonError("Please keep your message a little shorter and try again.");
  }

  const resendKey = process.env.RESEND_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!resendKey || !toEmail) {
    return jsonError(
      "Email is not configured yet. Add RESEND_KEY and CONTACT_TO_EMAIL to the environment.",
      500,
    );
  }

  const resend = new Resend(resendKey);
  const domainLabel = domain ? inquiryTypes.get(domain) : "General";
  const subject = `Portfolio contact: ${domainLabel}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${domainLabel}`,
    "",
    message,
  ].join("\n");

  try {
    const html = await render(
      createElement(ContactEmail, {
        name,
        email,
        domainLabel: domainLabel ?? "General",
        message,
      }),
    );

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend contact email error:", error);
      return emailError(error.message);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown email error";

    console.error("Contact email send failed:", error);
    return emailError(message);
  }

  return Response.json({ message: "Thanks. Your message has been sent." });
}
