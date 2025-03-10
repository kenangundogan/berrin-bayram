import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Audio from './components/audio';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berrin ve Bayram Wedding Ceremony",
  description: "Berrin ve Bayram'ın nikah törenine davetlisiniz. 29 Mart 2025, 19:30 - 13:00 saatleri arasında.",
  authors: [
    {
      name: "Kenan Gündoğan",
    }
  ],
  robots: "index, follow",
  publisher: "Kenan Gündoğan"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Audio />
      </body>
    </html>
  );
}
