import { MenuSubItem } from "@/types/menuTypes";

interface SubMenuProps {
  submenu: MenuSubItem[] | null;
}

export default function SubItem(props: SubMenuProps) {
  const { submenu } = props;

  return (
    <div
      className={
        "bg-[#4A4A4A] absolute left-[14rem] top-[0rem] flex flex-col items-start p-2 w-56"
      }
    >
      {submenu?.map((item, index) => (
        <div
          className={
            "flex flex-row items-center justify-between w-full hover:bg-[#AE0000] cursor-pointer p-2"
          }
          key={index}
        >
          <h3 className={"text-white text-lg"}>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
