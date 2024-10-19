import { Dispatch, SetStateAction } from "react";
import { PizzaType } from "./pizza";

export interface SizeSelectionProps {
  pizza: PizzaType;
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
}
