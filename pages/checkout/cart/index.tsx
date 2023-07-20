import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import { moneyFormatter } from "@/utils/productConstants";

export function Cart() {
  const [products, setProducts] = useState([
    {
      number: 1,
      product: {
        id: "2om2ni2f2",
        name: "ROG Zephyrus G14",
        basePrice: 3299.99,
      },
    },
    {
      number: 1,
      product: {
        id: "2d923d92nc",
        name: "HP Victus Laptop 2023",
        basePrice: 2499.99,
      },
    },
  ]); // TODO: Use real products instead

  // Increase number of orders of a product in cart by one
  function increaseProductCount(id: string) {
    const updatedProducts = products.map((p) => {
      if (p.product.id === id) {
        return { ...p, number: p.number + 1 };
      }

      return p;
    });
    setProducts(updatedProducts);
  }

  // Decrease number of orders of a product in cart by one
  function decreaseProductCount(id: string) {
    const updatedProducts = products.map((p) => {
      if (p.product.id === id) {
        return { ...p, number: p.number - 1 };
      }

      return p;
    });
    setProducts(updatedProducts);
  }

  function removeProduct(id: string) {
    const updatedProducts = products.filter((p) => {
      return p.product.id !== id;
    });
    setProducts(updatedProducts);
  }

  function getTotalPrice() {
    return products.reduce(
      (total, p) => (total = total + p.product.basePrice * p.number),
      0
    );
  }

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
        className={"flex flex-col gap-8 bg-[#F5F5F5] justify-evenly px-12 py-4"}
      >
        <div className={"mt-4"}>
          <p className={"text-3xl font-semibold"}>Your Cart</p>
        </div>
        {products.map((p) => (
          <div
            key={p.product.id}
            className={"flex flex-row h-60 border-2 border-gray-400"}
          >
            <div className={"bg-gray-300 w-3/12 h-full p-4"} />
            <div className={" w-6/12 h-full p-4"}>
              <p className={"text-xl font-semibold"}>{p.product.name}</p>
            </div>
            <div
              className={
                "flex flex-row-reverse justify-between w-4/12 h-full p-4"
              }
            >
              <div className={"flex flex-col items-end"}>
                <p className={"text-xl font-semibold"}>
                  {moneyFormatter.format(p.product.basePrice)}
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
                <p className={"text-xl"}>{p.number}</p>
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
        <div className={"flex flex-row-reverse"}>
          <div className={"flex flex-row items justify-end gap-10 w-1/2"}>
            <p className={"text-4xl font-semibold"}>Total: </p>
            <p className={"text-4xl font-semibold"}>
              {moneyFormatter.format(getTotalPrice())}
            </p>
          </div>
        </div>
        <div className={"flex flex-row-reverse mb-12"}>
          <Link href="/checkout/payment" className={"bg-[#D40E0E] py-4 px-12 rounded-lg"}>
            <p className={"text-white text-xl"}>Checkout</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
