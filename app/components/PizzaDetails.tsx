/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Topping } from "../types/pizza";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import { PizzaDetailsProps } from "../types/PizzaDetails";

const PizzaDetails: React.FC<PizzaDetailsProps> = ({
  pizza,
  modal,
  setModal,
}) => {
  // pizza size state
  const [size, setSize] = useState("small");

  // pizza crust state
  const [crust] = useState("traditional");

  // pizza topping state
  const [additionalTopping] = useState<Topping[]>([]);

  // pizza topping price
  const [additionalToppingPrice, setAdditionalToppinPrice] = useState(0);

  // price state
  const [price, setPrice] = useState(0);

  // set the price basead on the pizza price
  useEffect(() => {
    const basePrice =
      size === "small"
        ? pizza.priceSm
        : size === "medium"
          ? pizza.priceMd
          : size === "large"
            ? pizza.priceLg
            : 0;
    const finalPrice = basePrice + additionalToppingPrice;
    setPrice(parseFloat(finalPrice.toFixed(2)));
  }, [
    size,
    pizza.priceSm,
    pizza.priceMd,
    pizza.priceLg,
    additionalToppingPrice,
  ]);

  //set additional topping price
  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);

      setAdditionalToppinPrice(toppingPrice);
    } else {
      setAdditionalToppinPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex h-full flex-col md:p-8 lg:flex-row lg:gap-x-8">
      {/* top */}
      <div className="flex items-center justify-center lg:flex-1">
        {/* pizza image */}
        <div className="mt-6 max-w-[300px] lg:mt-0 lg:max-w-none">
          <Image
            width={400}
            height={400}
            src={pizza.image}
            alt="image modal"
            priority={true}
            className="relative mx-auto"
          />
        </div>
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col bg-pink-100">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="h-[46vh] flex-1 overflow-y-scroll bg-white pr-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-200">
            {/*name */}
            <div className="font-semibold">
              <h2 className="mb-1 text-3xl capitalize">{pizza.name}</h2>

              {/* size & crust text */}
              <div className="mb-6 bg-yellow-200 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                      ? "30 cm"
                      : size === "large"
                        ? "35 cm"
                        : null}
                </span>

                <span>, {crust} crust</span>
              </div>
            </div>

            {/* size selection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />

            {/* crust sizesection */}
            {/* <CrustSelection /> */}

            {/* toppings */}
            <div>Chosse Toppings</div>

            {/* topping list */}
            <div>
              {/* {pizza.toppings?.map((topping, index) => {
                return <Topping key={index} />;
              })} */}{" "}
              TO DO
            </div>
          </div>
        </div>

        {/* add to cart btn */}
        <div className="flex h-full items-center px-2 lg:items-end">
          <button className="btn btn-lg gradient flex w-full justify-center">
            <div>Add to cart for</div>
            <div>$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
