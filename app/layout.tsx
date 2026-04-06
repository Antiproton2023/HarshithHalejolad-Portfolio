import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

// We'll use Inter for a clean, minimalist typography feel
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "HarshithHalejolad | Portfolio",
  description: "Senior AI-ML enthusiast and software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300`}>
        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-6 max-w-4xl mx-auto w-full">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
