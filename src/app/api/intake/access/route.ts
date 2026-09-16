import { NextRequest, NextResponse } from "next/server";
import {
  INTAKE_COOKIE_NAME,
  INTAKE_SESSION_MAX_AGE,
  intakeSessionValue,
  inviteTokenIsValid,
} from "@/lib/intake-access";

export const runtime = "nodejs";

export function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") || "";
  const session = intakeSessionValue();
  if (!session || !inviteTokenIsValid(token))
    return new NextResponse(
      "This project intake link is invalid or has expired.",
      {
        status: 404,
        headers: {
          "cache-control": "no-store",
          "referrer-policy": "no-referrer",
          "x-robots-tag": "noindex, nofollow",
        },
      },
    );

  const destination = new URL("/project-intake", request.url);
  const response = NextResponse.redirect(destination, 303);
  response.cookies.set(INTAKE_COOKIE_NAME, session, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: INTAKE_SESSION_MAX_AGE,
    priority: "high",
  });
  response.headers.set("cache-control", "no-store");
  response.headers.set("referrer-policy", "no-referrer");
  response.headers.set("x-robots-tag", "noindex, nofollow");
  return response;
}
