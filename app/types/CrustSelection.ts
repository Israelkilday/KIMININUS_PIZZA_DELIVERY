import { Dispatch, SetStateAction } from "react";

export interface CrustSelectionProps {
  crust: string;
  setCrust: Dispatch<SetStateAction<string>>;
}
