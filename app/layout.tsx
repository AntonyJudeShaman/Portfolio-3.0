import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import LocalFont from "@next/font/local";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext", "devanagari"],
  variable: "--font-pops",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antonyjudeshaman.vercel.app"),
  title: "Antony Jude Shaman",
  description: "Portfolio website of Antony Jude Shaman",
  openGraph: {
    title: "Antony Jude Shaman",
    description: "Portfolio website of Antony Jude Shaman",
    url: "./",
    siteName: "Antony Jude Shaman",
    images: "https://blogs.antonyjudeshaman.vercel.app/my-banner.jpeg",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
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
    title: "Antony Jude Shaman",
    card: "summary_large_image",
    images: [
      {
        url: "https://blogs.antonyjudeshaman.vercel.app/my-banner.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable, poppins.variable].join(" ")}
      suppressHydrationWarning={true}
    >
      <Head>
        <title>Antony Jude Shaman</title>
        <meta
          name="twitter:image:alt"
          property="og:image:alt"
          content="AJS Logo"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image"
          sizes="any"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://antonyjudeshaman.vercel.app/"
        />
        <meta property="og:title" content="Antony Jude Shaman" />
        <meta property="og:description" content="Portfolio website" />

        <meta
          property="og:image"
          content="https://blogs.antonyjudeshaman.vercel.app/my-banner.jpeg"
        />

        <meta name="description" content="Portfolio website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Antony Jude Shaman" />
        <meta name="twitter:description" content="Portfolio website" />
        <meta
          name="twitter:image"
          content="https://blogs.antonyjudeshaman.vercel.app/my-banner.jpeg"
        />
      </Head>
      <body
        className="md:ml-0 ml-0 dark:selection:bg-purple-950 selection:bg-green-400"
        style={{ maxWidth: "100%", maxHeight: "100%", overflowX: "hidden" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
