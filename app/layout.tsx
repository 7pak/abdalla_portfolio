import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";

export const metadata: Metadata = {
  title:
    "Abdalla | Portfolio",
  description:
    "Abdalla Tawfig | Protfolio",
};

const rabar = localFont({
  src: "../public/fonts/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-rabar",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${rabar.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <main className="h-full w-full overflow-hidden z-50">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
