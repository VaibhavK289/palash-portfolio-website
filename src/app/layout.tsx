import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import styles from "./layout.module.css";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palash.dev"),
  title: {
    default: "Palash Chaturvedi — Portfolio",
    template: "%s | Palash Chaturvedi",
  },
  description:
    "Luxury editorial portfolio showcasing selected Data Analysis and Machine Learning projects.",
  openGraph: {
    title: "Palash Chaturvedi — Portfolio",
    description:
      "Luxury editorial portfolio showcasing selected Data Analysis and Machine Learning projects.",
    url: "https://palash.dev",
    siteName: "Palash Chaturvedi Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Palash Chaturvedi portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palash Chaturvedi — Portfolio",
    description:
      "Luxury editorial portfolio showcasing selected Data Analysis and Machine Learning projects.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>
        <a href="#main" className={styles.skipLink}>
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <div className={styles.siteFrame}>
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
