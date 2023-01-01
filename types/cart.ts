import { Dish, DishType } from "./dish";

export type CartItem = DishType & {
  cartQty: number;
  specialInstructions?: string;
};
export interface CartType {
  items: Array<CartItem>;
  total: number;
  numItems: number;
}
