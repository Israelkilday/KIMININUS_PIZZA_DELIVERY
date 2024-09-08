"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";

interface Topping {
  image: string;
  name: string;
  price: number;
}

interface PizzaType {
  id: number;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
}

export interface PizzaProps {
  pizza: PizzaType;
}

// blind modal to body
Modal.setAppElement("body");

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  // modal state
  const [modal, setModal] = useState(false);
  // open modal
  const openModal = () => {
    setModal(true);
  };
  // closeModal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group rounded-xl px-4 py-2 xl:px-2 xl:py-4">
      <Image
        onClick={openModal}
        src={pizza.image}
        width={270}
        height={270}
        alt="pizzas Images"
        priority={true}
        className="mb-8 cursor-pointer transition-all duration-300 lg:group-hover:translate-y-3 xl:mb-2"
      />

      {/* title */}
      <div onClick={openModal}>
        <div className="mb-3 cursor-pointer text-xl font-bold capitalize">
          {pizza.name}
        </div>
      </div>

      {/* description */}
      <div className="mb-6 min-h-[60px] text-sm font-medium">
        {pizza.description}
      </div>

      {/* price & btn  */}
      <div className="mb-6 flex items-center justify-between">
        {/* price -> hidden (sm) - visible (lg) */}
        <div className="hidden text-xl font-semibold lg:flex">
          stars at {pizza.priceSm}
        </div>

        {/* btn -> hidden (sm) - visible (lg) */}

        <button
          onClick={openModal}
          className="gradient btn-sm hidden rounded-lg font-semibold text-white lg:flex"
        >
          Choose
        </button>

        {/*btn -> visible (sm) -hidden (lg)  */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient px-3 text-sm lg:hidden"
        >
          starts at {pizza.priceSm}
        </button>
      </div>

      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="h-full w-full bg-white outline-none lg:fixed lg:left-[50%] lg:top-[50%] lg:max-h-[550px] lg:max-w-[800px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rounded-[30px]"
        >
          {/* close modal icon */}
          <div
            onClick={closeModal}
            className="absolute right-2 top-2 z-30 cursor-pointer duration-200 hover:scale-125"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>

          {/*pizza details */}
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
