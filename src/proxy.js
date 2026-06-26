import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import { toast } from "react-toastify";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role !== "seller") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
  if (session?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
  if (session?.user?.role !== "user") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/seller", "/dashboard/admin", "/dashboard/user"],
};
