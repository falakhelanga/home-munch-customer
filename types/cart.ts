import { Dish, DishType } from "./dish";

export type CartItem = DishType & { cartQty: number };
export interface CartType {
  items: Array<CartItem>;
  total: number;
  numItems: number;
}
