import { NextResponse } from "next/server"
import { getDownloadCount } from "@/app/actions"

export async function GET() {
  const { count } = await getDownloadCount()
  return NextResponse.json({ count })
}
