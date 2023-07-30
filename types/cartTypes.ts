import { Product } from "./productTypes";

export interface CartElement {
  number: number,
  price: number,
  product: Product, // later make this <Laptop | Accessory>[]
}
