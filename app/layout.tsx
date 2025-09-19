import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDH Kamenka - Sbor dobrovolných hasičů",
  description: "Oficiální webové stránky SDH Kamenka. Sbor dobrovolných hasičů založený roku 1879 v okrese Nový Jičín. Zásahová jednotka JPO III, mladí hasiči, hasičský sport.",
  keywords: "SDH Kamenka, dobrovolní hasiči, Nový Jičín, Odry, JPO III, hasičský sbor, zásahová jednotka, hasiči Moravskoslezský kraj, hasičská zbrojnice, Franz Tengler",
  authors: [{ name: "SDH Kamenka" }],
  creator: "SDH Kamenka",
  publisher: "SDH Kamenka",
  metadataBase: new URL('https://sdh-kamenka.vercel.app'),
  alternates: {
    canonical: 'https://sdh-kamenka.vercel.app',
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
  openGraph: {
    title: "SDH Kamenka - Sbor dobrovolných hasičů",
    description: "Oficiální webové stránky SDH Kamenka - více než 142 let tradice ve službě občanům",
    url: 'https://sdh-kamenka.vercel.app',
    siteName: 'SDH Kamenka',
    images: [{
      url: 'https://sdh-kamenka.vercel.app/images/uvod.webp',
      width: 1200,
      height: 630,
      alt: 'SDH Kamenka - Sbor dobrovolných hasičů',
    }],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SDH Kamenka - Sbor dobrovolných hasičů",
    description: "Více než 142 let tradice ve službě občanům",
    images: ['https://sdh-kamenka.vercel.app/images/uvod.webp'],
  },
  other: {
    'apple-mobile-web-app-title': 'SDH Kamenka',
    'application-name': 'SDH Kamenka',
    'msapplication-TileColor': '#dc2626',
    'theme-color': '#dc2626',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
