import { useFiltersContext } from "@/pages/catalogue";
import { TEST_LAPTOPS } from "@/testData/laptops";
import FilterProduct from "./FilterProduct";

export default function Filters() {
  const { activeFilters, setActiveFilters } = useFiltersContext();
  const results = 136;

  return (
    <div
      className={"flex flex-col w-8/12 h-full my-4 p-4 bg-white drop-shadow-lg"}
    >
      <div className={"flex flex-row justify-between items-center"}>
        <div className={"flex flex-row"}>
          <p className={"text-2xl mr-2"}>{results} Results</p>
          {activeFilters.map((filter, index) => (
            <div
              className={
                "flex flex-row justify-between items-center bg-[#535353] px-2 mx-1"
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
        <div className={"flex flex-row"}>
          <p>Sort by</p>
          <p className={"ml-2"}>Relevance</p>
        </div>
      </div>
      <div className={"flex flex-row flex-wrap justify-between"}>
        {TEST_LAPTOPS.map((product) => (
          <FilterProduct product={product} />
        ))}
      </div>
    </div>
  );
}
