import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Inter } from "next/font/google";
import { slides, typeImages } from "@/utils/imageConstants";
import { bucket } from "@/utils/awsConstants";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const router = useRouter();
  const [slideIndex, setSlideIndex] = useState(0);

  function goToCatalogueWithType(type: string | undefined) {
    router.push({
      pathname: "/catalogue",
      query: { type: type || ""}
    });
  }

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
            className={
              "w-full h-full rounded-2xl bg-center bg-cover duration-500"
            }
          >
            <Image
              src={slides[slideIndex]?.url}
              alt={slides[slideIndex]?.alt}
            />
          </div>
          <div className={"flex flex-row justify-center my-4"}>
            {[...Array(slides.length)].map(
              (value: undefined, index: number) => (
                <button
                  key={index}
                  className={`transition hover:scale-110 duration-300 w-20 h-3 mx-2 rounded-tl-3xl rounded-br-3xl ${
                    slideIndex === index ? "bg-black" : "bg-gray-400"
                  }`}
                  onClick={() => setSlideIndex(index)}
                />
              )
            )}
          </div>
          <div className={"flex flex-col px-8 py-2"}>
            <p className={"text-2xl font-medium"}>Products we offer</p>
          </div>
          <div
            className={
              "flex flex-row flex-wrap items-center justify-between w-10/12 mb-12"
            }
          >
            {typeImages.map((item, index) => (
              <button
                key={index}
                onClick={() => goToCatalogueWithType(item.type)}
                className={
                  "flex flex-col items-center p-8 bg-white mt-6 drop-shadow-md transition hover:scale-110 duration-300"
                }
              >
                <div
                  className={
                    "flex flex-col justify-center items-center w-[200px] h-[200px]"
                  }
                >
                  <Image
                    src={`${bucket}/landing/${item.fileName}`}
                    height={200}
                    width={200}
                    alt={item.type}
                  />
                </div>
                <p className={"text-xl mt-4"}>{item.title}</p>
              </button>
            ))}
          </div>
        </div>
      </Fragment>
    </main>
  );
}
