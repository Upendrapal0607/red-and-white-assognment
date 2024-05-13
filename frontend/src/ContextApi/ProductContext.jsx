import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const ProductContext = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};
