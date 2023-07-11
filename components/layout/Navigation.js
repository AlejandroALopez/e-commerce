import Link from "next/link";

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
      <nav
        className={
          "flex flex-col md:flex-row items-center justify-center w-9/12" 
        }
      >
        <ul
          className={
            "flex flex-col md:flex-row items-center justify-evenly w-11/12"
          }
        >
          <Link href="/laptops" className={"flex flex-col"}>
            <p className={"text-white"}>Laptops</p>
          </Link>
          <Link href="/PCs" className={"flex flex-col"}>
            <p className={"text-white"}>PCs</p>
          </Link>
          <Link href="/Accessories" className={"flex flex-col"}>
            <p className={"text-white"}>Accessories</p>
          </Link>
        </ul>
      </nav>
      <div className={"flex items-center justify-center w-2/12"}>
        <p className={"text-white"}>Cart</p>
      </div>
    </div>
  );
}
