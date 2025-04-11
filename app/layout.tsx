import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Importa primero los estilos globales
import "@/styles/main.scss";    // Tu SCSS base (variables, mixins, reset)
import "./globals.css";         // Tailwind y utilidades personalizadas

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema de Tienda Virtual",
  description: "Login y plataforma para venta de ropa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
