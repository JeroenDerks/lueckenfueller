import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  const locale = req.nextUrl.locale || "en";
  const pathName = req.nextUrl.pathname;

  // There is a dedicated /datenschutzerklarung and /privacy route for German and English respecitively
  // Since these routes are not localized, the middleware redirects the user to the correct route in case the locale does not match the route
  if (locale === "de" && req.nextUrl.pathname === "/privacy") {
    return NextResponse.redirect(new URL(`/datenschutzerklarung`, req.url));
  } else if (locale === "en" && pathName === "/datenschutzerklarung") {
    return NextResponse.redirect(new URL(`/privacy`, req.url));
  }
}
