import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import CheckoutDetails from "./CheckoutDetails";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useCartContext();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main>
      {cart.length >= 1 ? (
        <section className="mt-auto px-6 py-3 lg:py-6">
          <div className="mb-6 flex items-center justify-between font-robotoCondensed text-lg font-semibold">
            <div>Total</div>
            <div>${cartTotal.toFixed(2)}</div>
          </div>

          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(false), openModal();
              }}
              className="btn btn-lg gradient flex justify-center font-semibold"
            >
              Finalizar Compra
            </button>
          </div>
        </section>
      ) : (
        <section className="absolute top-0 -z-10 flex h-full w-full items-center justify-center">
          <div>Seu carrinho está vazio</div>
        </section>
      )}

      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
          className="h-full w-full bg-white outline-none lg:fixed lg:left-[50%] lg:top-[50%] lg:max-h-[500px] lg:max-w-[800px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rounded-[30px]"
        >
          <div
            onClick={closeModal}
            className="absolute right-2 top-2 z-30 cursor-pointer duration-200 hover:scale-125"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>

          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </main>
  );
};

export default CartBottom;
