// Import the middleware creation function from next-intl
import createMiddleware from "next-intl/middleware";

// Configure and export the internationalization middleware for Next.js
export default createMiddleware({
  locales: ["en", "lv"], // Specify supported locales for the application
  defaultLocale: "en", // Set the default locale if no other locale is detected
  localePrefix: "as-needed", // Optimize locale loading, load only when needed
});

// Define and export the config object for the middleware
export const config = {
  // Specify URL patterns this middleware applies to
  // Root ("/") and any localized path ("/lv" or "/en") followed by any path
  matcher: ["/", "/(lv|en)/:path*"],
};
