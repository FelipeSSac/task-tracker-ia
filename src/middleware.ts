import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function middleware(request: NextRequest) {
  // const user = await getLoggedInUser();
  const user = true;

  if (!user && request.nextUrl.pathname.startsWith("/board")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (
    user &&
    (request.nextUrl.pathname.startsWith("/auth") ||
      request.nextUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/board", request.url));
  }

  return NextResponse.next();
}

const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};

export { middleware, config };
