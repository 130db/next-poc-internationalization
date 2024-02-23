import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("index");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-yellow-500 gap-6">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <div className="font-mono text-center">{t("subtitle")}</div>
      <div className="font-mono text-center"></div>
    </main>
  );
}
