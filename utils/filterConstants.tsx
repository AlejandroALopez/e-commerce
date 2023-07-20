import { PriceFilters } from "@/types/filterTypes";

export const priceFilters: PriceFilters[] = [
  {
    name: "$1000 or less",
    min: 0,
    max: 1000,
  },
  {
    name: "$1001 - $2000",
    min: 1001,
    max: 2000,
  },
  {
    name: "$2001 - $3000",
    min: 2001,
    max: 3000,
  },
  {
    name: "$3001 - $4000",
    min: 3001,
    max: 4000,
  },
];

export const laptopFilters = [
  {
    title: "Brand",
    alias: "brand",
    options: ["ASUS", "Dell", "HP"],
  },
  {
    title: "Product Line",
    alias: "productLine",
    options: ["ASUS ROG", "Alienware", "OMEN", "Victus"],
  },
  {
    title: "Memory (RAM)",
    alias: "memory",
    options: ["8GB", "16GB", "32GB", "64GB"],
  },
  {
    title: "Storage Space",
    alias: "storage",
    options: ["512GB", "1TB", "2TB", "4TB", "8TB"],
  },
  {
    title: "Processor",
    alias: "processor",
    options: [
      "Intel core i5 13th Gen",
      "Intel core i7 13th Gen",
      "Intel core i9 13th Gen",
      "AMD Ryzen 9",
    ],
  },
  {
    title: "OS",
    alias: "os",
    options: ["Windows 11", "Windows 11 Pro"],
  },
  {
    title: "Graphics",
    alias: "graphics",
    options: [
      "NVIDIA GeForce RTX 3050, 6GB",
      "NVIDIA GeForce RTX 4060, 8GB",
      "NVIDIA GeForce RTX 4070, 8GB",
      "NVIDIA GeForce RTX 4080, 12GB",
      "NVIDIA GeForce RTX 4090, 16GB",
    ],
  },
];
