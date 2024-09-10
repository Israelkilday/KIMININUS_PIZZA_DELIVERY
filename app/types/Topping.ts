import { Dispatch, SetStateAction } from "react";
import { Topping } from "./pizza";

export interface ToppingProps {
  topping: Topping;
  additionalTopping: Topping[];
  setAdditionalToppinPrice: Dispatch<SetStateAction<number>>;
}
