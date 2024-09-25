import type { Metadata } from "next";
import { Bangers, Inter, Quicksand, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import CartMobileIcon from "./components/CartMobileIcon";
import CartProvider from "./context/CartContext";
import CartMobile from "./components/CartMobile";
import CartDesktop from "./components/CartDesktop";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
        </body>
      </html>
    </CartProvider>
  );
}
