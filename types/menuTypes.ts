export interface MenuSubItem {
  title: string;
}

export interface MenuItem {
  title: string;
  submenu: MenuSubItem[] | null;
}

export interface Menu {
  title: string;
  items: MenuItem[];
}
