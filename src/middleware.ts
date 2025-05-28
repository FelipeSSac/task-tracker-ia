import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
  // const cookieName = `a_session_${projectId}`;
  // const sessionCookie = request.cookies.get(cookieName);
  const sessionCookie = `dummy-token`;

  if (!sessionCookie && request.nextUrl.pathname.startsWith("/board")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (
    sessionCookie &&
    (request.nextUrl.pathname.startsWith("/auth") ||
      request.nextUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/board", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/board/:path*", "/auth"],
};
