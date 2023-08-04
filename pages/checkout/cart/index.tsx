import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { useCartContext } from "@/pages/_app";
import { moneyFormatter } from "@/utils/productConstants";
import { bucket, getFolderName } from "@/utils/awsConstants";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorageUtils";

export function Cart() {
  const router = useRouter();
  const { cart, setCart } = useCartContext();

  // Increase number of orders of a product in cart by one
  function increaseProductCount(id: string) {
    const updatedProducts = cart.map((p) => {
      if (p.product.id === id) {
        return { ...p, number: p.number + 1 };
      }

      return p;
    });
    setLocalStorageItem("cart", updatedProducts);
    setCart(updatedProducts);
  }

  // Decrease number of orders of a product in cart by one
  function decreaseProductCount(id: string) {
    const updatedProducts = cart.map((p) => {
      if (p.product.id === id) {
        return { ...p, number: p.number - 1 };
      }

      return p;
    });
    setLocalStorageItem("cart", updatedProducts);
    setCart(updatedProducts);
  }

  function removeProduct(id: string) {
    const updatedProducts = cart.filter((p) => {
      return p.product.id !== id;
    });
    setLocalStorageItem("cart", updatedProducts);
    setCart(updatedProducts);
  }

  function getTotalPrice() {
    return cart.reduce((total, p) => (total = total + p.price * p.number), 0);
  }

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = getLocalStorageItem("cart");
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>AFK Cart</title>
        <meta
          name="description"
          content="Check your cart before proceding with the checkout!"
        />
      </Head>
      <div
        className={"flex flex-col gap-8 bg-background justify-evenly px-12 py-4"}
      >
        <div className={"mt-4"}>
          <button className={"mb-2"} onClick={() => router.back()}>
            <p className={"text-xl text-gray-400 hover:text-main"}>&lt; Keep shopping</p>
          </button>
          <p className={"text-black text-3xl font-semibold"}>Your Cart</p>
        </div>
        <div className={"min-h-[12rem]"}>
          {cart.map((p) => (
            <div
              key={p.product.id}
              className={
                "flex flex-row h-60 rounded-md bg-white drop-shadow-md"
              }
            >
              <div className={"flex justify-center items-center w-[250px] h-[250px]"}>
                <Image
                  src={`${bucket}/${getFolderName(p.product.type)}/${p.product.id
                    }/${p.product.images[0]}`}
                  height={200}
                  width={200}
                  alt="product image"
                />
              </div>
              <div className={" w-6/12 h-full p-4"}>
                <p className={"text-black text-xl font-semibold"}>{p.product.title}</p>
              </div>
              <div
                className={
                  "flex flex-row-reverse flex-wrap justify-between w-4/12 h-full p-4"
                }
              >
                <div className={"flex flex-col items-end"}>
                  <p className={"text-black text-xl font-semibold"}>
                    {moneyFormatter.format(p.price)}
                  </p>
                  <button onClick={() => removeProduct(p.product.id)}>
                    <p className={"text-blue-400"}>Remove</p>
                  </button>
                </div>
                <div
                  className={
                    "flex flex-row items-center justify-center gap-8 h-fit w-40"
                  }
                >
                  <button
                    disabled={p.number === 1}
                    onClick={() => decreaseProductCount(p.product.id)}
                  >
                    <p className={"text-3xl text-gray-400"}>-</p>
                  </button>
                  <p className={"text-black text-xl"}>{p.number}</p>
                  <button
                    disabled={p.number === 99}
                    onClick={() => increaseProductCount(p.product.id)}
                  >
                    <p className={"text-3xl text-gray-400"}>+</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={"flex flex-row-reverse"}>
          <div className={"flex flex-row items justify-end gap-10 w-1/2"}>
            <p className={"text-black text-4xl font-semibold"}>Total: </p>
            <p className={"text-black text-4xl font-semibold"}>
              {moneyFormatter.format(getTotalPrice())}
            </p>
          </div>
        </div>
        <div className={"flex flex-row-reverse mb-12"}>
          <button
            className={`bg-main py-4 px-12 rounded-lg ${cart.length === 0
                ? "opacity-50"
                : "transition hover:scale-110 duration-300"
              }`}
            disabled={cart.length === 0}
            onClick={() => { // use localhost:3000 when testing locally
              fetch("https://afk-ecommerce.vercel.app/api/create-checkout-session", {
                method: "POST",
                body: JSON.stringify({ cart }),
              })
                .then((res) => res.json())
                .then((data) => {
                  window.location.href = data.session.url;
                });
            }}
          >
            <p className={"text-white text-xl"}>Checkout</p>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
