import { Laptop } from "@/types/productTypes";

export const TEST_LAPTOPS: Laptop[] = [
  {
    id: "j29jd89273d",
    title: "Alienware m18 Gaming Laptop",
    type: "Laptop",
    basePrice: 2099.99,
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
      "image6.png",
      "image7.png",
      "image8.png",
    ],
    baseComponents: {
      brand: {
        name: "Dell",
        price: 0,
      },
      productLine: {
        name: "Alienware",
        price: 0,
      },
      memory: {
        name: "16GB",
        price: 0,
      },
      storage: {
        name: "1TB",
        price: 0,
      },
      processor: {
        name: "Intel core i7 13th Gen",
        price: 0,
      },
      os: {
        name: "Windows 11",
        price: 0,
      },
      display: {
        name: "18 QHD+ (2560 x 1600) 165Hz",
        price: 0,
      },
      screenSize: {
        name: "15 inch",
        price: 0,
      },
      graphics: {
        name: "NVIDIA GeForce RTX 4060, 8GB",
        price: 0,
      },
    },
    availableComponents: {
      processor: [
        {
          name: "Intel core i7 13th Gen",
          price: 0,
        },
        {
          name: "Intel core i9 13th Gen",
          price: 1000,
        },
      ],
      graphics: [
        {
          name: "NVIDIA GeForce RTX 4060, 8GB",
          price: 0,
        },
        {
          name: "NVIDIA GeForce RTX 4070, 8GB",
          price: 50,
        },
        {
          name: "NVIDIA GeForce RTX 4080, 12GB",
          price: 650,
        },
        {
          name: "NVIDIA GeForce RTX 4090, 16GB",
          price: 1200,
        },
      ],
      memory: [
        {
          name: "16GB",
          price: 0,
        },
        {
          name: "32GB",
          price: 100,
        },
        {
          name: "64GB",
          price: 300,
        },
      ],
      storage: [
        {
          name: "512 GB",
          price: 0,
        },
        {
          name: "1TB",
          price: 200,
        },
        {
          name: "2TB",
          price: 400,
        },
        {
          name: "4TB",
          price: 600,
        },
        {
          name: "8TB",
          price: 1000,
        },
      ],
      os: [
        {
          name: "Windows 11",
          price: 0,
        },
        {
          name: "Windows 11 Pro",
          price: 100,
        },
      ],
      display: [
        {
          name: "18 QHD+ (2560 x 1600) 165Hz",
          price: 0,
        },
        {
          name: "18 FHD+ (1920 x 1200) 480Hz",
          price: 100,
        },
      ]
    },
  },
  {
    id: "j29jd892732d121d",
    title: "ROG Strix G16",
    type: "Laptop",
    basePrice: 2599.99,
    images: ["image1.webp", "image2.webp", "image3.webp", "image4.webp"],
    baseComponents: {
      brand: {
        name: "ASUS",
        price: 0,
      },
      productLine: {
        name: "ROG Strix",
        price: 0,
      },
      category: {
        name: "Gaming",
        price: 0,
      },
      memory: {
        name: "32GB",
        price: 0,
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
