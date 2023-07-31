import { PriceFilters, ComponentFilters } from "@/types/filterTypes";

// TODO: Make different filters for each type
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

export const micePriceFilters: PriceFilters[] = [
  {
    name: "$20 or less",
    min: 0,
    max: 20,
  },
  {
    name: "$21 - $60",
    min: 21,
    max: 60,
  },
  {
    name: "$61 - $100",
    min: 61,
    max: 100,
  },
  {
    name: "$101 - $150",
    min: 101,
    max: 150,
  },
];

export const keyboardPriceFilters: PriceFilters[] = [
  {
    name: "$20 or less",
    min: 0,
    max: 20,
  },
  {
    name: "$21 - $60",
    min: 21,
    max: 60,
  },
  {
    name: "$61 - $100",
    min: 61,
    max: 100,
  },
  {
    name: "$101 - $150",
    min: 101,
    max: 150,
  },
];

export const headsetPriceFilters: PriceFilters[] = [
  {
    name: "$20 or less",
    min: 0,
    max: 20,
  },
  {
    name: "$21 - $60",
    min: 21,
    max: 60,
  },
  {
    name: "$61 - $100",
    min: 61,
    max: 100,
  },
  {
    name: "$101 - $150",
    min: 101,
    max: 150,
  },
];

export const laptopFilters: ComponentFilters[] = [
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

export const miceFilters: ComponentFilters[] = [
  {
    title: "Brand",
    alias: "brand",
    options: ["Logitech", "Dell", "Lenovo", "Alienware"],
  },
  {
    title: "Connectivity",
    alias: "connectivity",
    options: ["Wireless", "Wired"],
  },
  {
    title: "# of buttons",
    alias: "buttons",
    options: ["3", "7"],
  },
  {
    title: "Movement Resolution (DPI)",
    alias: "dpi",
    options: ["1000", "1600", "16000"],
  },
];

export const keyboardFilters: ComponentFilters[] = [
  {
    title: "Brand",
    alias: "brand",
    options: ["Logitech", "Dell", "Lenovo", "Alienware"],
  },
  {
    title: "Connectivity",
    alias: "connectivity",
    options: ["Wireless", "Wired"],
  },
  {
    title: "Technology",
    alias: "technology",
    options: ["Mechanical", "Lythium polymer", "Plunger"],
  },
  {
    title: "Color",
    alias: "color",
    options: ["Graphite", "Dark Side of the Moon"],
  },
];

export const headsetFilters: ComponentFilters[] = [
  {
    title: "Brand",
    alias: "brand",
    options: ["Logitech", "Dell", "Alienware"],
  },
  {
    title: "Sound Output Mode",
    alias: "sound",
    options: ["Hi-Res audio"],
  },
  {
    title: "Color",
    alias: "color",
    options: ["Black", "Blue", "Dark Side of the Moon"],
  },
];
