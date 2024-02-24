import { LocalePrefix } from "next-intl/dist/types/src/shared/types";
import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales: string[] = ["en", "lv"] as const;
export const defaultLocale: string = "en";
export const localePrefix: LocalePrefix = "as-needed";

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
