import Image from "next/image";
import { ToppingProps } from "../types/Topping";
import { useCallback, useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Toppings: React.FC<ToppingProps> = ({
  topping,
  additionalTopping,
  setAdditionalTopping,
}) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // handle check
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  // handle topping
  const handleTopping = useCallback(() => {
    //  use set ensure unique values

    if (isChecked) {
      const newToppings = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newToppings));
    } else {
      // remove the topping with the matching name
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });

      setAdditionalTopping(newToppings);
    }
  }, [isChecked, additionalTopping, topping, setAdditionalTopping]);

  useEffect(() => {
    handleTopping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <div
      className={`${isChecked && "border-orange"} relative flex h-[140px] w-full max-w-[100px] flex-col items-center justify-center rounded-md border bg-white p-1`}
    >
      <Image
        src={topping.image}
        width={50}
        height={50}
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
