import { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";
const SITE_VERIFICATION_TAG = process.env.SITE_VERIFICATION_TAG;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Read route params
  const locale = params.locale;

  // Get translations
  const t = await getTranslations({ locale, namespace: "meta" });

  const metadata: Metadata = {
    title: {
      default: `${t("title")} | ${t("sitename")}`,
      template: `%s | ${t("sitename")}`,
    },
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
    },
    icons: [
      {
        rel: "icon",
        url:
          process.env.NODE_ENV === "production"
            ? "favicon.svg"
            : "favicon-dev.svg",
      },
    ],
    formatDetection: {
      telephone: false,
    },
    manifest: "/manifest.json",
    openGraph: {
      title: t("title"),
      siteName: t("sitename"),
      description: t("description"),
      url: SITE_URL,
      type: "website",
      // images: ["/some-specific-page-image.jpg", ...previousImages],
      images: [
        {
          url: "/static/130db-1.jpg",
          width: 1600,
          height: 900,
          alt: "TODO: Give this image a description",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@130db",
      creator: "@AigarsSukurs",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/static/130db-1.jpg",
          width: 1600,
          height: 900,
          alt: "TODO: Give this image a description",
        },
      ],
    },
  };

  let verification = {};
  if (SITE_VERIFICATION_TAG) {
    verification = {
      google: SITE_VERIFICATION_TAG,
    };
  }

  return { ...metadata, ...verification };
}

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#262626" },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <NextTopLoader showSpinner={false} height={2} />
        {children}

        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){ dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                });
                `,
              }}
            />
          </>
        ) : (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `function gtag(){}`,
            }}
          />
        )}
      </body>
    </html>
  );
}
