import { Cormorant_Garamond, Cinzel, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./style.scss";
import { WebContextProvider } from "@/context-api/WebContext";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const trajanPro = localFont({
  src: [
    { path: "./fonts/TrajanPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TrajanPro-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-trajan-pro",
  display: "swap",
});

const avenir = localFont({
  src: [
    { path: "./fonts/AvenirLTProLight.woff2", weight: "300", style: "normal" },
    {
      path: "./fonts/AvenirLTProLightOblique.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "./fonts/AvenirLTProBook.woff2", weight: "350", style: "normal" },
    {
      path: "./fonts/AvenirLTProBookOblique.woff2",
      weight: "350",
      style: "italic",
    },
    { path: "./fonts/AvenirLTProRoman.woff2", weight: "400", style: "normal" },
    {
      path: "./fonts/AvenirLTProOblique.woff2",
      weight: "400",
      style: "italic",
    },
    { path: "./fonts/AvenirLTProMedium.woff2", weight: "500", style: "normal" },
    {
      path: "./fonts/AvenirLTProMediumOblique.woff2",
      weight: "500",
      style: "italic",
    },
    { path: "./fonts/AvenirLTProHeavy.woff2", weight: "800", style: "normal" },
    {
      path: "./fonts/AvenirLTProHeavyOblique.woff2",
      weight: "800",
      style: "italic",
    },
    { path: "./fonts/AvenirLTProBlack.woff2", weight: "900", style: "normal" },
    {
      path: "./fonts/AvenirLTProBlackOblique.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jai Aanjaney",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${cinzel.variable} ${nunitoSans.variable} ${trajanPro.variable} ${avenir.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <WebContextProvider>{children}</WebContextProvider>
      </body>
    </html>
  );
}
