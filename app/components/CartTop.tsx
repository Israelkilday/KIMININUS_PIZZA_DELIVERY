import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { setIsOpen } = context;

  return (
    <div className="flex h-20 w-full items-center justify-between border-b px-10">
      {/* shoping bag text */}
      <div className="font-semibold">Shoping Bag(3) </div>

      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className="group cursor-pointer">
        <IoCloseOutline className="text-3xl text-black transition-all duration-300 group-hover:scale-110" />
      </div>
    </div>
  );
};

export default CartTop;
