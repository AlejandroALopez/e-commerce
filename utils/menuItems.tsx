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

export const miceMenu: Menu = {
  title: "Mice",
  items: [
    {
      title: "View All Mice",
      query: "Mouse",
    },
    {
      title: "Dell Mice",
    },
    {
      title: "Logitech Mice",
    },
    {
      title: "Lenovo mICE",
    },
  ],
};

export const keyboardsMenu: Menu = {
  title: "Keyboards",
  items: [
    {
      title: "View All Keyboards",
      query: "Keyboard",
    },
    {
      title: "Dell Keyboards",
    },
    {
      title: "Logitech Keyboards",
    },
  ],
};

export const headsetsMenu: Menu = {
  title: "Headsets",
  items: [
    {
      title: "View All Headsets",
      query: "Headset",
    },
    {
      title: "Dell Headsets",
    },
    {
      title: "Alienware Headsets",
    },
    {
      title: "Logitech Headsets",
    },
  ],
};