import type { Metadata } from "next";
import { Cormorant_Garamond, Caveat, IBM_Plex_Mono, Nunito } from "next/font/google";
import "./globals.css";

const academic = Cormorant_Garamond({
  variable: "--font-academic-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const literary = Caveat({
  variable: "--font-literary-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const design = IBM_Plex_Mono({
  variable: "--font-design-src",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const rounded = Nunito({
  variable: "--font-rounded-src",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ResearchIC",
  description: "ResearchIC three-realm website",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${academic.variable} ${literary.variable} ${design.variable} ${rounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
