import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

// blind modal to body
Modal.setAppElement("body");

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const CartBottom = () => {
  const { setIsOpen, cart } = useCartContext();
  //   modal state
  const [modal, setModal] = useState(false);

  //   open modal
  const openModal = () => {
    setModal(true);
  };

  //   close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {cart.length >= 1 ? (
        <div className="mt-auto px-6 py-3 lg:py-6">
          {/* total price */}
          <div className="mb-6 flex items-center justify-between font-robotoCondensed text-lg font-semibold">
            <div>Total</div>
            <div>$320</div>
          </div>

          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(false), openModal();
              }}
              className="btn btn-lg gradient flex justify-center font-semibold"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 -z-10 flex h-full w-full items-center justify-center">
          <div>Your cart is empty</div>
        </div>
      )}

      {/* checkout Modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
          className="h-full w-full bg-white outline-none lg:fixed lg:left-[50%] lg:top-[50%] lg:max-h-[500px] lg:max-w-[800px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rounded-[30px]"
        >
          {/* close modal icon */}
          <div
            onClick={closeModal}
            className="absolute right-2 top-2 z-30 cursor-pointer duration-200 hover:scale-125"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>

          {/* <CheckoutDetails /> */}
        </Modal>
      )}
    </>
  );
};

export default CartBottom;
