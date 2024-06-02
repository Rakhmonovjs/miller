// import { clerkMiddleware } from "@clerk/nextjs";

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


// // middleware.ts
// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware();

// // Bu qismni middleware faylning oxiriga qo'shing
// export const config = {
//   matcher: '/((?!.*\\.).*)', // Bu barcha yo'llar uchun Clerk Middleware ni qo'llaydi
// };
