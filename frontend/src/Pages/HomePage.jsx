import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import { Spinner } from "@chakra-ui/react";

export const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const FetchProduct = async () => {
    setLoading(true);
    const data = await axios.get(
      `https://task-managment-backend-rosy.vercel.app/products?category=${category}`
    );
    setProduct(data?.data?.productList);
    setLoading(false);
  };

  useEffect(() => {
    FetchProduct();
  }, [category]);
  return loading ? (
    <div className="h-[85vh] flex justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  ) : (
    <>
      <div className="text-white flex gap-3 justify-center items-center flex-wrap my-3">
        <button
          className="bg-blue-500 rounded-sm px-2 py-1 hover:bg-blue-700"
          onClick={() => setCategory("jewelery")}
        >
          jewelery
        </button>
        <button
          className="bg-blue-500 rounded-sm px-2 py-1 hover:bg-blue-700"
          onClick={() => setCategory("electronics")}
        >
          electronics
        </button>
        <button
          className="bg-blue-500 rounded-sm px-2 py-1 hover:bg-blue-700"
          onClick={() => setCategory("men's clothing")}
        >
          men's clothing
        </button>
        <button
          className="bg-blue-500 rounded-sm px-2 py-1 hover:bg-blue-700"
          onClick={() => setCategory("women's clothing")}
        >
          women's clothing
        </button>
        <button
          className="bg-blue-500 rounded-sm px-2 py-1 hover:bg-blue-700"
          onClick={() => setCategory("")}
        >
          reset
        </button>
      </div>

      {product.length == 0 ? (
        <div className="w-full h-screen flex items-center justify-center text-red-800">
          <h1>
            OPPS! {category} RELATED PRODUCT NOT FOUNT EXPLORE OTHER PRODUCT
            UNTILL {category} IS NOT ADDED TO THE QUEUE
          </h1>
        </div>
      ) : (
        <div className="w-full my-2 px-4 box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {product.map((item) => (
            <ProductCard key={item?._id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
