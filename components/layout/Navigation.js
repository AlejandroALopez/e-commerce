import Link from "next/link";
import { useState } from "react";
import DropDown from "../dropdown/Dropdown";

export default function Navigation() {
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
        <p className={"text-white"}>Cart</p>
      </div>
    </div>
  );
}
