import Head from "next/head";
import { Fragment, useState } from "react";

export function Payment() {
  return (
    <Fragment>
      <Head>
        <title>AFK Cart</title>
        <meta
          name="description"
          content="Enter your payment information to complete the checkout! (Note: This is a portfolio app, so you won't be charged)"
        />
      </Head>
      <div className={"flex flex-col bg-[#F5F5F5] justify-evenly px-12 py-4"}>
        <div className={"mt-4"}>
          <p className={"text-3xl font-semibold"}>Checkout</p>
        </div>
        <div className={"bg-orange-400 w-7/12 h-16"}/>
        <div className={"flex flex-row bg-red-400 mt-12 h-96"}>
          <div className={"flex flex-col bg-green-400 w-7/12 h-full"}/>
          <div className={"flex flex-col bg-yellow-400 w-4/12 h-full ml-6"}/>
        </div>
      </div>
    </Fragment>
  );
}

export default Payment;
