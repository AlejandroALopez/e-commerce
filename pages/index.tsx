import Image from "next/image";
import Head from "next/head";
import { Fragment, useState } from "react";
import { Inter } from "next/font/google";
import { slides } from "@/utils/imageConstants";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <main className={`flex flex-col ${inter.className}`}>
      <Fragment>
        <Head>
          <title>AFK E-Commerce</title>
          <meta
            name="description"
            content="An E-Commerce app built using Next.js, featuring laptops, PCs, accessories, and more!"
          />
        </Head>
        <div className={"flex flex-col items-center"}>
          <div
            className={"w-full mb-8 bg-center bg-cover duration-500"}
          >
            <Image 
              src={slides[slideIndex].url}
              alt={slides[slideIndex].alt}
            />
          </div>
          <div className={"flex flex-col px-8 py-2"}>
            <p className={"text-2xl"}>Check our products!</p>
          </div>
          <div
            className={
              "flex flex-col lg:flex-row flex-wrap items-center justify-between w-10/12 mb-12"
            }
          >
            <div className={"flex flex-col w-80 py-48 bg-gray-400 mt-12"} />
            <div className={"flex flex-col w-80 py-48 bg-gray-400 mt-12"} />
            <div className={"flex flex-col w-80 py-48 bg-gray-400 mt-12"} />
          </div>
        </div>
      </Fragment>
    </main>
  );
}
