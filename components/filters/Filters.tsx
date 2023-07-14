import Image from "next/image";
import { laptopFilters } from "@/utils/filterConstants";
import { useFiltersContext } from "@/pages/catalogue";
import CheckIcon from "@/public/buttons/check.svg";

export default function Filters() {
  const { activeFilters, setActiveFilters } = useFiltersContext();

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
    setActiveFilters((prevFilters) => ({ ...prevFilters, components: {...prevFilters.components, ...updatedValue } }));
  }

  // handler for removing an option to the filter, adding a key if needed
  function removeFilter(alias: string, option: string) {
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
        }
      }));
    }
  }

  return (
    <div
      className={"flex flex-col w-3/12 h-full my-4 p-4 bg-white drop-shadow-lg"}
    >
      {laptopFilters.map((filter, index) => (
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
