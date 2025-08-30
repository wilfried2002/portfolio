import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilfried Ngankou - Développeur Full Stack & DevOps Engineer",
  description: "Portfolio de Wilfried Ngankou, développeur Full Stack et DevOps Engineer spécialisé dans le développement d'applications web modernes et l'infrastructure cloud.",
  keywords: ["développeur", "full stack", "devops", "react", "next.js", "cloud", "aws", "azure"],
  authors: [{ name: "Wilfried Ngankou" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
