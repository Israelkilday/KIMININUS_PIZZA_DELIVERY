import React from "react";

type CartItem = {
  name: string;
  amount: number;
  price: number;
};

type OrderListProps = {
  cart: CartItem[];
};

const OrderList = ({ cart }: OrderListProps) => {
  return (
    <div className="flex h-[150px] flex-col gap-y-4 overflow-hidden overflow-y-scroll py-2 font-semibold scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-50 md:h-[100px] md:px-6 lg:h-[240px]">
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between text-[15px]">
          <div className="flex gap-x-2">
            <div className="capitalize">{item.name}</div>
            <div>{item.amount > 1 && `x ${item.amount}`}</div>
          </div>
          <div>{(item.price * item.amount).toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;

// ✨ Novo projeto freelancer concluído! ✨

// Mesmo com o tempo mais apertado desde que comecei um novo trabalho que ainda não é na área de desenvolvimento web, continuo apaixonado por tecnologia e porque não ter uma renda extra aplicando o meu conhecimento fazendo o que eu gosto.

// Estou empolgado em compartilhar meu mais recente projeto freelancer: KIMININU'S PIZZARIA! 🍕

// Este projeto de delivery de pizzas foi desenvolvido com o objetivo de facilitar pedidos na comunidade. Nele, os usuários podem acessar o cardápio, personalizar seus pedidos e enviar diretamente para o WhatsApp do restaurante para finalização rápida e prática.

// 🔥 Principais funcionalidades:

// ✔ Context API para gerenciamento eficiente do estado do carrinho, com funcionalidades para adicionar itens, modificar quantidades e calcular o total do pedido em toda a aplicação.

// ✔ Interface Responsiva e Rápida construída com Next.js e Tailwind, otimizando a navegação e a experiência do usuário em diversos dispositivos.

// ✔ Personalização de Pedido, onde o cliente pode escolher o tamanho, a crosta e adicionar coberturas.

// ✔ Envio direto por WhatsApp com todos os dados do pedido, facilitando o contato e agilizando o processo de finalização.

// ✔ Feedback do Pedido com mensagem de sucesso e contagem regressiva após o pedido ser finalizado.

// 🔧 Principais tecnologias:

// Typescript | Next.js | React.js | Context API | TailwindCSS | react-modal | react-parallax-mouse

// Estou animado em ver este projeto ganhar vida e por poder contribuir para a experiência dos clientes da pizzaria! 🚀

// #Nextjs #React #Typescript #Freelancer #DesenvolvimentoWeb #TailwindCSS #ContextAPI
