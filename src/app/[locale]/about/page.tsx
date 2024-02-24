import { getTranslations } from "next-intl/server";

export default async function AboutPaget() {
  const t = await getTranslations("about");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-green-500 gap-6">
      <div className="font-mono text-center">{t("subtitle")}</div>
    </main>
  );
}
