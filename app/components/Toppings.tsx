/* eslint-disable no-unused-vars */
import Image from "next/image";
import { ToppingProps } from "../types/Topping";
import { useState } from "react";

const Toppings: React.FC<ToppingProps> = ({
  topping,
  additionalTopping,
  setAdditionalToppinPrice,
}) => {
  const [isChecked, setTsChecked] = useState(false);

  return (
    <div
      className={`${isChecked && "border-orange"} h-[140px] w-full max-w-[110px] p-1`}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt="iamges_of_topping"
        className="mb-2"
      />

      {/* topping name */}
      <div className="text-center text-sm font-medium capitalize">
        {topping.name}
      </div>
    </div>
  );
};

export default Toppings;
