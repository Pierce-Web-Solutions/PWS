import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const INTAKE_COOKIE_NAME = "pws_project_intake_access";
export const INTAKE_SESSION_MAX_AGE = 14 * 24 * 60 * 60;

function accessToken() {
  const token = process.env.PROJECT_INTAKE_ACCESS_TOKEN?.trim();
  return token && token.length >= 32 ? token : undefined;
}

function safeEqual(left: string, right: string) {
  const leftHash = createHash("sha256").update(left).digest();
  const rightHash = createHash("sha256").update(right).digest();
  return timingSafeEqual(leftHash, rightHash);
}

export function inviteTokenIsValid(candidate: string) {
  const token = accessToken();
  return Boolean(
    token && candidate.length <= 256 && safeEqual(candidate, token),
  );
}

export function intakeSessionValue() {
  const token = accessToken();
  if (!token) return undefined;
  return createHmac("sha256", token)
    .update("pws-project-intake-session-v1")
    .digest("base64url");
}

export function intakeSessionIsValid(candidate?: string) {
  const expected = intakeSessionValue();
  return Boolean(
    candidate &&
    expected &&
    candidate.length <= 256 &&
    safeEqual(candidate, expected),
  );
}
