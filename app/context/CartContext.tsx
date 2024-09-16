/* eslint-disable no-unused-vars */
"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Topping } from "../types/pizza";

interface AddToCartFunction {
  (
    id: number,
    image: string,
    name: string,
    price: number,
    additionalTopping: Topping[],
    size: string,
    crust: string,
  ): void;
}

interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  additionalTopping: Topping[];
  size: string;
  crust: string;
  amount: number;
}

export interface CartContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  addToCart: AddToCartFunction;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);

  // cart state
  const [cart, setCart] = useState<CartItemProps[]>([]);

  // add to cart
  const addToCart: AddToCartFunction = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust,
  ) => {
    console.log(id, image, name, price, additionalTopping, size, crust);

    // sort additionalTopping array by name
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };

    setCart([...cart, newItem]);
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("UseCartContext must be userd within a CartProvider");
  }

  return context;
};

export default CartProvider;
