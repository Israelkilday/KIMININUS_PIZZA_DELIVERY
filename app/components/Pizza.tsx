"use client";

import Image from "next/image";

interface Topping {
  image: string;
  name: string;
  price: number;
}

interface PizzaType {
  id: number;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
}

export interface PizzaProps {
  pizza: PizzaType;
}

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  console.log(pizza);

  return (
    <div className="group rounded-xl px-4 py-2 xl:px-2 xl:py-4">
      <Image
        src={pizza.image}
        width={270}
        height={270}
        alt="pizzas Images"
        priority={true}
      />

      {/* title */}
      <div>
        <div className="mb-3 cursor-pointer text-xl font-bold capitalize">
          {pizza.name}
        </div>
      </div>

      {/* description */}
      <div className="mb-6 min-h-[60px] bg-pink-200 text-sm font-medium">
        {pizza.description}
      </div>

      {/* price & btn  */}
      <div>
        {/* price -> hidden (sm) - visible (lg) */}
        <div className="hidden text-xl font-semibold lg:flex">
          stars at {pizza.priceSm}
        </div>
      </div>
    </div>
  );
};

export default Pizza;
