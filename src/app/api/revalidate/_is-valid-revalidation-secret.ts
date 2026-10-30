import { createHash, timingSafeEqual } from "node:crypto";

export function isValidRevalidationSecret(
  secret: unknown,
  expectedToken: string | undefined,
) {
  if (!expectedToken || typeof secret !== "string") {
    return false;
  }

  // Hashing gives both buffers the same length, which timingSafeEqual needs,
  // without leaking the expected token's length.
  return timingSafeEqual(sha256(secret), sha256(expectedToken));
}

function sha256(value: string) {
  return createHash("sha256").update(value).digest();
}
