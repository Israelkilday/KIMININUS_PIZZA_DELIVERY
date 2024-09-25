"use client";

import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import CartTop from "./CartTop";

const CartMobile = () => {
  const { cart, isOpen } = useCartContext();

  return (
    <div
      className={`${isOpen ? "bottom-0" : "-bottom-full"} fixed left-0 z-20 flex h-full w-full flex-col bg-white transition-all duration-300 lg:hidden`}
    >
      {/* top */}
      <CartTop />

      {/* cart items */}
      <div>
        {cart?.map((pizza, index) => {
          return <CartItem key={index} pizza={pizza} />;
        })}
      </div>

      {/* cart bottom */}
      {/* <CartBottom /> */}
    </div>
  );
};

export default CartMobile;
