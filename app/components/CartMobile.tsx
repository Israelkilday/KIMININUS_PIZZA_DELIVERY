"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartTop from "./CartTop";

const CartMobile = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { isOpen } = context;

  return (
    <div
      className={`${isOpen ? "bottom-0" : "-bottom-full"} fixed left-0 z-20 flex h-full w-full flex-col bg-white transition-all duration-300 lg:hidden`}
    >
      <CartTop />
    </div>
  );
};

export default CartMobile;
