import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../ContextApi/ProductContext";
import { EmptyCart } from "../Components/EmptyCart";
import { CartCard } from "../Components/CartCard";

export const Cart = () => {
  const [price, setPrice] = useState(0);

  const { cartProduct } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cartProduct.forEach((item) => {
      total += item.price;
    });
    setPrice(total);
  }, []);
  return cartProduct?.length == 0 ? (
    <EmptyCart />
  ) : (
    <div className="min-h-[90vh] flex flex-col gap-2 sm:flex-row justify-center text-white px-2">
      <div className="w-full flex flex-col gap-2 sm:min-w-[68%] sm:min-h-[80vh] min-h-[30vh] my-2">
        {cartProduct.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>
      <div className="sticky top-[65px] rounded-sm bg-blue-700 min-w-full text-black sm:min-w-[30%] sm:min-h-[200px] h-full my-2 text-left px-2 py-2">
        <h4 className="font-semibold text-lg">Price details</h4>
        <div className="my-8 mx-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-medium text-sm">
              Price {`(${cartProduct.length})`} item
            </p>
            <p className="font-medium text-sm">${price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-sm">Discount</p>
            <p className="font-medium text-sm text-green-600">
              -${(price * 20) / 100}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-sm">Delivery charge</p>
            <p className="font-medium text-sm text-green-600">
              <span className="line-through text-black mr-2">$80</span>Free
            </p>
          </div>
          <div className="flex justify-between items-center border-t border-b border-gray-400 py-4">
            <p className="font-semibold text-lg">Total amount</p>
            <p className="font-semibold text-lg">
              {price - (price * 20) / 100}
            </p>
          </div>
        </div>
        <div>
          <p className="text-green-600">You will save 200 on this order.</p>
        </div>
      </div>
    </div>
  );
};
