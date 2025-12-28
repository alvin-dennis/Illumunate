import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REDIRECTS } from "./data/redirects";

export function proxy(req: NextRequest) {
  const event = req.nextUrl.pathname.split("/")[2];

  if (!event || !REDIRECTS[event]) {
    return NextResponse.next();
  }

  return NextResponse.redirect(REDIRECTS[event]);
}

export const config = {
  matcher: "/r/:path*",
};
