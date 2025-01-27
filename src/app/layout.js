import { Outfit, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hotchpotch Innovation",
  description: "Write better content for your Facebook Ads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
