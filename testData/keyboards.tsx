import { Product } from "@/types/productTypes";

export const TEST_KEYBOARDS: Product[] = [
  {
    id: "keyboardid1",
    title: "Alienware Mechanical Gaming Keyboard AW510K",
    type: "Keyboard",
    basePrice: 119.99,
    images: ["image1.png", "image2.png", "image3.png", "image4.png"],
    baseComponents: {
      brand: {
        name: "Dell",
        price: 0,
      },
      connectivity: {
        name: "Wired",
        price: 0,
      },
      battery: {
        name: "NA",
        price: 0,
      },
      technology: {
        name: "Mechanical",
        price: 0,
      },
      backlit: {
        name: "RGB / 16.8 million colors",
        price: 0,
      },
      features: {
        name: "Numeric keypad, programmable keys, floating keys",
        price: 0,
      },
      color: {
        name: "Dark Side of the Moon",
        price: 0,
      },
    },
  },
];
