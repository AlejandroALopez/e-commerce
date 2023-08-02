import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/pages/_app";
import DropDown from "../dropdown/Dropdown";
import CartIcon from "@/public/buttons/cart.svg";

export default function Navigation() {
  const { cart, setCart } = useCartContext();

  return (
    <div
      className={
        "flex flex-col items-center justify-between bg-black md:flex-row"
      }
    >
      <div className={"flex items-center justify-center w-2/12"}>
        <Link href="/">
          <p className={"text-xl m-5 text-white"}>AFK</p>
        </Link>
      </div>
      <DropDown />
      <div className={"flex items-center justify-center w-2/12"}>
        <Link
          href="/checkout/cart"
          className={
            "flex items-center w-[30px] h-[30px] transition hover:scale-110 duration-300"
          }
        >
          <Image src={CartIcon} height={30} width={30} alt="cart"></Image>
          {cart.length > 0 && (
            <div className={"px-3 py-1 ml-2 rounded-full bg-main"}>
              <p className={"text-white"}>{cart.length}</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
