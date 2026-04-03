import { NextResponse } from "next/server";
import { getHeartCount, incrementHeartCount } from "@/lib/heartDb";

// Needed for `output: "export"` builds (GitHub Pages can't run API routes).
// GET can be pre-rendered as a static JSON response; POST will still not work on Pages.
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ count: getHeartCount() });
}

export async function POST() {
  const count = incrementHeartCount();
  return NextResponse.json({ count });
}

