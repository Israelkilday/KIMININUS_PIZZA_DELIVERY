import type { Metadata } from "next";
import {
  Bangers,
  Inter,
  Quicksand,
  Roboto_Condensed,
  Orbitron,
} from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import CartMobileIcon from "./components/CartMobileIcon";
import CartProvider from "./context/CartContext";
import CartMobile from "./components/CartMobile";
import CartDesktop from "./components/CartDesktop";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "KIMININU'S PIZZARIA",
  description: "O melhor da pizza sem sair de casa.",
  icons: {
    icon: "public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={`${inter.className} ${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} ${orbitron.variable} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
