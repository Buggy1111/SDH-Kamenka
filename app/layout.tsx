import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDH Kamenka - Sbor dobrovolných hasičů",
  description: "Oficiální webové stránky SDH Kamenka. Sbor dobrovolných hasičů založený roku 1879 v okrese Nový Jičín. Zásahová jednotka JPO III, mladí hasiči, hasičský sport.",
  keywords: "SDH Kamenka, dobrovolní hasiči, Nový Jičín, Odry, JPO III, hasičský sbor, zásahová jednotka",
  openGraph: {
    title: "SDH Kamenka - Sbor dobrovolných hasičů",
    description: "Oficiální webové stránky SDH Kamenka - více než 145 let tradice ve službě občanům",
    type: "website",
    locale: "cs_CZ"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" style={{ scrollBehavior: 'auto' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
