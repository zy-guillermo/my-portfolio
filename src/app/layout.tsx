import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-rounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zy Guillermo - Portfolio",
  description:
    "Portfolio of Zymon Miko D. Guillermo, Software Development Engineer in Test with web development experience.",
};

// Default to dark on first visit (when no localStorage value exists).
const themeInitScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mPlusRounded.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="portfolio-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className={`min-h-full flex flex-col ${mPlusRounded.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
