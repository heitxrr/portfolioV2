import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Heitor",
  description: "Heitor é um desenvolvedor full-stack, focado mais no front-end, onde ele coloca suas ideias visuais em prática. Atualmente estuda na ALUN e trabalha na empresa Grupo Sifra. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className = "bg-[#d0cfff] absolute top-[-6rem] -z-10 right-[11 rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" ></div>
        <div className = "bg-[#ffd7d4] absolute top-[-6rem] -z-10 left-[-35 rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left [-33rem] lg:left[-28 rem] xl:left-[-15rem] 2x1:left-[-5rem]" ></div>
        
        <Header/>
        {children}
      </body>
    </html>
  );
}
