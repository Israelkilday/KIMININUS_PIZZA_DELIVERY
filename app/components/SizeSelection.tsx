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
      {/* sizes */}
      <div className="mb-10 flex items-baseline gap-x-12 font-medium">
        {/* smalll */}
        <label className="flex cursor-pointer flex-col items-center gap-x-2">
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt="pizza_iamge_label"
            className={`${size === "small" ? "rounded-full border-2 border-orange p-[2px]" : "border-transparent saturate-[.1] filter"}`}
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="mb-1 appearance-none"
          />
          Small
        </label>

        {/* mediun */}
        <label className="flex cursor-pointer flex-col items-center gap-x-2">
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt="pizza_iamge_label"
            className={`${size === "medium" ? "rounded-full border-2 border-orange p-[2px]" : "border-transparent saturate-[.1] filter"}`}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="mb-1 appearance-none"
          />
          Medium
        </label>

        {/* large */}
        <label className="flex cursor-pointer flex-col items-center gap-x-2">
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt="pizza_iamge_label"
            className={`${size === "large" ? "rounded-full border-2 border-orange p-[2px]" : "border-transparent saturate-[.1] filter"}`}
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="mb-1 appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
