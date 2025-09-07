import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Vypr - Infrastructure for Agentic Commerce",
  description:
    "Build, deploy, and scale AI agents that can transact, negotiate, and execute commerce autonomously. The infrastructure for agentic commerce.",
  openGraph: {
    title: "Vypr - Infrastructure for Agentic Commerce",
    description:
      "Build, deploy, and scale AI agents that can transact, negotiate, and execute commerce autonomously. The infrastructure for agentic commerce.",
    images: ["/vibe-pay-og.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vypr - Infrastructure for Agentic Commerce",
    description:
      "Build, deploy, and scale AI agents that can transact, negotiate, and execute commerce autonomously. The infrastructure for agentic commerce.",
    images: ["/vibe-pay-og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CTBP0BT78D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CTBP0BT78D');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
