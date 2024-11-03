/* eslint-disable no-unused-vars */
import Image from "next/image";
import { SizeSelectionProps } from "../types/sizeSelection";

const SizeSelection: React.FC<SizeSelectionProps> = ({
  pizza,
  size,
  setSize,
}) => {
  return (
    <div className="mx-auto flex max-w-sm items-center justify-center lg:max-w-none lg:justify-start">
      <div className="font-Media mb-10 flex items-baseline gap-x-12">
        <label className="flex cursor-pointer flex-col items-center gap-x-2">
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt="pizza_iamge_label"
            className={`${size === "Pequena" ? "rounded-full border-2 border-orange p-[2px]" : "border-transparent saturate-[.1] filter"} mb-1`}
          />
          <input
            type="radio"
            name="size"
            value="Pequena"
            checked={size === "Pequena"}
            onChange={(e) => setSize(e.target.value)}
            className="mb-1 appearance-none"
          />
          Pequena
        </label>

        <label className="flex cursor-pointer flex-col items-center gap-x-2">
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt="pizza_iamge_label"
            className={`${size === "Media" ? "rounded-full border-2 border-orange p-[2px]" : "border-transparent saturate-[.1] filter"} mb-1`}
          />
          <input
            type="radio"
            name="size"
            value="Media"
            checked={size === "Media"}
            onChange={(e) => setSize(e.target.value)}
            className="mb-1 appearance-none"
          />
          Media
        </label>

        <label className="flex cursor-pointer flex-col items-center gap-x-2">
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt="pizza_iamge_label"
            className={`${size === "Grande" ? "rounded-full border-2 border-orange p-[2px]" : "border-transparent saturate-[.1] filter"} mb-1`}
          />
          <input
            type="radio"
            name="size"
            value="Grande"
            checked={size === "Grande"}
            onChange={(e) => setSize(e.target.value)}
            className="mb-1 appearance-none"
          />
          Grande
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
