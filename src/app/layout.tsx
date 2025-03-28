import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Inter,
  Sofia_Sans_Condensed,
  Poppins,
  Playfair_Display,
  Cormorant,
  Joan,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Emesa sweets",
  description: "Emesa sweets",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

const sofia_sans = Sofia_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const joan = Joan({
  subsets: ["latin"],
  variable: "--font-joan",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter antialiased",

          inter.variable,
          sofia_sans.variable,
          open_sans.variable,
          playfair.variable,
          poppins.variable,
          cormorant.variable,
          joan.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
