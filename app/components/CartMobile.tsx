"use client";

import { useCartContext } from "../context/CartContext";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";
import CartTop from "./CartTop";

const CartMobile = () => {
  const { cart, isOpen } = useCartContext();

  return (
    <div
      className={`${isOpen ? "bottom-0" : "-bottom-full"} fixed left-0 z-20 flex h-full w-full flex-col bg-white transition-all duration-300 lg:hidden`}
    >
      <CartTop />
      <div
        className={`mr-4 mt-8 flex h-[60vh] flex-col gap-y-4 overflow-y-scroll px-4 py-2 scrollbar-thin scrollbar-thumb-secondary ${cart.length >= 3 ? "scrollbar-track-black/10" : "scrollbar-track-transparent"}`}
      >
        {cart?.map((pizza, index) => {
          return <CartItem key={index} pizza={pizza} />;
        })}
      </div>

      <CartBottom />
    </div>
  );
};

export default CartMobile;
