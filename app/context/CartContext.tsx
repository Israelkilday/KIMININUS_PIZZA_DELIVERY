/* eslint-disable no-unused-vars */
"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Topping } from "../types/pizza";
import { CartItemProps } from "../types/CartItem";

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

interface ModifyCartItemFunction {
  (id: number, price?: number, crust?: string): void;
}

export interface CartContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  addToCart: AddToCartFunction;
  removeItem: ModifyCartItemFunction;
  increaseAmount: ModifyCartItemFunction;
  decreaseAmount: ModifyCartItemFunction;
  cart: CartItemProps[];
  setCart: Dispatch<SetStateAction<CartItemProps[]>>;
  itemAmount: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<CartItemProps[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const price = cart.reduce((a, c) => {
      return a + Number(c.price) * c.amount;
    }, 0);
    setCartTotal(price);
  }, [cart]);

  const addToCart: AddToCartFunction = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust,
  ) => {
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
      description: "",
      priceSm: 0,
      priceMd: 0,
      priceLg: 0,
      toppings: additionalTopping,
    };

    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.size === size &&
        JSON.stringify(item.additionalTopping.sort()) ===
          JSON.stringify(additionalTopping.sort()) &&
        item.crust === crust,
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }

    setIsOpen(true);
  };

  const removeItem: ModifyCartItemFunction = (id, price, crust) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price && item.crust === crust,
    );

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  // increase amount
  const increaseAmount: ModifyCartItemFunction = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price,
    );

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].amount += 1;
      setCart(newCart);
    }
  };

  const decreaseAmount: ModifyCartItemFunction = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price,
    );

    if (itemIndex !== -1) {
      const newCart = [...cart];
      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1;
      }
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        setCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        cartTotal,
      }}
    >
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
