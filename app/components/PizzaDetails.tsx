/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Topping } from "../types/pizza";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import { PizzaDetailsProps } from "../types/PizzaDetails";
import CrustSelection from "./CrustSelection";
import Toppings from "./Toppings";
import { useCartContext } from "../context/CartContext";

const PizzaDetails: React.FC<PizzaDetailsProps> = ({ pizza, setModal }) => {
  // pizza size state
  const [size, setSize] = useState("large");
  // pizza crust state
  const [crust, setCrust] = useState("tradicional");
  // pizza topping state
  const [additionalTopping, setAdditionalTopping] = useState<Topping[]>([]);
  // pizza topping price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
  // price state
  const [price, setPrice] = useState(0);
  const { addToCart } = useCartContext();

  // set the price basead on the pizza size
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

      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex h-full flex-col md:p-8 lg:flex-row lg:gap-x-8">
      {/* top */}
      <div className="flex items-center justify-center lg:flex-1">
        {/* pizza image */}
        <div className="mt-6 max-w-[300px] lg:mt-0 lg:max-w-none">
          <Image
            width={300}
            height={300}
            src={pizza.image}
            alt="image modal"
            priority={true}
            className="relative mx-auto"
          />
        </div>
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="h-[46vh] flex-1 overflow-y-scroll bg-white pr-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-200 lg:h-[50vh]">
            {/*name */}
            <div className="font-semibold">
              <h2 className="mb-1 text-3xl capitalize">{pizza.name}</h2>

              {/* size & crust text */}
              <div className="mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                      ? "30 cm"
                      : size === "large"
                        ? "35 cm"
                        : null}
                </span>

                <span>, Crosta {crust}</span>
              </div>
            </div>

            {/* size selection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />

            {/* crust sizesection */}
            <CrustSelection crust={crust} setCrust={setCrust} />

            {/* toppings */}
            <div className="mb-4 text-xl font-semibold">
              Escolher acompanhamento:
            </div>

            {/* topping list */}
            <div className="flex flex-1 flex-wrap justify-center gap-2 py-1 lg:justify-start">
              {pizza.toppings?.map((topping, index) => {
                return (
                  <Toppings
                    key={index}
                    topping={topping}
                    additionalTopping={additionalTopping}
                    setAdditionalTopping={setAdditionalTopping}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* add to cart btn */}
        <div className="flex h-full items-center px-2 lg:items-end">
          <button
            onClick={() => {
              addToCart(
                pizza.id,
                pizza.image,
                pizza.name,
                price,
                additionalTopping,
                size,
                crust,
              ),
                setModal(false);
            }}
            className="btn btn-lg gradient flex w-full justify-center"
          >
            <div>Adicionar ao carrinho&nbsp; </div>
            <div> $ {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
