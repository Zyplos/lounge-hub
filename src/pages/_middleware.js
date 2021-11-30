import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

/** @param {import("next/server").NextRequest} req */
export async function middleware(req) {
  if (req.nextUrl.pathname === "/yourspace") {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!session) return NextResponse.redirect("/api/auth/signin");
  }
}
