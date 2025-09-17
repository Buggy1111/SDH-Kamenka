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
        className={`${inter.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
