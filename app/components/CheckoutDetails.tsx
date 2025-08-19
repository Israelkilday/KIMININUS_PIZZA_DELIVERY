import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import Image from "next/image";
import DeliveryForm from "./DeliveryForm";
import OrderList from "./OrderList";

type CheckoutDetailsProps = {
  // eslint-disable-next-line no-unused-vars
  setModal: (value: boolean) => void;
};

const CheckoutDetails = ({ setModal }: CheckoutDetailsProps) => {
  const { cart, setCart } = useCartContext();

  const [successMsg, setSuccesMsg] = useState(false);
  const [count, setCount] = useState(5);
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    formaDePagamento: "",
    endereco: "",
    informacoesAdicionais: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormDataValid = () => {
    const { nome, telefone, formaDePagamento, endereco } = formData;
    return nome && telefone && formaDePagamento && endereco;
  };

  const handlePlaceOrder = () => {
    if (isFormDataValid()) {
      setFormValid(true);
      setSuccesMsg(true);
    } else {
      alert(
        "Por favor, preencha todos os campos obrigatórios antes de finalizar o pedido.",
      );
      setFormValid(false);
    }
  };

  useEffect(() => {
    if (successMsg && formValid) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count, successMsg, formValid]);

  useEffect(() => {
    const sendToWhatsApp = () => {
      const message = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nForma de Pagamento: ${formData.formaDePagamento}\nEndereço: ${formData.endereco}\nInformações adicionais: ${formData.informacoesAdicionais}\n\nPedido:\n${cart
        .map(
          (item) =>
            `Quantidade: ${item.amount} - ${item.name}\nTotal: ${(item.price * item.amount).toFixed(2)}`,
        )
        .join("\n")}`;

      const phoneNumber = "558599999999";
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");

      setCart([]);
      setModal(false);
    };

    if (successMsg && count === 1) {
      sendToWhatsApp();

      const timer = setTimeout(() => {
        setSuccesMsg(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [successMsg, count, setCart, setModal, cart, formData]);

  return (
    <main>
      {successMsg ? (
        <section className="flex h-[100vh] flex-col items-center justify-center px-6 lg:h-[500px]">
          <h2 className="text-center text-2xl font-semibold">
            Obrigado! Pedido realizado com sucesso.
          </h2>

          <Image
            src={"/success-1.gif"}
            width={150}
            height={150}
            alt="image_check"
          />

          <div>
            Esta janela será fechada em <span>{count}</span> segundos
          </div>
        </section>
      ) : (
        <section className="h-full lg:gap-x-8 lg:px-12 lg:py-8">
          <h2 className="mb-2 pt-6 text-center text-[20px] font-extrabold uppercase lg:mb-4 lg:pt-0 lg:text-left">
            Dados da Entrega
          </h2>

          <section className="flex h-[86vh] flex-col lg:h-[47.5vh] lg:flex-row lg:gap-x-4">
            <div className="h-full flex-1 overflow-y-auto px-8 py-4 lg:overflow-visible lg:px-0 lg:py-0">
              <DeliveryForm
                formData={formData}
                handleInputChange={handleInputChange}
              />
            </div>

            <section className="flex h-full flex-1 flex-col justify-between px-8 pt-3 lg:max-w-[40%] lg:p-0">
              <div className="mb-4 flex h-full flex-col rounded-lg border p-4">
                <h3 className="mb-4 border-b pb-4 text-base font-extrabold uppercase md:text-center">
                  Seu Pedido
                </h3>
                <OrderList cart={cart} />
              </div>

              <button
                onClick={handlePlaceOrder}
                className="btn btn-lg gradient w-full"
              >
                Fazer Pedido
              </button>
            </section>
          </section>
        </section>
      )}
    </main>
  );
};

export default CheckoutDetails;
