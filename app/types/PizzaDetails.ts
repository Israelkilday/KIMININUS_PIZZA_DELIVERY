import { Dispatch, SetStateAction } from "react";
import { PizzaType } from "./pizza";

export interface PizzaDetailsProps {
  pizza: PizzaType;
  modal?: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}
