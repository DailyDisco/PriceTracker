import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  // publicRoutes = A list of routes that should be accessible without authentication. You can use glob patterns to match multiple routes or a function to match against the request object. For example: ['/foo', '/bar(.*)'] or [/^/foo/.*$/]
  publicRoutes: ['/', '/products/(.*)'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
