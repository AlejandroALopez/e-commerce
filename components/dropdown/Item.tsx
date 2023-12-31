import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDropdownContext } from "./Dropdown";
import { Menu } from "@/types/menuTypes";
import SubItem from "./SubItem";
import RightArrow from "@/public/arrows/right1.svg";

interface MenuProps {
  menu: Menu;
}

export default function Item(props: MenuProps) {
  const router = useRouter();
  const { menu } = props;
  const { openType, setOpenType } = useDropdownContext();
  const [activeSubtype, setActiveSubtype] = useState("");

  function goToCatalogueWithType(type: string | undefined) {
    setOpenType("");
    router.push({
      pathname: "/catalogue",
      query: { type: type || "" },
    });
  }

  return (
    <div className={"flex flex-col"}>
      <button onMouseEnter={() => setOpenType(menu.title)}>
        <p
          className={`${
            openType === menu.title
              ? "text-[#AE0000] underline underline-offset-4"
              : "text-white"
          } text-xl`}
        >
          {menu.title}
        </p>
      </button>
      {openType === menu.title && (
        <div
          onMouseLeave={() => setOpenType("")}
          className={
            "bg-[#292929] absolute top-[4.2rem] flex flex-col items-start p-2 w-56"
          }
        >
          {menu.items.map((item, index) => (
            <button
              key={index}
              onClick={() => goToCatalogueWithType(item.query)}
            >
              <div
                className={
                  "flex flex-row items-center justify-between w-full hover:bg-[#AE0000] cursor-pointer p-2"
                }
                key={index}
                onMouseEnter={() => setActiveSubtype(item.title)}
              >
                <h3 className={"text-white text-lg"}>{item.title}</h3>
                {item.submenu && <Image src={RightArrow} alt="right arrow" />}
              </div>
              {item.submenu && activeSubtype === item.title && (
                <SubItem submenu={item.submenu} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
