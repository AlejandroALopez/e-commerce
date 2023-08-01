import { Product } from "@/types/productTypes";

export const TEST_MICE: Product[] = [
  {
    id: "mouseid1",
    title: "Dell Wireless Mouse WM126",
    type: "Mouse",
    basePrice: 16.99,
    images: ["image1.png", "image2.png", "image3.png"],
    baseComponents: {
      brand: {
        name: "Dell",
        price: 0,
      },
      connectivity: {
        name: "Wireless",
        price: 0,
      },
      dpi: {
        name: "1000",
        price: 0,
      },
      buttons: {
        name: "3",
        price: 0,
      },
      battery: {
        name: "One AA alkaline",
        price: 0,
      },
      features: {
        name: "Wireless receiver, Scrolling wheel",
        price: 0,
      },
      color: {
        name: "Black",
        price: 0,
      },
    },
  },
];
