import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { CMS_URL } from "@/lib/utils";

import { resolveResumeUrl } from "./_resolve-resume-url";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const fileUrl = searchParams.get("fileUrl");

    if (!fileUrl) {
      return NextResponse.json(
        { error: "Missing fileUrl parameter" },
        { status: 400 },
      );
    }

    const resumeUrl = resolveResumeUrl(fileUrl, CMS_URL);

    if (!resumeUrl) {
      return NextResponse.json(
        { error: "Invalid fileUrl parameter" },
        { status: 400 },
      );
    }

    const response = await fetch(resumeUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch resume" },
        { status: response.status },
      );
    }

    const blob = await response.blob();

    return new NextResponse(blob, {
      headers: {
        "Content-Type": blob.type,
      },
    });
  } catch (error) {
    console.error("Error fetching resume:", error);
    return NextResponse.json(
      { error: "Failed to fetch resume" },
      { status: 500 },
    );
  }
}
