"use client";

import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const CartMobileIcon = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { isOpen, setIsOpen } = context;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="fixed bottom-[5%] right-[10%] z-20 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full bg-tertiary text-white"
    >
      <BsHandbagFill className="text-4xl" />

      {/* amount */}
      <span className="gradient absolute bottom-3 right-4 flex h-5 w-5 items-center justify-center rounded-full font-robotoCondensed text-[13px] text-white">
        3
      </span>
    </div>
  );
};

export default CartMobileIcon;
