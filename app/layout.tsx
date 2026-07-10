import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-provider";

const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Astride Melvin Fokam Ninyim — Google DeepMind Scholar",
  description:
    "AI for Science researcher operating at the intersection of Machine Learning, Quantum Computing, Climate Tech, and Biotech. Google DeepMind Scholar at AIMS South Africa & Stellenbosch University, COO at SYNTHI AI.",
  metadataBase: new URL("https://melai-1.github.io"),
  openGraph: {
    title: "Astride Melvin Fokam Ninyim — Google DeepMind Scholar",
    description:
      "From qubits to climate models — engineering intelligence at the edge of science.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${monoFont.variable} font-display antialiased bg-ink-950 text-slate-100`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
