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
  {
    id: "keyboardid2",
    title: "Logitech MX Keys Mini for Business",
    type: "Keyboard",
    basePrice: 69.99,
    images: ["image1.png", "image2.png", "image3.png"],
    baseComponents: {
      brand: {
        name: "Logitech",
        price: 0,
      },
      connectivity: {
        name: "Wireless",
        price: 0,
      },
      battery: {
        name: "10 days",
        price: 0,
      },
      technology: {
        name: "Lythium polymer",
        price: 0,
      },
      backlit: {
        name: "Yes",
        price: 0,
      },
      features: {
        name: "USB-C charging cable, rechargable",
        price: 0,
      },
      color: {
        name: "Graphite",
        price: 0,
      },
    },
  },
  {
    id: "keyboardid3",
    title: "Dell Multimedia Keyboard KB216",
    type: "Keyboard",
    basePrice: 18.99,
    images: ["image1.png"],
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
        name: "Plunger",
        price: 0,
      },
      backlit: {
        name: "NA",
        price: 0,
      },
      features: {
        name: "US International (QWERTY)",
        price: 0,
      },
      color: {
        name: "Graphite",
        price: 0,
      },
    },
  },
];
