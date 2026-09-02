import { Sora, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import SiteFooter from "./components/SiteFooter";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://jk-website-dun.vercel.app"),
  title: "JK Advertising — 50+ Years, Forging Ahead",
  description:
    "The largest OOH media owner in the East. 50 years of trust, service and innovation — we make Brands Converse. Hoardings, digital OOH, unipoles, events & more across Eastern India.",
  keywords: ["JK Advertising", "OOH", "outdoor advertising", "hoardings", "billboards", "Kolkata", "digital OOH", "Brands Converse"],
  openGraph: {
    title: "JK Advertising — We make Brands Converse",
    description: "The largest OOH media owner in the East. 50+ years, forging ahead.",
    siteName: "JK Advertising",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Advertising — We make Brands Converse",
    description: "The largest OOH media owner in the East. 50+ years, forging ahead.",
  },
};

export const viewport = {
  themeColor: "#211c84",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <ScrollProgress />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
