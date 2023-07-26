import { Menu } from "@/types/menuTypes";

export const laptopMenu: Menu = {
  title: "Laptops",
  items: [
    {
      title: "View All Laptops",
      query: "Laptop",
    },
    {
      title: "ASUS Laptops",
      submenu: [
        { title: "All ASUS Laptops" },
        { title: "ROG Strix" },
        { title: "ROG Zephyrus" },
      ],
    },
    {
      title: "HP Laptops",
      submenu: [
        { title: "All HP Laptops" },
        { title: "OMEN" },
        { title: "Victus" },
      ],
    },
    {
      title: "Dell Laptops",
      submenu: [
        { title: "All Dell Laptops" },
        { title: "Alienware" },
        { title: "G series" },
      ],
    },
  ],
};

export const deskptopMenu: Menu = {
  title: "Desktop",
  items: [
    {
      title: "Monitors",
      submenu: [{ title: "LED" }, { title: "4K HD" }],
    },
    {
      title: "RAM",
    },
    {
      title: "Graphic Cards",
      submenu: [{ title: "NVIDIA GTX 3070" }, { title: "Titan" }],
    },
  ],
};

export const accessoriesMenu: Menu = {
  title: "Accessories",
  items: [
    {
      title: "Keyboards",
      submenu: [{ title: "Gaming Keyboards" }, { title: "Work Keyboards" }],
    },
    {
      title: "Mice",
    },
    {
      title: "Headsets",
      submenu: [{ title: "Beats Studio" }, { title: "Alienware" }],
    },
  ],
};
