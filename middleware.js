// import { NextResponse } from "next/server";
// //middlewre is used to run code before a request is completed.
// export function middleware(request) {
//   //request object contains all the information about user request, like url, headers, method, etc.
//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

//matcher is used to specify which routes should be affected by this middleware.
export const config = {
  matcher: ["/account"],
};
