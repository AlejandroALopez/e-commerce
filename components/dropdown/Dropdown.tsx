import { laptopMenu, accessoriesMenu, deskptopMenu } from "@/utils/menuItems";
import Item from './Item';

export default function DropDown() {
  return (
    <nav
      className={"flex flex-col md:flex-row items-center justify-center w-9/12 z-10"}
    >
      <ul
        className={
          "flex flex-col md:flex-row items-center justify-evenly w-11/12"
        }
      >

        <Item menu={laptopMenu} />
        <Item menu={deskptopMenu} />
        <Item menu={accessoriesMenu} />
      </ul>
    </nav>
  );
}
