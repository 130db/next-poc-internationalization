// Import necessary functions from next-intl and next/navigation packages
import { locales } from "@/locales/config";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

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
