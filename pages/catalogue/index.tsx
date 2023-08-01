import Head from "next/head";
import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  Fragment,
  useContext,
} from "react";
import { GetServerSidePropsContext } from "next";
import Filters from "@/components/filters/Filters";
import FilterResults from "@/components/filters/FilterResults";
import { productActiveFilters } from "@/types/filterTypes";
import { getProductsHandler } from "@/actions/productActions";

interface ContextProps {
  activeFilters: productActiveFilters;
  setActiveFilters: Dispatch<SetStateAction<productActiveFilters>>;
}

export const FiltersContext = createContext<ContextProps>({
  activeFilters: {
    price: { min: 0, max: 100000 },
    components: {},
  },
  setActiveFilters: (): productActiveFilters =>
    Object({
      price: { min: 0, max: 100000 },
      components: {},
    }),
});

export default function Catalogue(props: any) {
  const [currentProducts, setCurrentProducts] = useState([]); // for product refresh upon chaging type query
  const [activeFilters, setActiveFilters] = useState<productActiveFilters>({
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
          <Filters type={props.type} />
        </FiltersContext.Provider>
        <FiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
          <FilterResults products={props.products} />
        </FiltersContext.Provider>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const type = query.type || "Laptop"; // avoid error when no query selected
  const products = await getProductsHandler((type as string) || "Laptop");

  return {
    props: {
      type: type, // for different filters
      products: products.map((product: any) => ({
        id: product._id.toString(),
        title: product.title,
        type: product.type,
        basePrice: product.basePrice,
        images: product.images,
        baseComponents: product.baseComponents,
        availableComponents: product.availableComponents || null,
      })),
    },
  };
}

export const useFiltersContext = () => useContext(FiltersContext);
