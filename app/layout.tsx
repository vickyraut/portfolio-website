import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { siteMetadata } from "@/lib/constants";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: "Vicky Raut | AI Engineer & Android Developer",
    template: "%s | Vicky Raut",
  },
  description:
    "Portfolio of Vicky Raut, AI Engineer & Android Developer specializing in autonomous LLM agents, hybrid RAG retrieval systems, and native Kotlin mobile architecture.",
  keywords: [
    "Vicky Raut",
    "AI Engineer",
    "Android Developer",
    "Agentic AI",
    "LLM Systems",
    "RAG Systems",
    "Kotlin",
    "Jetpack Compose",
    "LangChain",
    "Python",
    "FastAPI",
    "Mobile Architecture",
  ],
  authors: [{ name: "Vicky Raut", url: siteMetadata.url }],
  creator: "Vicky Raut",
  publisher: "Vicky Raut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vicky Raut | AI Engineer & Android Developer",
    description:
      "Building intelligent multi-agent systems, hybrid RAG architectures, and reactive native Android applications.",
    url: siteMetadata.url,
    siteName: "Vicky Raut Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vicky Raut — AI Engineer & Android Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicky Raut | AI Engineer & Android Developer",
    description:
      "Building intelligent multi-agent systems, hybrid RAG architectures, and reactive native Android applications.",
    creator: "@vickyraut",
    images: ["/opengraph-image"],
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
      suppressHydrationWarning
      className={cn("h-full", "scroll-smooth", "antialiased", inter.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <JsonLd />
          <Navbar />
          <main id="main-content" className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


