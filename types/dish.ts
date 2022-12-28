import { Chef } from "./chef";

export interface Dish {
  chef: Chef;
  name: string;
  image_url: string;
  price: number;
  description: string;
  id: number;
}

export interface DishType {
  availability: Array<string>;
  chefLink: string;
  id: string;
  dateCreated: Date;
  dateUpdated: Date;
  description: string;
  dishType: string;
  imageGallery: Array<string>;
  name: string;
  qty: number;
  price: number;
  chefObj: {
    image: string;
    name: string;
    location: string;
    phoneNumber: string;
  };
}
