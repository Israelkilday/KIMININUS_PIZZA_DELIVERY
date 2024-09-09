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
}

export interface PizzaProps {
  pizza: PizzaType;
}
