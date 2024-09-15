import { BsHandbagFill } from "react-icons/bs";

const CartMobileIcon = () => {
  return (
    <div className="fixed bottom-[5%] right-[10%] z-20 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full bg-tertiary text-white">
      <BsHandbagFill className="text-4xl" />

      {/* amount */}
      <span></span>
    </div>
  );
};

export default CartMobileIcon;
