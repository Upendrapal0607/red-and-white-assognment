import React from "react";
import { HomePage } from "../Pages/HomePage";
import { Cart } from "../Pages/Cart";
import { AddProduct } from "../Components/AddNewProduct";
import { Route, Routes } from "react-router-dom";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
};
