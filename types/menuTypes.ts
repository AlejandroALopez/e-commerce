export interface MenuSubItem {
  title: string;
}

export interface MenuItem {
  title: string;
  submenu?: MenuSubItem[];
  query?: string; // product type for navigation (e.g. Laptop, Mouse, etc.)
  subquery?: string; // product line for pre-filtering (e.g. Alienware, ASUS, etc.)
}

export interface Menu {
  title: string;
  items: MenuItem[];
}
