import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nam & Nga - Wedding Invitation",
  description:
    "Thiệp mời đám cưới Văn Nam & Thùy Nga - 28/03/2026. Trân trọng kính mời bạn đến chung vui trong ngày trọng đại.",
  keywords: ["wedding", "thiệp cưới", "Nam & Nga", "đám cưới"],
  openGraph: {
    title: "Nam & Nga - Wedding Invitation",
    description: "Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
