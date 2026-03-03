import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Raicha - Powering East Africa's Infrastructure Since 1994",
    template: "%s | Raicha",
  },
  description: "Leading electrical contracting company in East Africa. Specializing in power distribution up to 33kV, renewable energy, industrial fabrication, and specialized electrical systems.",
  keywords: [
    "electrical contractors Kenya",
    "power distribution East Africa",
    "solar energy Kenya",
    "electrical installation Nairobi",
    "33kV power systems",
    "industrial electrical contractors",
    "renewable energy solutions",
    "electrical infrastructure",
    "generator installation Kenya",
    "structured cabling Kenya",
  ],
  authors: [{ name: "Raicha" }],
  creator: "Raicha",
  publisher: "Raicha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://raicha.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raicha - Powering East Africa's Infrastructure Since 1994",
    description: "Leading electrical contracting company in East Africa. ISO 9001 certified with 30+ years of experience.",
    url: "https://raicha.com",
    siteName: "Raicha",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raicha - Electrical Contracting Excellence",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raicha - Powering East Africa's Infrastructure Since 1994",
    description: "Leading electrical contracting company in East Africa. ISO 9001 certified with 30+ years of experience.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code"
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}