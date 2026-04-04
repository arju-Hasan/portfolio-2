import type { Metadata } from "next";
import Script from "next/script";
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
        <link
          rel="icon"
          href="https://i.ibb.co/Nd5JfX8W/d45932f4-5444-488d-a87b-fd81700f28456c.png"
          type="image/png"
        />
        <style>{`
          link[rel="icon"] {
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
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69ca9064e1ac681c3eff1d16/1jkvk830s';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
