import React from "react";

type DeliveryFormProps = {
  formData: {
    nome: string;
    telefone: string;
    formaDePagamento: string;
    endereco: string;
    informacoesAdicionais: string;
  };
  handleInputChange: (
    // eslint-disable-next-line no-unused-vars
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const DeliveryForm = ({ formData, handleInputChange }: DeliveryFormProps) => {
  return (
    <main className="flex h-full flex-col gap-4">
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleInputChange}
        placeholder="Nome"
        className="input w-full"
      />

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
        name="formaDePagamento"
        value={formData.formaDePagamento}
        onChange={handleInputChange}
        placeholder="Forma de Pagamento"
        className="input w-full"
      />

      <input
        type="text"
        name="endereco"
        value={formData.endereco}
        onChange={handleInputChange}
        placeholder="Endereço"
        className="input w-full"
      />

      <div className="h-full flex-1">
        <textarea
          name="informacoesAdicionais"
          value={formData.informacoesAdicionais}
          onChange={handleInputChange}
          placeholder="Informações adicionais (opcional)"
          className="textarea h-full w-full"
        ></textarea>
      </div>
    </main>
  );
};

export default DeliveryForm;
