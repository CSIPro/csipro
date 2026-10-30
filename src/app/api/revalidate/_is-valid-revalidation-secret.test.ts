import { describe, expect, it } from "vitest";

import { isValidRevalidationSecret } from "./_is-valid-revalidation-secret";

describe("isValidRevalidationSecret", () => {
  it.each([undefined, "", "anything"])(
    "rejects %s when the token is unset",
    (secret) => {
      expect(isValidRevalidationSecret(secret, undefined)).toBe(false);
      expect(isValidRevalidationSecret(secret, "")).toBe(false);
    },
  );

  it.each([undefined, null, "", 42, ["s3cret"], "s3cre", "s3cret!", "S3CRET"])(
    "rejects %j when the token is set",
    (secret) => {
      expect(isValidRevalidationSecret(secret, "s3cret")).toBe(false);
    },
  );

  it("accepts the secret that matches the token", () => {
    expect(isValidRevalidationSecret("s3cret", "s3cret")).toBe(true);
  });
});
