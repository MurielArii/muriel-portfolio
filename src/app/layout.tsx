import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muriel Ranaivoson",
  description:
    "Portfolio de Muriel Ranaivoson, développeuse Full Stack. Next.js, React, Vue.js, TypeScript, Tailwind CSS.",
  openGraph: {
    title: "Muriel Ranaivoson — Développeuse Full Stack",
    description:
      "Portfolio de Muriel Ranaivoson, développeuse Full Stack. Next.js, React, Vue.js, TypeScript, Tailwind CSS.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Muriel Ranaivoson — Développeuse Full Stack",
    description:
      "Portfolio de Muriel Ranaivoson, développeuse Full Stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="dim"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
