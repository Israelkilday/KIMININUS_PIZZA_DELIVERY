/* eslint-disable no-unused-vars */
import Image from "next/image";
import { SizeSelectionProps } from "../types/sizeSelection";

const SizeSelection: React.FC<SizeSelectionProps> = ({
  pizza,
  size,
  setSize,
}) => {
  return (
    <div className="bg-indigo-300">
      {/* sizes */}
      <div>
        <label>
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt="pizza_iamge_label"
          />

          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
