import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REDIRECTS } from "./data/redirects";

export function proxy(req: NextRequest) {
  let pathname = req.nextUrl.pathname;
  if (pathname.endsWith("/") && pathname !== "/") {
    pathname = pathname.slice(0, -1);
  }

  if (!pathname.startsWith("/r/")) {
    return NextResponse.next();
  }

  const event = pathname.split("/")[2];

  if (!event || !REDIRECTS[event]) {
    return NextResponse.next();
  }
  return NextResponse.redirect(REDIRECTS[event], 302);
}

export const config = {
  matcher: "/r/:path*",
};
