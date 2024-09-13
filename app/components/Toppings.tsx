/* eslint-disable no-unused-vars */
import Image from "next/image";
import { ToppingProps } from "../types/Topping";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Toppings: React.FC<ToppingProps> = ({
  topping,
  additionalTopping,
  setAdditionalToppinPrice,
}) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${isChecked && "border-orange"} relative flex h-[140px] w-full max-w-[110px] flex-col items-center justify-center rounded-md border bg-white p-1`}
    >
      <Image
        src={topping.image}
        width={60}
        height={60}
        alt="iamges_of_topping"
        className="mb-2"
      />

      {/* topping name */}
      <div className="text-center text-sm font-medium capitalize">
        {topping.name}
      </div>

      {/* checkbox */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
        className="absolute h-full w-full cursor-pointer opacity-0"
      />

      {/* checkmark icon */}
      <div
        className={`${isChecked ? "opacity-100" : "opacity-0"} absolute right-1 top-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Toppings;
