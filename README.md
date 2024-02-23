# Internationalization starter kit

## Install

```
yarn add next-international
mkdir src/locales
mkdir src/app/[locale]

mv src/app/layout.tsx src/app/[locale]/layout.tsx
mv src/app/page.tsx src/app/[locale]/page.tsx

touch src/i18n.ts
touch src/middleware.ts
touch src/locales/en.json
touch src/locales/lv.json
```

## Configure

src/i18n.ts

```typescript
// Import necessary functions from next-intl and next/navigation packages
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Define an array of supported locales
const locales = ["en", "lv"];

// This function configures internationalization for Next.js pages
export default getRequestConfig(async ({ locale }) => {
  // Check if the requested locale is supported
  if (!locales.includes(locale)) {
    // If not supported, trigger a 404 page
    notFound();
  } else {
    // Load and return locale-specific messages from JSON files
    const messages = (await import(`@/locales/${locale}.json`)).default;
    return { messages };
  }
});
```

middleware.ts

```typescript
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
```

locale/en.json

```json
{
  "index": {
    "title": "Hello!",
    "subtitle": "NextJS. TypeScript. TopLoader"
  }
}
```
