import Image from "next/image";
import { Laptop } from "@/types/productTypes";
import { moneyFormatter } from "@/utils/productConstants";
import LaptopImg from "@/public/products/product1.png";

interface FilterProductProps {
  product: Laptop; // replace with laptop / product type
}

export default function FilterProduct(props: FilterProductProps) {
  const results = 136;

  function seeProductHandler() {
    console.log("see product");
  }

  return (
    <div
      className={
        "flex flex-col items-center w-[32%] my-4 p-4 bg-white drop-shadow-lg"
      }
    >
      <div className={"relative w-[160px] h-[160px]"}>
        <Image src={LaptopImg} alt="laptop" />
      </div>
      <p className={"text-2xl"}>{props.product.title}</p>
      <div className={"flex flex-col items-start w-3/4 my-6"}>
        <p>- Detail A</p>
        <p>- Detail B</p>
        <p>- Detail C</p>
        <p>- Detail D</p>
      </div>
      <p className={"text-2xl"}>
        {moneyFormatter.format(props.product.basePrice)}
      </p>
      <button className={"bg-[#D40E0E] rounded-bl-full my-4 py-2 px-10"} onClick={seeProductHandler}>
        <p className={"text-white"}>BUY NOW</p>
      </button>
    </div>
  );
}
