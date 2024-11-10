import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { PizzaProps } from "../types/pizza";
import { useCartContext } from "../context/CartContext";

const CartItem: React.FC<PizzaProps> = ({ pizza }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  return (
    <main className="select-none">
      <section className="mb-2 flex gap-x-4">
        <div className="flex items-center justify-center">
          <Image src={pizza.image} width={90} height={90} alt="pizza_img" />
        </div>

        <section className="flex flex-1 flex-col gap-x-1">
          <div className="text-lg font-bold capitalize">{pizza.name}</div>

          <section className="flex flex-col gap-y-1">
            <div className="text-[15px] font-medium capitalize">
              crosta: {pizza.crust}
            </div>

            <div className="mb-2 text-[15px] font-medium capitalize">
              Tamanho: {pizza.size}
            </div>

            <section className="flex items-center gap-x-1">
              <div
                onClick={() => decreaseAmount(pizza.id, pizza.price)}
                className="gradient flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full text-white"
              >
                <BiMinus />
              </div>

              <div className="items center flex max-w-[30px] flex-1 justify-center text-sm font-semibold">
                {pizza.amount}
              </div>

              <div
                onClick={() => increaseAmount(pizza.id, pizza.price)}
                className="gradient flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full text-white"
              >
                <BiPlus />
              </div>
            </section>
          </section>
        </section>

        <section className="flex flex-col justify-between">
          <div
            onClick={() => removeItem(pizza.id, pizza.price, pizza.crust)}
            className="flex cursor-pointer items-center justify-center self-end text-2xl text-orange transition-all duration-100 hover:scale-110"
          >
            <IoCloseOutline />
          </div>

          <div>
            <span className="font-robotoCondensed text-[17px] font-medium">
              {(pizza.price !== undefined ? pizza.price : 0) *
                (pizza.amount !== undefined ? pizza.amount : 1)}
            </span>
          </div>
        </section>
      </section>

      <section className="flex flex-wrap items-center gap-3 border-b border-black/10 p-6">
        <div className="font-semibold">
          Adicionais:{" "}
          {pizza.additionalTopping &&
            pizza.additionalTopping.length === 0 &&
            "Nenhum"}
        </div>

        {pizza.additionalTopping &&
          pizza.additionalTopping.length > 0 &&
          pizza.additionalTopping.map((topping, index) => (
            <div
              className="gradient rounded-full px-3 py-1 text-sm font-medium capitalize leading-none"
              key={index}
            >
              {topping.name}
            </div>
          ))}
      </section>
    </main>
  );
};

export default CartItem;
