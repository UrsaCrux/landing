import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Club de Cohetería Ursa Crux",
  description:
    "Club de Cohetería Ursa Crux. Diseñamos, construimos y lanzamos cohetes.",
  icons: {
    icon: "/logo2.jpg",
    apple: "/logo2.jpg",
  },
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
