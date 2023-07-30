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
  {
    id: "mouseid2",
    title: "Alienware Wired/Wireless Gaming Mouse AW610M",
    type: "Mouse",
    basePrice: 69.99,
    images: ["image1.png", "image2.png", "image3.png", "image4.png"],
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
        name: "16000",
        price: 0,
      },
      buttons: {
        name: "7",
        price: 0,
      },
      battery: {
        name: "With lighting: Up to 116 hours. Without lighting: Up to 350 hours",
        price: 0,
      },
      features: {
        name: "Auto-calibration, 7 programmable buttons, 5 on-the-fly DPI settings",
        price: 0,
      },
      color: {
        name: "Dark side of the moon",
        price: 0,
      },
    },
  },
  {
    id: "mouseid3",
    title: "Dell Premier Rechargable Wireless Mouse",
    type: "Mouse",
    basePrice: 55.99,
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
        name: "1600",
        price: 0,
      },
      buttons: {
        name: "7",
        price: 0,
      },
      battery: {
        name: "6-month long. Charges fully in 3 hours",
        price: 0,
      },
      features: {
        name: "4 DPI levels, rechargeable battery, Swift Pair",
        price: 0,
      },
      color: {
        name: "Platinum silver",
        price: 0,
      },
    },
  },
];
