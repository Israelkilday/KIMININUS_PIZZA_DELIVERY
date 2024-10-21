import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import Image from "next/image";

type CheckoutDetailsProps = {
  // eslint-disable-next-line no-unused-vars
  setModal: (value: boolean) => void;
};

const CheckoutDetails = ({ setModal }: CheckoutDetailsProps) => {
  const { cart, setCart } = useCartContext();

  const [successMsg, setSuccesMsg] = useState(false);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count, successMsg]);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccesMsg(false);
        setCart([]);
        setModal(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMsg, setCart, setModal]);

  return (
    <div>
      {successMsg ? (
        <div className="flex h-[100vh] flex-col items-center justify-center px-6 lg:h-[500px]">
          <h2 className="text-center text-2xl font-semibold">
            Thank you! The order has been palced
          </h2>

          <Image
            src={"/success-1.gif"}
            width={150}
            height={150}
            alt="image_check"
          />

          <div>
            This window will close in <span>{count}</span> {""} seconds
          </div>
        </div>
      ) : (
        <div className="h-full lg:gap-x-8 lg:px-12 lg:py-8">
          {/* title */}
          <h2 className="mb-2 pt-6 text-center text-[20px] font-extrabold uppercase lg:mb-6 lg:pt-0 lg:text-left">
            Dados da Entrega
          </h2>

          <div className="flex h-[86vh] flex-col lg:h-[47.5vh] lg:flex-row lg:gap-x-4">
            {/* box 1 */}
            <div className="h-full flex-1 overflow-y-auto px-8 py-4 lg:overflow-visible lg:px-0 lg:py-0">
              {/* input wrapper */}
              <div className="flex h-full flex-col gap-4">
                {/* first name & last name */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input w-full"
                  />
                </div>

                {/* phone & email */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input w-full"
                  />
                </div>

                {/* street & street no */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    placeholder="Street Name"
                    className="input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Steet No."
                    className="input w-full"
                  />
                </div>

                {/* block floor & apartament */}
                <div className="flex justify-between gap-x-4">
                  <input
                    type="text"
                    placeholder="Block"
                    className="input w-full"
                  />

                  <input
                    type="text"
                    placeholder="Floor"
                    className="input w-full"
                  />

                  <input
                    type="text"
                    placeholder="Apt No"
                    className="input w-full"
                  />
                </div>

                {/* textarea */}
                <div className="h-full flex-1">
                  <textarea
                    placeholder="Mentions (optional)"
                    className="textarea h-full w-full"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* box 2 */}
            <div className="flex h-full flex-1 flex-col justify-between px-8 pt-3 lg:max-w-[40%] lg:p-0">
              <div className="mb-4 flex h-full flex-col rounded-lg border p-4">
                <h3 className="mb-4 border-b pb-4 text-base font-extrabold uppercase">
                  Your order
                </h3>

                {/* items */}
                <div className="flex h-[240px] flex-col gap-y-4 overflow-hidden overflow-y-scroll py-2 font-semibold scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-50">
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between text-[15px]"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>

                        <div>{(pizza.price * pizza.amount).toFixed(2)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* place order btn */}
              <button
                onClick={() => setSuccesMsg(true)}
                className="btn btn-lg gradient w-full"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;
