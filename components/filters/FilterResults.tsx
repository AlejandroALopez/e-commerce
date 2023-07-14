import Image from "next/image";
import { useState } from "react";
import { useFiltersContext } from "@/pages/catalogue";
import FilterProduct from "./FilterProduct";
import { Laptop } from "@/types/productTypes";
import { TEST_LAPTOPS } from "@/testData/laptops";
import DownArrow from "@/public/arrows/down1.svg";

export default function Filters() {
  const { activeFilters, setActiveFilters } = useFiltersContext();
  const [results, setResults] = useState<Laptop[]>(TEST_LAPTOPS);

  function handleSort() {
    console.log("TODO: Sort by options");
  }

  return (
    <div className={"flex flex-col w-8/12 h-full my-4 p-4"}>
      <div className={"flex flex-row justify-between items-center"}>
        <div className={"flex flex-row"}>
          <p className={"text-2xl mr-2"}>{results.length} Results</p>
          {activeFilters.map((filter, index) => (
            <div
              key={index}
              className={
                "flex flex-row justify-between items-center bg-[#535353] px-2 mx-1 rounded-sm"
              }
            >
              <p className={"text-[#C7C0C0]"}>{filter}</p>
            </div>
          ))}
          {activeFilters.length > 0 && (
            <button className={"ml-2"} onClick={() => setActiveFilters([])}>
              <p className={"text-md text-red-500"}>Clear all</p>
            </button>
          )}
        </div>
        <div className={"flex flex-row items-center"}>
          <p>Sort by</p>
          <button
            onClick={handleSort}
            className={
              "flex flex-row h-14 items-center justify-between ml-2 bg-white drop-shadow-lg rounded-xl px-4"
            }
          >
            <p>Relevance</p>
            <div className={"relative w-[20px] h-[20px]"}>
              <Image src={DownArrow} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
      <div className={"flex flex-row flex-wrap justify-between"}>
        {results.map((product) => (
          <FilterProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
