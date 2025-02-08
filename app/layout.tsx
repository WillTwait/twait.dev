import "./global.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://twait.dev"),
  title: {
    default: "Will Twait",
    template: "%s | Will Twait",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Will Twait",
    description: "Developer, writer, and creator.",
    url: "https://twait.dev",
    siteName: "Will Twait",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Will Twait",
    card: "summary_large_image",
  },
  verification: {
    google: "google",
    yandex: "yandex",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} text-black bg-white dark:text-white dark:bg-black`}
    >
      <body className="antialiased">
        <Layout>
          {children}
          {/* <Footer /> */}
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
