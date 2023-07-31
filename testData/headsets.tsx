import { Product } from "@/types/productTypes";

export const TEST_HEADSETS: Product[] = [
  {
    id: "headsetid2",
    title: "Logitech G432 Wired Gaming Headset",
    type: "Headset",
    basePrice: 79.99,
    images: ["image1.png", "image2.png"],
    baseComponents: {
      brand: {
        name: "Logitech",
        price: 0,
      },
      sound: {
        name: "Surround",
        price: 0,
      },
      frequency: {
        name: "20 - 20000 Hz",
        price: 0
      },
      features: {
        name: "Comfortable ear pads, surround sound for immersive gameplay",
        price: 0,
      },
      color: {
        name: "Black",
        price: 0,
      },
    },
  },
]