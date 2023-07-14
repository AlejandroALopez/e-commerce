import { Laptop } from "@/types/productTypes";

export const TEST_LAPTOPS: Laptop[] = [
  {
    id: "j29jd89273d",
    title: "Alienware m7",
    type: "Laptop",
    basePrice: 1599.99,
    baseComponents: {
      brand: {
        name: "Dell",
        price: 0,
      },
      productLine: {
        name: "Alienware",
        price: 0,
      },
      category: {
        name: "Gaming",
        price: 0,
      },
      memory: {
        name: "16GB",
        price: 200,
      },
      storage: {
        name: "1TB",
        price: 300,
      },
      processor: {
        name: "Intel core i7 10th Gen",
        price: 300,
      },
      os: {
        name: "Windows 10",
        price: 100,
      },
      display: {
        name: "120 Hz",
        price: 100,
      },
      screenSize: {
        name: "15 inch",
        price: 300,
      },
      graphics: {
        name: "NVIDIA RTX 3070 8GB",
        price: 400,
      },
    },
    availableComponents: {},
  },
  {
    id: "j29jd892732d121d",
    title: "TUF L7",
    type: "Laptop",
    basePrice: 2599.99,
    baseComponents: {
      brand: {
        name: "Dell",
        price: 0,
      },
      productLine: {
        name: "TUF",
        price: 0,
      },
      category: {
        name: "Gaming",
        price: 0,
      },
      memory: {
        name: "32GB",
        price: 400,
      },
      storage: {
        name: "2TB",
        price: 500,
      },
      processor: {
        name: "Intel core i9 10th Gen",
        price: 600,
      },
      os: {
        name: "Windows 11",
        price: 200,
      },
      display: {
        name: "60 Hz",
        price: 50,
      },
      screenSize: {
        name: "13 inch",
        price: 200,
      },
      graphics: {
        name: "NVIDIA RTX 3060 6GB",
        price: 200,
      },
    },
    availableComponents: {},
  },
];

// categories: ["Gaming", "Work"],
// colors: ["gray", "white", "black"],
// sizes: ["13 inches", "15 inches", "17 inches"],
