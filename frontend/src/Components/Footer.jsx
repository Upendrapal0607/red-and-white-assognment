import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaSquareFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-white">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-100">
              {" "}
              Help : upendrapal06072@gmail.com
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-100">
              &copy; Copyright 2024.All rights reserved | Design by : UPENDRA
              PAL.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
