import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import { POST } from "./route";

vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));

function revalidateRequest(body: unknown) {
  return rawRevalidateRequest(JSON.stringify(body));
}

function rawRevalidateRequest(body: string) {
  return new NextRequest("http://localhost/api/revalidate", {
    method: "POST",
    body,
  });
}

describe("POST /api/revalidate", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it.each([{}, { paths: ["/"] }, { paths: ["/"], secret: "s3cret" }])(
    "returns 401 for %j when the token is unset",
    async (body) => {
      vi.stubEnv("REVALIDATION_TOKEN", undefined);

      const res = await POST(revalidateRequest(body));

      expect(res.status).toBe(401);
      expect(revalidatePath).not.toHaveBeenCalled();
    },
  );

  it.each(["not json", "null", ""])(
    "returns 401 for the body %j whether or not the token is set",
    async (body) => {
      vi.stubEnv("REVALIDATION_TOKEN", undefined);
      expect((await POST(rawRevalidateRequest(body))).status).toBe(401);

      vi.stubEnv("REVALIDATION_TOKEN", "s3cret");
      expect((await POST(rawRevalidateRequest(body))).status).toBe(401);
    },
  );

  it.each([{ paths: ["/"] }, { paths: ["/"], secret: "wrong" }])(
    "returns 401 for %j when the secret is missing or wrong",
    async (body) => {
      vi.stubEnv("REVALIDATION_TOKEN", "s3cret");

      const res = await POST(revalidateRequest(body));

      expect(res.status).toBe(401);
      expect(revalidatePath).not.toHaveBeenCalled();
    },
  );

  it("revalidates each path when the secret matches", async () => {
    vi.stubEnv("REVALIDATION_TOKEN", "s3cret");

    const res = await POST(
      revalidateRequest({ paths: ["/", "/miembros"], secret: "s3cret" }),
    );

    expect(res.status).toBe(200);
    expect(revalidatePath).toHaveBeenCalledWith("/");
    expect(revalidatePath).toHaveBeenCalledWith("/miembros");
  });

  it("does not log the request paths", async () => {
    vi.stubEnv("REVALIDATION_TOKEN", "s3cret");
    const log = vi.spyOn(console, "log").mockImplementation(() => {});

    await POST(revalidateRequest({ paths: ["/miembros"], secret: "s3cret" }));

    expect(log).not.toHaveBeenCalled();
  });
});
