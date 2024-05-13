import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="min-w-full min-h-[85vh] m-2 text-lg font-bold text-start flex justify-center items-center gap-4 flex-col">
      <h1 className="text-center text-red-500">
        Your cart is empty Please add products to your cart
      </h1>
      <Link to={"/"}>to continue shopping</Link>
    </div>
  );
};
