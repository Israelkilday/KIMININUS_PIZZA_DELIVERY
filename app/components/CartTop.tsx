import { IoCloseOutline } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";

const CartTop = () => {
  const { setIsOpen, itemAmount } = useCartContext();

  return (
    <div className="flex h-20 w-full items-center justify-between border-b px-10">
      <div className="font-semibold">Sua sacola({itemAmount}) </div>

      <div onClick={() => setIsOpen(false)} className="group cursor-pointer">
        <IoCloseOutline className="text-3xl text-black transition-all duration-300 group-hover:scale-110" />
      </div>
    </div>
  );
};

export default CartTop;
