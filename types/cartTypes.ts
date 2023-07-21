import { Laptop } from "./productTypes";

export interface CartElement {
  number: number,
  price: number,
  product: Laptop, // later make this <Laptop | Accessory>[]
}
