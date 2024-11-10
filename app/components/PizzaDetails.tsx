import { useEffect, useState } from "react";
import { Topping } from "../types/pizza";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import { PizzaDetailsProps } from "../types/PizzaDetails";
import CrustSelection from "./CrustSelection";
import Toppings from "./Toppings";
import { useCartContext } from "../context/CartContext";

const PizzaDetails: React.FC<PizzaDetailsProps> = ({ pizza, setModal }) => {
  const [size, setSize] = useState("Grande");
  const [crust, setCrust] = useState("tradicional");
  const [additionalTopping, setAdditionalTopping] = useState<Topping[]>([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const basePrice =
      size === "Pequena"
        ? pizza.priceSm
        : size === "Media"
          ? pizza.priceMd
          : size === "Grande"
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
    <main className="flex h-full flex-col md:p-8 lg:flex-row lg:gap-x-8">
      <section className="flex items-center justify-center lg:flex-1">
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
      </section>

      <section className="flex flex-1 flex-col">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="h-[46vh] flex-1 overflow-y-scroll bg-white pr-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-200 lg:h-[50vh]">
            <section className="font-semibold">
              <h2 className="mb-1 text-3xl capitalize">{pizza.name}</h2>

              <div className="font-Media mb-6 text-lg">
                <span>
                  {size === "Pequena"
                    ? "25 cm"
                    : size === "Media"
                      ? "30 cm"
                      : size === "Grande"
                        ? "35 cm"
                        : null}
                </span>

                <span>, Crosta {crust}</span>
              </div>
            </section>

            <SizeSelection pizza={pizza} size={size} setSize={setSize} />

            <CrustSelection crust={crust} setCrust={setCrust} />

            <div className="mb-4 text-xl font-semibold">
              Escolher acompanhamento:
            </div>

            <section className="flex flex-1 flex-wrap justify-center gap-2 py-1 lg:justify-start">
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
            </section>
          </div>
        </div>

        <section className="flex h-full items-center px-2 lg:items-end">
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
        </section>
      </section>
    </main>
  );
};

export default PizzaDetails;
