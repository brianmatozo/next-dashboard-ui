import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tablero de control v1.0.0",
  description: "Sistema de gestión de clases",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

