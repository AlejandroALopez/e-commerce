import { Laptop } from "./productTypes";

export interface Cart {
  products: Laptop[]; // later make this <Desktop | Laptop | Accessory>[]
}
