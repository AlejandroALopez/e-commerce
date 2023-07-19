import Head from "next/head";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { Fragment, useState } from "react";
import { TEST_LAPTOPS } from "@/testData/laptops";
import { Laptop, Component } from "@/types/productTypes";
import {
  moneyFormatter,
  firstLetterUpercase,
  costDifferenceFormatter,
} from "@/utils/productConstants";
import { bucket, getFolderName } from "@/utils/awsConstants";

interface ProductProps {
  productData: Laptop;
}

function ProductPage(props: ProductProps) {
  const [currentPrice, setCurrentPrice] = useState<number>(
    props.productData.basePrice
  );
  const [customProduct, setCustomProduct] = useState<Laptop>(props.productData);
  const [imageURLs, setImagesURLs] = useState<string[]>([]); // add just the image file name

  // Check if the component is contained in the product's current components
  function isComponentActive(
    product: Laptop,
    componentType: string,
    component: Component
  ) {
    return (
      product.baseComponents[componentType] &&
      product.baseComponents[componentType].name === component.name
    );
  }

  // Replace custom product's base component with selected component
  function handleSelectComponent(componentType: string, component: Component) {
    const currCompPrice = customProduct.baseComponents[componentType].price;
    const newCompPrice = component.price;

    if (currCompPrice >= newCompPrice) {
      // decrease price
      setCurrentPrice(
        (prevPrice) => prevPrice - (currCompPrice - newCompPrice)
      );
    } else {
      // increase price
      setCurrentPrice(
        (prevPrice) => prevPrice + (newCompPrice - currCompPrice)
      );
    }

    setCustomProduct((prevProduct) => ({
      ...prevProduct,
      baseComponents: {
        ...prevProduct.baseComponents,
        [componentType]: component,
      },
    }));
  }

  return (
    <Fragment>
      <Head>
        <title>AFK Product</title>
        <meta
          name="description"
          content="Customize your selected product and add it to the cart!"
        />
      </Head>
      <div className={"flex flex-row bg-[#F5F5F5] justify-evenly mb-12"}>
        <div className={"w-5/12"}>
          <div className={"w-full my-6 p-5 bg-white drop-shadow-lg"}>
            <p className={"text-3xl"}>{props.productData.title}</p>
          </div>
          <div className={"w-full p-5 h-96 bg-white drop-shadow-lg"}>
            <div className={"relative w-[350px] h-[350px]"}>
              <Image
                src={`${bucket}/${getFolderName(props.productData.type)}/${props.productData.id}/image1.png`}
                width={350}
                height={350}
                alt="prod"
              />
            </div>
          </div>
        </div>
        <div className={"w-1/2"}>
          <div
            className={
              "flex flex-row justify-between items-center w-full my-6 py-2 px-4 bg-white drop-shadow-lg"
            }
          >
            <p className={"text-xl"}>
              Price:{" "}
              <span className={"font-medium"}>
                {moneyFormatter.format(currentPrice)}
              </span>
            </p>
            <button
              className={"bg-[#D40E0E] rounded-sm py-2 px-6 drop-shadow-lg"}
            >
              <p className={"text-white"}>Add to cart</p>
            </button>
          </div>
          <div className={"flex flex-col w-full"}>
            {/* for all types of available components */}
            {Object.keys(props.productData.availableComponents).map(
              (compType, index) => {
                const components =
                  props.productData.availableComponents[compType];
                return (
                  <div key={index} className={"p-4 bg-white drop-shadow-lg"}>
                    <p className={"text-xl"}>{firstLetterUpercase(compType)}</p>
                    <div className={"flex flex-row flex-wrap"}>
                      {/* render each option for this component type */}
                      {components.map((comp, i) => (
                        <button
                          key={i}
                          className={`flex flex-col justify-center items-center w-3/12 h-24 mt-4 mr-6 rounded-sm drop-shadow-lg ${
                            isComponentActive(customProduct, compType, comp)
                              ? "bg-black"
                              : "bg-[#F1F1F1]"
                          }`}
                          onClick={() => {
                            if (
                              !isComponentActive(customProduct, compType, comp)
                            )
                              handleSelectComponent(compType, comp);
                          }}
                        >
                          <p
                            className={`text-xl ${
                              isComponentActive(customProduct, compType, comp)
                                ? "text-white"
                                : "text-black"
                            }`}
                          >
                            {comp.name}
                          </p>
                          {/* Text with price difference */}
                          {!isComponentActive(
                            customProduct,
                            compType,
                            comp
                          ) && (
                            <p className={`text-md text-gray-400`}>
                              {costDifferenceFormatter(
                                customProduct.baseComponents[compType].price,
                                comp.price
                              )}
                            </p>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { productId } = context.query;

  // const selectedProduct = await getOneProductHandler(
  //   productId as string,
  // );

  const selectedProduct = TEST_LAPTOPS.find((item) => item.id === productId);

  return {
    props: {
      productData: {
        // id: selectedProduct?._id.toString(),
        id: selectedProduct?.id,
        title: selectedProduct?.title,
        type: selectedProduct?.type,
        basePrice: selectedProduct?.basePrice,
        baseComponents: selectedProduct?.baseComponents,
        availableComponents: selectedProduct?.availableComponents,
      },
    },
  };
}
