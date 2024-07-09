import { NextRequest } from "next/server";
import { auth } from "./auth";

export default async function middleware(request: NextRequest) {
  const response = await auth();

  if (response?.user && request.nextUrl.pathname.startsWith("/sign"))
    return Response.redirect(new URL("/", request.url));
}
export const config = {
  matcher: ["/sign-in", "/sign-up", "/jobs"],
};
