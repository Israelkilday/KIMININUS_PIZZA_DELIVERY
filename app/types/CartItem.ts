import { Topping } from "./pizza";

export interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  additionalTopping: Topping[];
  size: string;
  crust: string;
  amount: number;
  description: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
}
