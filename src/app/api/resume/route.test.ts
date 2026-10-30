import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CMS_URL } from "@/lib/utils";

import { GET } from "./route";

function resumeRequest(fileUrl: string) {
  const url = new URL("http://localhost/api/resume");
  url.searchParams.set("fileUrl", fileUrl);

  return new NextRequest(url);
}

describe("GET /api/resume", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("proxies a resume stored in the CMS", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(new Blob(["%PDF"], { type: "application/pdf" })),
      );
    vi.stubGlobal("fetch", fetchMock);

    const res = await GET(resumeRequest("/api/media/file/cv.pdf"));

    expect(fetchMock).toHaveBeenCalledWith(
      new URL(`${CMS_URL}/api/media/file/cv.pdf`),
    );
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("application/pdf");
    expect(await res.text()).toBe("%PDF");
  });

  it.each(["@evil.example/x.pdf", ".evil.example/x.pdf"])(
    "returns 400 without fetching for %s",
    async (fileUrl) => {
      const fetchMock = vi.fn();
      vi.stubGlobal("fetch", fetchMock);

      const res = await GET(resumeRequest(fileUrl));

      expect(res.status).toBe(400);
      expect(fetchMock).not.toHaveBeenCalled();
    },
  );
});
