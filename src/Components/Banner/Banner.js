import React from "react";
import productImage from '../Assests/coat.jpg'; 

export default function FashionBanner() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          
          {/* Left Side (Heading and Subtext) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-tight">
              <span className="block">Find Your</span>
              <span className="text-amber-700">Fashion Here</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Fashion is not something that exists in dresses only. Fashion is in
              the sky, in the street, fashion has to do with ideas, the way we live,
              what is happening.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-amber-700 text-white font-semibold text-lg rounded-md">
               Explore
              </button>
             
            </div>
          </div>
          
          {/* Right Side (Image with Floating Text) */}
          <div className="relative lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <img src={productImage} alt="Fashion Item" className="h-96 object-cover" />
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-gray-300 rotate-90 sm:text-5xl xs:text-3xl">
              easy
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 text-7xl font-bold text-gray-300 rotate-90 sm:text-5xl xs:text-3xl">
              going
            </div>
           
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-4xl font-bold">9k+</p>
            <p className="text-sm text-gray-500">Unique Style</p>
          </div>
          <div>
            <p className="text-4xl font-bold">98k+</p>
            <p className="text-sm text-gray-500">Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold">2k+</p>
            <p className="text-sm text-gray-500">Store Retailer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
