import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function GET() {
  const token = randomUUID();
  const res = NextResponse.json({ csrf_token: token });
  res.cookies.set("csrf_token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
    path: "/",
  });
  return res;
}
