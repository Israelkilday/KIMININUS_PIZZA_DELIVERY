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
  const [cart, setCart] = useState([]);

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
