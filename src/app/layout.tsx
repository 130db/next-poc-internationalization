import { Metadata, Viewport } from "next";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";
const SITE_VERIFICATION_TAG = process.env.SITE_VERIFICATION_TAG || "not-set";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const title: string = "Create Next App | 130db";
const description: string = "Empty page by 130db";

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

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}`), // Must be valid url
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${process.env.NODE_ENV && "[dev] "}${title}`,
    template: `${process.env.NODE_ENV && "[dev] "}%s | 130db`,
  },
  description: description,
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  openGraph: {
    title,
    siteName: "130db",
    description,
    url: `${SITE_URL}`,
    type: "website",
    images: [
      {
        url: "/static/130db-1.jpg",
        width: 1600,
        height: 900,
        alt: "130db / Aigars Sukurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@130db",
    creator: "@AigarsSukurs",
    title,
    description,
    images: [
      {
        url: "/static/130db-1.jpg",
        width: 1600,
        height: 900,
        alt: "130db / Aigars Sukurs",
      },
    ],
  },
};

if (SITE_VERIFICATION_TAG) {
  metadata.verification = {
    google: `${SITE_VERIFICATION_TAG}`,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
