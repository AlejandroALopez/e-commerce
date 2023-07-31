import Image from "next/image";
import { useEffect, useState } from "react";
import { useFiltersContext } from "@/pages/catalogue";
import FilterProduct from "./FilterProduct";
import { Product } from "@/types/productTypes";
import DownArrow from "@/public/arrows/down1.svg";

interface FiltersProps {
  products: Product[] | any[],
}

export default function Filters(props: FiltersProps) {
  const { activeFilters, setActiveFilters } = useFiltersContext();
  const [results, setResults] = useState<Product[]>(props.products);

  function filterHelper(element: Product) {
    let filtered: boolean = true;

    if (
      element.basePrice < activeFilters.price.min ||
      element.basePrice > activeFilters.price.max
    ) {
      filtered = false; // price range not met
      return filtered;
    }

    for (const [key, value] of Object.entries(activeFilters.components)) {
      // for every filter
      if (
        activeFilters.components[key].indexOf(
          element.baseComponents[key].name
        ) === -1
      ) {
        // check if product is in filter's array
        filtered = false; // filter not satisfied, dont include item
        break;
      }
    }
    return filtered; // if all filters passed, include
  }

  useEffect(() => {
    // when filters change, filter laptops array
    setResults(props.products.filter((product: Product) => filterHelper(product)));
  }, [activeFilters]);

  // function handleSort() {
  //   console.log("TODO: Sort by options");
  // }

  return (
    <div className={"flex flex-col w-8/12 h-full my-4 p-4"}>
      <div className={"flex flex-row justify-between items-center"}>
        <div className={"flex flex-row"}>
          <p className={"text-2xl mr-2"}>{results.length} Result(s)</p>
        </div>
        {/* <div className={"flex flex-row items-center"}>
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
        </div> */}
      </div>
      <div className={"flex flex-row flex-wrap gap-4"}>
        {results.map((product) => (
          <FilterProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
