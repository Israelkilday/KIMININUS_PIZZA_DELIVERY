export interface Topping {
  image: string;
  name: string;
  price: number;
}

export interface PizzaType {
  id: number;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
  additionalTopping?: Topping[];
  crust?: string;
  size?: string;
  price?: number;
  amount?: number;
}

export interface PizzaProps {
  pizza: PizzaType;
}
