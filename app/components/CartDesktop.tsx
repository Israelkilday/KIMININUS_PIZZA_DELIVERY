"use client";

import { useCartContext } from "../context/CartContext";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";
import CartTop from "./CartTop";

const CartDesktop = () => {
  const { isOpen, cart } = useCartContext();

  return (
    <div
      className={`${isOpen ? "left-0" : "-left-full"} fixed bottom-0 top-0 hidden w-[500px] flex-col bg-white shadow-2xl transition-all duration-300 lg:flex`}
    >
      <CartTop />

      <div
        className={`mr-4 mt-8 flex h-[65vh] flex-col gap-y-4 overflow-y-scroll px-10 py-2 scrollbar-thin ${cart.length >= 3 && "scrollbar-track-black/10 scrollbar-thumb-secondary"}`}
      >
        {cart?.map((pizza, index) => {
          return <CartItem key={index} pizza={pizza} />;
        })}
      </div>

      <CartBottom />
    </div>
  );
};

export default CartDesktop;
