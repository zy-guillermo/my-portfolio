import { NextResponse } from "next/server";
import { getHeartCount, incrementHeartCount } from "@/lib/heartDb";

export const dynamic =
  // Must be a static string for Next route config parsing.
  // Heart button is temporarily disabled in the header for releases on GH Pages.
  "force-static";

export async function GET() {
  return NextResponse.json({ count: getHeartCount() });
}

export async function POST() {
  const count = incrementHeartCount();
  return NextResponse.json({ count });
}

