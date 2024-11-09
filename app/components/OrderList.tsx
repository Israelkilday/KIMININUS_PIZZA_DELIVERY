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
