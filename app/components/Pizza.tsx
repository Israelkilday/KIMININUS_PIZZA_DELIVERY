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
    <div>
      <Image src={pizza.image} width={270} height={270} alt="pizzas Images" />
    </div>
  );
};

export default Pizza;
