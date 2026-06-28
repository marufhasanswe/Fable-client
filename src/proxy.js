import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { pathname } = request.nextUrl;

  // 1. Kick unauthenticated users out immediately
  if (!session || !session.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const userRole = session.user.role;

  // 2. Protect specific dashboard paths based on the role
  if (pathname.startsWith("/dashboard/seller") && userRole !== "seller") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (pathname.startsWith("/dashboard/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (pathname.startsWith("/dashboard/user") && userRole !== "user") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Allow the request to pass through safely if checks pass
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/dashboard/seller/:path*",
    "/dashboard/admin/:path*",
    "/dashboard/user/:path*",
  ],
};
