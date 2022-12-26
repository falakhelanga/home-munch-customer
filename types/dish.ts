import { Chef } from "./chef";

export interface Dish {
  chef: Chef;
  name: string;
  image_url: string;
  price: number;
  description: string;
  id: number;
}
