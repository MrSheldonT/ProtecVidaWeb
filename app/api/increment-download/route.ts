import { NextResponse } from "next/server"
import { incrementDownloadCount } from "@/app/actions"

export async function POST() {
  const { count } = await incrementDownloadCount()
  return NextResponse.json({ count })
}
