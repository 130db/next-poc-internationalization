import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import { Link } from "@/locales/config";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations("menu");
  return (
    <div className="fixed w-full p-4">
      <div className="flex flex-row items-center justify-between gap-4 max-w-9xl m-auto">
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
        </nav>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
