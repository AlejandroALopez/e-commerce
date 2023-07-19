import Image from "next/image";
import { useRouter } from "next/router";
import { Laptop } from "@/types/productTypes";
import { moneyFormatter } from "@/utils/productConstants";
import { bucket, getFolderName } from "@/utils/awsConstants";

interface FilterProductProps {
  product: Laptop; // replace with laptop / product type
}

export default function FilterProduct(props: FilterProductProps) {
  const router = useRouter();

  function seeProductHandler() {
    router.push("/catalogue/" + props.product.id);
  }

  return (
    <div
      className={
        "flex flex-col items-center w-[32%] my-4 p-4 bg-white drop-shadow-lg"
      }
    >
      <div className={"flex items-center w-[160px] h-[160px]"}>
        <Image
          src={`${bucket}/${getFolderName(props.product.type)}/${props.product.id}/${
            props.product.images[0]
          }`}
          height={160}
          width={160}
          alt="laptop"
        />
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
      <button
        className={"bg-[#D40E0E] rounded-bl-full my-4 py-2 px-10"}
        onClick={seeProductHandler}
      >
        <p className={"text-white"}>BUY NOW</p>
      </button>
    </div>
  );
}
