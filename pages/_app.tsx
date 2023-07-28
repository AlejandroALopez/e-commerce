import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { CartElement } from "@/types/cartTypes";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorageUtils";

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

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = getLocalStorageItem("cart");
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  return (
    <Layout>
      <CartContext.Provider value={{ cart, setCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </Layout>
  );
}

export const useCartContext = () => useContext(CartContext);
