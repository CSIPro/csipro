import { describe, expect, it } from "vitest";

import { resolveResumeUrl } from "./_resolve-resume-url";

const CMS_URL = "https://cms.example.com";

describe("resolveResumeUrl", () => {
  it("resolves a CMS media path against the CMS URL", () => {
    expect(
      resolveResumeUrl("/api/media/file/cv.pdf", CMS_URL)?.toString(),
    ).toBe("https://cms.example.com/api/media/file/cv.pdf");
  });

  it.each(["@evil.example/x.pdf", ".evil.example/x.pdf", "api/media/cv.pdf"])(
    "rejects %s because it does not start with a slash",
    (fileUrl) => {
      expect(resolveResumeUrl(fileUrl, CMS_URL)).toBeNull();
    },
  );

  it.each(["//evil.example/x.pdf", "/\\evil.example/x.pdf", "/@evil.example"])(
    "never resolves %s to another origin",
    (fileUrl) => {
      expect(resolveResumeUrl(fileUrl, CMS_URL)?.origin).toBe(CMS_URL);
    },
  );
});
