import { Dish } from "./dish";

export type CartItem = Dish & { qty: number };
export interface CartType {
  items: Array<CartItem>;
  total: number;
  numItems: number;
}
