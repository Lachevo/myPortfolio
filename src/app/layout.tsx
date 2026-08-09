import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_TITLE = "Yohannes Getachew — AI & Full-Stack Engineer";
const OG_IMAGE = DATA.avatarUrl;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: DATA.description,
  openGraph: {
    title: SITE_TITLE,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        alt: SITE_TITLE,
      },
    ],
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
  twitter: {
    title: SITE_TITLE,
    description: DATA.description,
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            <Navbar />
            <div className="mx-auto max-w-6xl px-6 pt-24 pb-24 sm:px-8 lg:px-10">
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
