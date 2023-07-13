import Image from "next/image";
import { laptopFilters } from "@/utils/filterConstants";
import { useFiltersContext } from "@/pages/catalogue";
import CheckIcon from "@/public/buttons/check.svg";

export default function Filters() {
  const { activeFilters, setActiveFilters } = useFiltersContext();

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
                  activeFilters.indexOf(option) === -1 ? "bg-white p-3" : "bg-black p-1"
                }`}
                onClick={() => {
                  if (activeFilters.indexOf(option) === -1) {
                    setActiveFilters((oldFilters) => [...oldFilters, option]);
                  } else {
                    setActiveFilters(
                      activeFilters.filter((item) => item !== option)
                    );
                  }
                }}
              >
                {activeFilters.indexOf(option) !== -1 && (
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
