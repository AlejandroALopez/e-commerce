import Image from "next/image";
import { useEffect, useState } from "react";
import { laptopFilters, miceFilters, priceFilters, micePriceFilters } from "@/utils/filterConstants";
import { PriceFilters, ComponentFilters } from "@/types/filterTypes";
import { useFiltersContext } from "@/pages/catalogue";
import CheckIcon from "@/public/buttons/check.svg";

interface FiltersProps {
  type: string
}

export default function Filters(props: FiltersProps) {
  const { activeFilters, setActiveFilters } = useFiltersContext();
  const [activePriceFilter, setActivePriceFilter] = useState("");

  // interchangable filters, depending on product type
  const [availablePriceFilters, setAvailablePriceFilters] = useState<PriceFilters[]>([]);
  const [availableComponentFilters, setAvailableComponentFilters] = useState<ComponentFilters[]>([]);

  function isComponentInFilters(alias: string, option: string): boolean {
    return (
      activeFilters.components[alias] &&
      activeFilters.components[alias].indexOf(option) !== -1
    );
  }

  // handler for adding an option to the filter, adding a key if needed
  function addFilter(alias: string, option: string) {
    let updatedValue = {};
    if (alias in activeFilters.components) {
      // filter exists, push option to array
      updatedValue = { [alias]: [...activeFilters.components[alias], option] };
    } else {
      // new filter, add first option
      updatedValue = { [alias]: [option] };
    }
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      components: { ...prevFilters.components, ...updatedValue },
    }));
  }

  // handler for removing an option to the filter, adding a key if needed
  function removeFilter(alias: string, option: string | number) {
    let copyObject = { ...activeFilters };
    let copyArray = [...activeFilters.components[alias]];
    if (copyArray.length === 1) {
      // removing only element, so just remove key
      delete copyObject.components[alias];
      setActiveFilters(copyObject);
    } else {
      // remove element from array
      copyArray = copyArray.filter((item) => item !== option);
      setActiveFilters((prevFilters) => ({
        ...prevFilters,
        components: {
          ...activeFilters.components,
          [alias]: copyArray,
        },
      }));
    }
  }

  useEffect(() => {
    if(props.type === "Mouse") {
      setAvailablePriceFilters(micePriceFilters);
      setAvailableComponentFilters(miceFilters);
    } else {
      setAvailablePriceFilters(priceFilters);
      setAvailableComponentFilters(laptopFilters);
    }}, [props.type]);

  return (
    <div
      className={"flex flex-col w-3/12 h-full my-4 p-4 bg-white drop-shadow-lg"}
    >
      <p className={"text-2xl mb-2"}>Filters: </p>
      <div className={"flex flex-row flex-wrap"}>
        {Object.keys(activeFilters.components).map((filter) =>
          activeFilters.components[filter].map((f, index) => (
            <div
              key={index}
              className={
                "flex flex-row w-fit items-center bg-[#535353] py-1 px-4 m-1 rounded-sm"
              }
            >
              <p className={"text-[#C7C0C0]"}>{f}</p>
            </div>
          ))
        )}
        {Object.keys(activeFilters.components).length > 0 && (
          <button
            className={"ml-2"}
            onClick={() =>
              setActiveFilters({
                price: { min: 0, max: 100000 },
                components: {},
              })
            }
          >
            <p className={"text-md text-red-500"}>Clear all</p>
          </button>
        )}
      </div>
      {/* price filters */}
      <div>
        <p className={"text-xl"}>By Price</p>
        {availablePriceFilters.map((filter, index) => (
          <div key={index} className={"flex flex-row items-center my-2"}>
            <button
              onClick={() => {
                if (filter.name === activePriceFilter) {
                  setActivePriceFilter("");
                  setActiveFilters((prevFilters) => ({
                    ...prevFilters,
                    price: { min: 0, max: 100000 },
                  }));
                } else {
                  setActivePriceFilter(filter.name);
                  setActiveFilters((prevFilters) => ({
                    ...prevFilters,
                    price: { min: filter.min, max: filter.max },
                  }));
                }
              }}
              className={`rounded-md border-black border-[1.5px] mr-2 ${
                filter.name === activePriceFilter
                  ? "bg-black p-1"
                  : "bg-white p-3"
              }`}
            >
              {filter.name === activePriceFilter && (
                <div className={"relative w-[16px] h-[16px]"}>
                  <Image src={CheckIcon} alt="check" />
                </div>
              )}
            </button>
            <p>{filter.name}</p>
          </div>
        ))}
      </div>
      {/* other filters */}
      {availableComponentFilters.map((filter, index) => (
        <div key={index}>
          <p className={"text-xl"}>By {filter.title}</p>
          {filter.options?.map((option, i) => (
            <div key={i} className={"flex flex-row items-center my-2"}>
              <button
                className={`rounded-md border-black border-[1.5px] mr-2 ${
                  isComponentInFilters(filter.alias, option)
                    ? "bg-black p-1"
                    : "bg-white p-3"
                }`}
                onClick={() => {
                  if (isComponentInFilters(filter.alias, option)) {
                    removeFilter(filter.alias, option);
                  } else {
                    addFilter(filter.alias, option);
                  }
                }}
              >
                {isComponentInFilters(filter.alias, option) && (
                  <div className={"relative w-[16px] h-[16px]"}>
                    <Image src={CheckIcon} alt="check" />
                  </div>
                )}
              </button>
              <p>{option}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
