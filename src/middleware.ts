// Import the middleware creation function from next-intl
import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from "@/locales/config";
import createMiddleware from "next-intl/middleware";

// Configure and export the internationalization middleware for Next.js
export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: localePrefix,
  pathnames: pathnames,
});

// Define and export the config object for the middleware
export const config = {
  // Specify URL patterns this middleware applies to
  // Root ("/") and any localized path ("/lv" or "/en") followed by any path
  //matcher: ["/", "/(lv|en)/:path*"],

  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
