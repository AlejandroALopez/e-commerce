import { Menu } from "@/types/menuTypes";

export const laptopMenu: Menu = {
  title: "Laptops",
  items: [
    {
      title: "ASUS Laptops",
      submenu: [
        { title: "ASUS ROG" },
        { title: "ASUS TUF" }
      ],
    },
    {
      title: "HP Laptops",
      submenu: null,
    },
    {
      title: "Dell Laptops",
      submenu: [
        { title: "Alienware" },
        { title: "G series" }
      ],
    },
  ],
};

export const deskptopMenu: Menu = {
  title: "Desktop",
  items: [
    {
      title: "Monitors",
      submenu: [
        { title: "LED" },
        { title: "4K HD" }
      ],
    },
    {
      title: "RAM",
      submenu: null,
    },
    {
      title: "Graphic Cards",
      submenu: [
        { title: "NVIDIA GTX 3070" },
        { title: "Titan" }
      ],
    },
  ],
};


export const accessoriesMenu: Menu = {
  title: "Accessories",
  items: [
    {
      title: "Keyboards",
      submenu: [
        { title: "Gaming Keyboards" },
        { title: "Work Keyboards" }
      ],
    },
    {
      title: "Mice",
      submenu: null,
    },
    {
      title: "Headsets",
      submenu: [
        { title: "Beats Studio" },
        { title: "Alienware" }
      ],
    },
  ],
};
