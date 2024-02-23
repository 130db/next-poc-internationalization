"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales } from "@/locales/config";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    // Determine if the current pathname includes a locale
    const pathnameHasLocale = locales.some(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    );

    let newPathname = pathname;

    // If the current pathname includes a locale, remove it
    if (pathnameHasLocale) {
      const pathParts = pathname.split("/");
      pathParts.splice(1, 1); // Remove the locale part
      newPathname = pathParts.join("/") || "/";
      console.log(newPathname);
    }

    // Construct the new URL with the selected locale
    const newUrl = `/${locale}${newPathname}`;

    // Replace the current pathname with the new URL
    router.replace(newUrl);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => switchLocale("en")}>English</button>
      <button onClick={() => switchLocale("lv")}>Latviski</button>
    </div>
  );
}
