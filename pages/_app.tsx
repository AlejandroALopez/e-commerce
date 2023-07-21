import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { CartElement } from "@/types/cartTypes";

interface ContextProps {
  cart: CartElement[];
  setCart: Dispatch<SetStateAction<CartElement[]>>;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  setCart: (): CartElement[] => [],
});

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CartElement[]>([]);

  return (
    <Layout>
      <CartContext.Provider value={{ cart, setCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </Layout>
  );
}

export const useCartContext = () => useContext(CartContext);
