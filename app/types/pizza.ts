import { Dispatch, SetStateAction } from "react";

export interface Topping {
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
  modal?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
}
