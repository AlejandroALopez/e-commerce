import Head from "next/head";
import { Fragment, useState } from "react";

export function Cart() {
  return (
    <Fragment>
      <Head>
        <title>AFK Cart</title>
        <meta
          name="description"
          content="Check your cart before proceding with the checkout!"
        />
      </Head>
      <div className={"flex flex-col bg-[#F5F5F5] justify-evenly px-12 py-4"}>
        <div className={"mt-4"}>
          <p className={"text-2xl font-semibold"}>Your Cart</p>
        </div>
        <div className={"flex flex-row bg-red-400 mt-12 h-60"}>
          <div className={"bg-green-500 w-3/12 h-full"}/>
          <div className={"bg-yellow-500 w-5/12 h-full"}/>
        </div>
        <div className={"flex flex-row-reverse"}>
          <div className={"bg-blue-400 mt-12 h-56 w-1/2"}>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
