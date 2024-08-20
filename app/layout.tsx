import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

// Importing the font
const inter = Inter({ subsets: ["latin"] });

// Setting the metadata fot the layout
export const metadata: Metadata = {
  title: "Developer Portfolio Landing Page",
  description: "Modern & Minimalist NEXT.js portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Returned JSX
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
