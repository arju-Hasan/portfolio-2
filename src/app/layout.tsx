import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ParticlesBackground from "@/components/ParticlesBackground";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arju Hasan",
  description: "Full-stack developer & creative enthusiast",
  icons: {
    icon: "https://i.ibb.co/Nd5JfX8W/d45932f4-5444-488d-a87b-fd81700f28456c.png",
    apple:
      "https://i.ibb.co/Nd5JfX8W/d45932f4-5444-488d-a87b-fd81700f28456c.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#000000" />
        <style>{`
          link[rel="icon"],
          link[rel="apple-touch-icon"],
          link[rel="shortcut icon"] {
            border-radius: 50%;
          }
        `}</style>
      </head>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LenisProvider>
            <ParticlesBackground />
            <Preloader />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
