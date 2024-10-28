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
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    formaPagamento: "",
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

  const validateForm = () => {
    if (
      !formData.nome ||
      !formData.telefone ||
      !formData.formaPagamento ||
      !formData.endereco
    ) {
      alert(
        "Por favor, preencha todos os campos obrigatórios antes de finalizar o pedido.",
      );
      return false;
    }
    return true;
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
      const message = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nForma de Pagamento: ${formData.formaPagamento}\nEndereço: ${formData.endereco}\nInformações adicionais: ${formData.informacoesAdicionais}\n\nPedido:\n${cart
        .map(
          (pizza) =>
            `${pizza.name} - Quantidade: ${pizza.amount} - Total: ${(pizza.price * pizza.amount).toFixed(2)}`,
        )
        .join("\n")}`;

      const phoneNumber = "5585989295516";
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
  }, [
    successMsg,
    count,
    setCart,
    setModal,
    cart,
    formData.endereco,
    formData.formaPagamento,
    formData.informacoesAdicionais,
    formData.nome,
    formData.telefone,
  ]);

  const handlePlaceOrder = () => {
    const isValid = validateForm();
    if (isValid) {
      setFormValid(true);
      setSuccesMsg(true);
    } else {
      setFormValid(false);
    }
  };

  return (
    <div>
      {successMsg ? (
        <div className="flex h-[100vh] flex-col items-center justify-center px-6 lg:h-[500px]">
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
        </div>
      ) : (
        <div className="h-full lg:gap-x-8 lg:px-12 lg:py-8">
          <h2 className="mb-2 pt-6 text-center text-[20px] font-extrabold uppercase lg:mb-4 lg:pt-0 lg:text-left">
            Dados da Entrega
          </h2>

          <div className="flex h-[86vh] flex-col lg:h-[47.5vh] lg:flex-row lg:gap-x-4">
            <div className="h-full flex-1 overflow-y-auto px-8 py-4 lg:overflow-visible lg:px-0 lg:py-0">
              <div className="flex h-full flex-col gap-4">
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Nome"
                    className="input w-full"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4 lg:gap-x-4">
                  <input
                    type="text"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="Telefone"
                    className="input w-full"
                  />

                  <input
                    type="text"
                    name="formaPagamento"
                    value={formData.formaPagamento}
                    onChange={handleInputChange}
                    placeholder="Forma de Pagamento"
                    className="input w-full"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    placeholder="Endereço"
                    className="input w-full"
                  />
                </div>

                <div className="h-full flex-1">
                  <textarea
                    name="informacoesAdicionais"
                    value={formData.informacoesAdicionais}
                    onChange={handleInputChange}
                    placeholder="Informações adicionais (opcional)"
                    className="textarea h-full w-full"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-1 flex-col justify-between px-8 pt-3 lg:max-w-[40%] lg:p-0">
              <div className="mb-4 flex h-full flex-col rounded-lg border p-4">
                <h3 className="mb-4 border-b pb-4 text-base font-extrabold uppercase md:text-center">
                  Seu Pedido
                </h3>

                <div className="flex h-[150px] flex-col gap-y-4 overflow-hidden overflow-y-scroll py-2 font-semibold scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-50 md:h-[100px] md:px-6 lg:h-[240px]">
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

              <button
                onClick={handlePlaceOrder}
                className="btn btn-lg gradient w-full"
              >
                Fazer Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;
