import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useContext
} from "react";
import { laptopMenu, miceMenu, keyboardsMenu } from "@/utils/menuItems";
import Item from "./Item";

interface ContextProps {
  openType: string;
  setOpenType: Dispatch<SetStateAction<string>>;
}

export const DropDownConext = createContext<ContextProps>({
  openType: "",
  setOpenType: (): string => "",
});

export default function DropDown() {
  const [openType, setOpenType] = useState(""); // to open only one dropdown at the time

  return (
    <nav
      className={
        "flex flex-col md:flex-row items-center justify-center w-9/12 z-10 h-[4.3rem]"
      }
      onMouseLeave={() => setOpenType("")}
    >
      <ul
        className={
          "flex flex-col md:flex-row items-center justify-center gap-20 w-11/12"
        }
      >
        <DropDownConext.Provider value={{ openType, setOpenType }}>
          <Item menu={laptopMenu} />
        </DropDownConext.Provider>
        <DropDownConext.Provider value={{ openType, setOpenType }}>
          <Item menu={miceMenu} />
        </DropDownConext.Provider>
        <DropDownConext.Provider value={{ openType, setOpenType }}>
          <Item menu={keyboardsMenu} />
        </DropDownConext.Provider>
      </ul>
    </nav>
  );
}

export const useDropdownContext = () => useContext(DropDownConext);
