import { StaticImageData } from "next/image";
import Image1 from "@/public/images/frontImage1.png";
import Image2 from "@/public/images/frontImage2.png";
import Image3 from "@/public/images/frontImage3.png";
import Image4 from "@/public/images/frontImage4.png";

interface Slide {
  alt: string,
  url: StaticImageData,
  route: string,
}

interface TypeImage {
  type: string,
  title: string,
  fileName: string,
}

export const slides: Slide[] = [
  // for the image carousel on the landing page
  {
    alt: "ASUS ROG Zephyrus G14",
    url: Image1,
    route: "/64bee0aee9e9389f14f2ed01"
  },
  {
    alt: "Headsets",
    url: Image2,
    route: "?type=Headset"
  },
  {
    alt: "AW610M Mouse",
    url: Image3,
    route: "/64c6edacc2789f8a631ad704"
  },
  {
    alt: "Keyboards",
    url: Image4,
    route: "?type=Keyboard"
  },
];

export const typeImages: TypeImage[] = [
  // for the product type buttons on the landing page
  {
    type: "Headset",
    title: "Headsets",
    fileName: "sampleHeadset.png",
  },
  {
    type: "Laptop",
    title: "Laptops",
    fileName: "sampleLaptop.png",
  },
  {
    type: "Keyboard",
    title: "Keyboards",
    fileName: "sampleKeyboard.png",
  },
  {
    type: "Mouse",
    title: "Mice",
    fileName: "sampleMouse.png",
  },
];
