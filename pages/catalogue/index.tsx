import Head from "next/head";
import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  Fragment,
  useContext,
} from "react";
import Filters from "@/components/filters/Filters";
import FilterResults from "@/components/filters/FilterResults";
import { laptopActiveFilters } from "@/types/filterTypes";
import { GetServerSidePropsContext } from "next";
import { getProductsHandler } from "@/actions/productActions";

interface ContextProps {
  activeFilters: laptopActiveFilters;
  setActiveFilters: Dispatch<SetStateAction<laptopActiveFilters>>;
}

export const FiltersContext = createContext<ContextProps>({
  activeFilters: {
    price: { min: 0, max: 100000 },
    components: {},
  },
  setActiveFilters: (): laptopActiveFilters =>
    Object({
      price: { min: 0, max: 100000 },
      components: {},
    }),
});

export default function Catalogue(props: any) {
  const [activeFilters, setActiveFilters] = useState<laptopActiveFilters>({
    price: { min: 0, max: 100000 },
    components: {},
  });

  return (
    <Fragment>
      <Head>
        <title>AFK Catalogue</title>
        <meta
          name="description"
          content="Search for your desired item in our catalogue!"
        />
      </Head>
      <div className={"flex flex-row bg-[#F5F5F5] justify-evenly"}>
        <FiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
          <Filters />
        </FiltersContext.Provider>
        <FiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
          <FilterResults products={props.products}/>
        </FiltersContext.Provider>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const type = query.type;
  const products = await getProductsHandler(type as string || "");

  return {
    props: {
      products: products.map((product: any) => ({
        id: product._id.toString(),
        title: product.title,
        type: product.type,
        basePrice: product.basePrice,
        images: product.images,
        baseComponents: product.baseComponents,
        availableComponents: product.availableComponents,
      })),
    },
  };
}

export const useFiltersContext = () => useContext(FiltersContext);
