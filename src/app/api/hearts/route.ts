import { NextResponse } from "next/server";
import { getHeartCount, incrementHeartCount } from "@/lib/heartDb";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ count: getHeartCount() });
}

export async function POST() {
  const count = incrementHeartCount();
  return NextResponse.json({ count });
}

