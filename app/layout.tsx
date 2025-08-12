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
  title: "VibePay - Credit Systems & Growth Infrastructure",
  description:
    "Add credit systems and growth features to your AI app in 5 minutes. As your Merchant of Record, we handle global taxes and compliance across 180+ countries so you can focus on building.",
  openGraph: {
    title: "VibePay - Credit Systems & Growth Infrastructure",
    description:
      "Add credit systems and growth features to your AI app in 5 minutes. As your Merchant of Record, we handle global taxes and compliance across 180+ countries so you can focus on building.",
    images: ["/vibe-pay-og.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VibePay - Credit Systems & Growth Infrastructure",
    description:
      "Add credit systems and growth features to your AI app in 5 minutes. As your Merchant of Record, we handle global taxes and compliance across 180+ countries so you can focus on building.",
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
