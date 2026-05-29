import type { Metadata } from "next";
import { Hanken_Grotesk, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medadvisor.conzultos.com"),
  title: {
    template: "%s | Conzultos",
    default: "Conzultos - Medical Family Advisory",
  },
  description:
    "Connect with experienced physician advisors for non-clinical guidance. Get help understanding medical information and making informed decisions with your family.",
  keywords: [
    "medical advisory",
    "physician advisor",
    "second opinion",
    "healthcare guidance",
    "family health",
    "telehealth advisory"
  ],
  openGraph: {
    title: "Conzultos - Medical Family Advisory",
    description: "Get expert medical guidance for you and your family.",
    url: "https://medadvisor.conzultos.com",
    siteName: "Conzultos",
    images: [
      {
        url: "https://medadvisor.conzultos.com/hero.png",
        width: 1200,
        height: 630,
        alt: "Conzultos Medical Advisory",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conzultos - Medical Family Advisory",
    description: "Connect with experienced physician advisors for non-clinical guidance.",
    images: ["https://medadvisor.conzultos.com/hero.png"],
  },
  icons: {
    icon: "/favicon-light.png",
    shortcut: "/favicon-light.png",
    apple: "/favicon-light.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
