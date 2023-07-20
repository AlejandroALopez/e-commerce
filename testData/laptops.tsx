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
          name: "512GB",
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
      ],
    },
  },
  {
    id: "j29jd892732d121d",
    title: "ROG Strix G16",
    type: "Laptop",
    basePrice: 1599.99,
    images: ["image1.webp", "image2.webp", "image3.webp", "image4.webp"],
    baseComponents: {
      brand: {
        name: "ASUS",
        price: 0,
      },
      productLine: {
        name: "ASUS ROG",
        price: 0,
      },
      memory: {
        name: "8GB",
        price: 0,
      },
      storage: {
        name: "1TB",
        price: 0,
      },
      processor: {
        name: "Intel core i9 13th Gen",
        price: 0,
      },
      os: {
        name: "Windows 11",
        price: 0,
      },
      display: {
        name: "16 QHD+ (2560 x 1600) 240Hz",
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
          name: "Intel core i9 13th Gen",
          price: 0,
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
      ],
      memory: [
        {
          name: "8GB",
          price: 0,
        },
        {
          name: "16GB",
          price: 150,
        },
        {
          name: "32GB",
          price: 300,
        },
        {
          name: "64GB",
          price: 450,
        },
      ],
      storage: [
        {
          name: "1TB",
          price: 0,
        },
        {
          name: "2TB",
          price: 200,
        },
        {
          name: "4TB",
          price: 400,
        },
      ],
      os: [
        {
          name: "Windows 11",
          price: 0,
        },
      ],
      display: [
        {
          name: "16 QHD+ (2560 x 1600) 240Hz",
          price: 0,
        },
      ],
    },
  },
  {
    id: "asdbc929jd24321",
    title: "ROG Zephyrus G14",
    type: "Laptop",
    basePrice: 2499.99,
    images: ["image1.webp", "image2.webp", "image3.webp", "image4.webp", "image5.webp"],
    baseComponents: {
      brand: {
        name: "ASUS",
        price: 0,
      },
      productLine: {
        name: "ASUS ROG",
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
        name: "Intel core i9 13th Gen",
        price: 0,
      },
      os: {
        name: "Windows 11",
        price: 0,
      },
      display: {
        name: "14 QHD+ (2560 x 1600) 165Hz",
        price: 0,
      },
      graphics: {
        name: "NVIDIA GeForce RTX 4080, 12GB",
        price: 0,
      },
    },
    availableComponents: {
      processor: [
        {
          name: "Intel core i9 13th Gen",
          price: 0,
        },
      ],
      graphics: [
        {
          name: "NVIDIA GeForce RTX 4080, 12GB",
          price: 0,
        },
        {
          name: "NVIDIA GeForce RTX 4090, 16GB",
          price: 500,
        },
      ],
      memory: [
        {
          name: "16GB",
          price: 0,
        },
        {
          name: "32GB",
          price: 300,
        },
      ],
      storage: [
        {
          name: "1TB",
          price: 0,
        },
        {
          name: "2TB",
          price: 200,
        },
        {
          name: "4TB",
          price: 400,
        },
      ],
      os: [
        {
          name: "Windows 11",
          price: 0,
        },
      ],
      display: [
        {
          name: "14 QHD+ (2560 x 1600) 165Hz",
          price: 0,
        },
        {
          name: "14 QHD+ (2560 x 1600) 240Hz",
          price: 300,
        },
      ],
    },
  },
  {
    id: "cmi49mci2jc",
    title: "OMEN Laptop 17",
    type: "Laptop",
    basePrice: 1949.99,
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
      "image6.png",
    ],
    baseComponents: {
      brand: {
        name: "HP",
        price: 0,
      },
      productLine: {
        name: "OMEN",
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
        name: "AMD Ryzen 9",
        price: 0,
      },
      os: {
        name: "Windows 11",
        price: 0,
      },
      display: {
        name: "17.3 QHD (2560 x 1440) 165Hz",
        price: 0,
      },
      graphics: {
        name: "NVIDIA GeForce RTX 4080, 12GB",
        price: 0,
      },
    },
    availableComponents: {
      processor: [
        {
          name: "AMD Ryzen 9",
          price: 0,
        },
        {
          name: "Intel core i9 13th Gen",
          price: 300,
        },
      ],
      graphics: [
        {
          name: "NVIDIA GeForce RTX 4080, 12GB",
          price: 0,
        },
        {
          name: "NVIDIA GeForce RTX 4090, 16GB",
          price: 500,
        },
      ],
      memory: [
        {
          name: "16GB",
          price: 0,
        },
        {
          name: "32GB",
          price: 300,
        },
        {
          name: "64GB",
          price: 600,
        },
      ],
      storage: [
        {
          name: "1TB",
          price: 0,
        },
        {
          name: "2TB",
          price: 200,
        },
        {
          name: "4TB",
          price: 400,
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
      ],
      display: [
        {
          name: "17.3 QHD (2560 x 1440) 165Hz",
          price: 0,
        },
        {
          name: "17.3 QHD+ (2560 x 1600) 240Hz",
          price: 300,
        },
      ],
    },
  },
  {
    id: "cmomouc29239vwk0cw",
    title: "Victus HP Gaming Laptop",
    type: "Laptop",
    basePrice: 899.99,
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
      "image6.png",
    ],
    baseComponents: {
      brand: {
        name: "HP",
        price: 0,
      },
      productLine: {
        name: "Victus",
        price: 0,
      },
      memory: {
        name: "16GB",
        price: 0,
      },
      storage: {
        name: "512GB",
        price: 0,
      },
      processor: {
        name: "Intel core i5 13th Gen",
        price: 0,
      },
      os: {
        name: "Windows 11",
        price: 0,
      },
      display: {
        name: "16.1 FHD (1920 x 1080) 144Hz",
        price: 0,
      },
      graphics: {
        name: "NVIDIA GeForce RTX 3050, 6GB",
        price: 0,
      },
    },
    availableComponents: {
      processor: [
        {
          name: "Intel core i5 13th Gen",
          price: 0,
        },
        {
          name: "Intel core i7 13th Gen",
          price: 400,
        },
      ],
      graphics: [
        {
          name:  "NVIDIA GeForce RTX 3050, 6GB",
          price: 0,
        },
        {
          name: "NVIDIA GeForce RTX 4060, 8GB",
          price: 100,
        },
        {
          name: "NVIDIA GeForce RTX 4070, 8GB",
          price: 300,
        },
        {
          name: "NVIDIA GeForce RTX 4080, 12GB",
          price: 600,
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
          price: 300,
        },
      ],
      storage: [
        {
          name: "512GB",
          price: 0,
        },
        {
          name: "1TB",
          price: 200,
        },
      ],
      os: [
        {
          name: "Windows 11",
          price: 0,
        },
      ],
      display: [
        {
          name: "16.1 FHD (1920 x 1080) 144Hz",
          price: 0,
        },
        {
          name: "16.1 QHD (2560 x 1440) 165Hz",
          price: 300,
        },
      ],
    },
  },
];
