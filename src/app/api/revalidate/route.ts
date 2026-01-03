import { NextRequest, NextResponse } from "next/server";

import { revalidatePaths } from "./_revalidate-path";

const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const { paths, secret } = await request.json();

    console.log("Revalidation request received for paths:", paths);

    if (secret !== REVALIDATION_TOKEN) {
      return NextResponse.json(
        { message: "Invalid token", success: false },
        { status: 401 },
      );
    }

    if (!paths || !Array.isArray(paths) || paths.length === 0) {
      return NextResponse.json(
        { message: "Invalid paths", success: false },
        { status: 400 },
      );
    }

    await revalidatePaths(paths);

    return NextResponse.json(
      { message: `Paths revalidated: ${paths.join(", ")}`, success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Revalidation error:", error);

    return NextResponse.json(
      {
        message: "Error during cache revalidation",
        error: error instanceof Error ? error.message : String(error),
        success: false,
      },
      { status: 500 },
    );
  }
}
