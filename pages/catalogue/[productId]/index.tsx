import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useCartContext } from "@/pages/_app";
import ImageSelector from "@/components/product/ImageSelector";
import { Laptop, Component } from "@/types/productTypes";
import {
  moneyFormatter,
  firstLetterUpercase,
  costDifferenceFormatter,
} from "@/utils/productConstants";
import { getOneProductHandler } from "@/actions/productActions";
import { setLocalStorageItem } from "@/utils/localStorageUtils";

interface ProductProps {
  productData: Laptop;
}

function ProductPage(props: ProductProps) {
  const router = useRouter();
  const { cart, setCart } = useCartContext();
  const [currentPrice, setCurrentPrice] = useState<number>(
    props.productData.basePrice
  );
  const [customProduct, setCustomProduct] = useState<Laptop>(props.productData);

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

  function addProductToCart() {
    const prod = {
      number: 1,
      price: currentPrice,
      product: customProduct,
    };
    setLocalStorageItem("cart", [...cart, prod]); // save new cart in local storage
    setCart((prevCart) => [...prevCart, prod]);
    router.back();
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
          <ImageSelector
            id={props.productData.id}
            type={props.productData.type}
            images={props.productData.images}
          />
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
              className={
                "bg-[#D40E0E] rounded-sm py-2 px-6 drop-shadow-lg transition hover:scale-110 duration-300"
              }
              onClick={addProductToCart}
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
                              : "bg-[#F1F1F1] transition hover:scale-110 duration-300"
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

  const selectedProduct = await getOneProductHandler(productId as string);

  return {
    props: {
      productData: {
        id: selectedProduct?._id.toString(),
        title: selectedProduct?.title,
        type: selectedProduct?.type,
        basePrice: selectedProduct?.basePrice,
        images: selectedProduct?.images,
        baseComponents: selectedProduct?.baseComponents,
        availableComponents: selectedProduct?.availableComponents,
      },
    },
  };
}
