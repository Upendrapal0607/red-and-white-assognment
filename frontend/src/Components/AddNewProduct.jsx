import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
export const AddProduct = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    category: "",
    title: "",
    description: "",
    price: 0,
    oldPrice: 0,
    rating: 0,
    inStock: 0,
    image: "",
    ratecount: 0,
  });

  const handleChangeDetails = async (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]:
        name == "ratecount" ||
        name == "price" ||
        name == "oldPrice" ||
        name == "rating" ||
        name == "inStock"
          ? +value
          : value,
    });
  };

  const handleNavigate = async (e) => {
    e.preventDefault();
    console.log({ productDetails });
    if (
      productDetails.title &&
      productDetails.category &&
      productDetails.description &&
      productDetails.image &&
      productDetails.price &&
      productDetails.oldPrice &&
      productDetails.rating &&
      productDetails.inStock &&
      productDetails.ratecount
    ) {
      try {
        setLoading(true);

        const messageData = await axios.post(
          "http://localhost:8080/products",
          productDetails
        );
        if (messageData?.data?.message == "product added success") {
          setLoading(false);
          toast({
            title: "Product Added Alert",
            description: "Product Added successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Failed.",
            description: "There is an error.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Failed.",
          description: "There is an error.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "All field required",
        description: "Please fill all the fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add new product here
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 text-left" onSubmit={handleNavigate}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  placeholder="Title..."
                  value={productDetails.title}
                  onChange={handleChangeDetails}
                  id="name"
                  autoComplete="name"
                  name="title"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  value={productDetails.description}
                  onChange={handleChangeDetails}
                  type="description"
                  placeholder="Enter product description"
                  id="description"
                  name="description"
                  autoComplete="description"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={productDetails.image}
                  placeholder="product image url"
                  id="image"
                  autoComplete="image"
                  name="image"
                  onChange={handleChangeDetails}
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={productDetails.price}
                  onChange={handleChangeDetails}
                  name="price"
                  type="Number"
                  autoComplete="price"
                  required
                  placeholder="current price"
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Old Price
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={productDetails.oldPrice}
                  onChange={handleChangeDetails}
                  name="oldPrice"
                  type="Number"
                  autoComplete="oldPrice"
                  placeholder="old Price"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Number of product in stock
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={productDetails.inStock}
                  onChange={handleChangeDetails}
                  name="inStock"
                  type="Number"
                  autoComplete="inStock"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <div className="mt-1">
                <select
                  onChange={handleChangeDetails}
                  value={productDetails.category}
                  name="category"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Category</option>
                  <option value="men's clothing">Men's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                  <option value="omen's clothing">Women's clothing</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <div className="mt-1">
                <select
                  onChange={handleChangeDetails}
                  value={productDetails.rating}
                  name="rating"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Number of People Rated
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={productDetails.ratecount}
                  onChange={handleChangeDetails}
                  name="ratecount"
                  type="Number"
                  autoComplete="ratecount"
                  required
                  placeholder="Enter a rate count"
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              {loading ? (
                <Button
                  isLoading
                  w={"100%"}
                  loadingText="Loading..."
                  colorScheme="teal"
                  variant="outline"
                >
                  Loading...
                </Button>
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  ADD
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
