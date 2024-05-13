import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../ContextApi/ProductContext";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cartProduct} = useContext(CartContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-gray-800 sticky top-0" style={{zIndex:"10"}}>
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-semibold text-lg">
               E COMERCE
              </Link>
            </div>
            <div className="block">
              <div className="ml-10 flex  items-center  space-x-4">
                <Link
                  to="/addproduct"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                 ADD PRODUCT
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
              <p className="mb-[-5px] text-sm text-red-600">{cartProduct.length}</p>
                    <FaCartShopping className="text-xl font-bold"/>
                </Link>
               
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </nav>
  );
};
