import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProviders";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cristian González",
  description: "Portfolio de Cristian González",

  icons: {
    icon: "/icon.ico",
    apple: "/icon.icon"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}