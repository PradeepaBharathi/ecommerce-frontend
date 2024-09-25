import React, { useEffect } from 'react';
import makeup from '../Assests/skincare.jpg';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByCategory } from '../redux/Productslice';
import {  useNavigate } from "react-router-dom";

function Womens() {
    const {category} = useParams()
   const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.product.CategoryProducts)

    useEffect(()=>{
        dispatch(fetchProductByCategory({ Productcategory: category }))
    },[])
    console.log(products)

    const handleProduct = (id) => {
      console.log(id);
      navigate(`/product/${id}`)}
  return (
    <div >
    <div className='relative'>
    <img src={makeup}className='w-11/12 h-96 m-14 xs:w-72  xs:m-5 sm:ml-10' alt="Men's Fashion" />
      <div className='absolute inset-0 flex items-center justify-center text-7xl text-amber-800 font-bold italic xs:text-2xl'>
        Beauty
      </div>
    </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center mt-20 mb-10">
        {products.map((product) => {
          return (
            <div key={product._id} className="group relative w-72  h-auto xs:ml-3 sm:ml-10 lg:w-72 lg:h-72 flex flex-col border p-4 rounded-lg shadow-md bg-amber-100" onClick={()=>handleProduct(product._id)}>
              <div className="flex align-middle justify-center">
                <img alt={product.image} src={product.image} className="h-40 w-40 object-contain" />
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-sm text-gray-700">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <div className="flex justify-center">
                <button className="bg-amber-400 text-white text-center px-4 py-1 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Womens;
