import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "CCUC — Club de Cohetería UC",
  description:
    "Club de Cohetería Ursa Crux. Diseñamos, construimos y lanzamos cohetes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`} style={{ paddingTop: "80px" }}>
        {children}
      </body>
    </html>
  );
}
