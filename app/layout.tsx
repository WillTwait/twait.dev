import './global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import Footer from './components/footer';
import Layout from './components/layout';
import { Navbar } from './components/nav';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL('https://twait.dev'),
  title: {
    default: 'Will Twait',
    template: '%s | Will Twait',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Will Twait',
    description: 'Developer, writer, and creator.',
    url: 'https://twait.dev',
    siteName: 'Will Twait',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Will Twait',
    card: 'summary_large_image',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <Layout>
          {children}
          <Footer />
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
