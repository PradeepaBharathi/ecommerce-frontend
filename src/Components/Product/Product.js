import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/Productslice';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartProductSlice';


function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productId);

  useEffect(() => {
    dispatch(fetchProductById({ id: id }));
  }, [dispatch, id]);

  const handleAddtocart = (e, productId) => {
    e.stopPropagation();
    const quantity = 1;  
    dispatch(addToCart({ productId, quantity }));
    window.location.reload()
    console.log("Add to cart button clicked");
    console.log(productId);
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-10/12 h-96 lg:h-96 bg-amber-100 rounded-md flex flex-col sm:flex-row sm:h-auto xs:h-auto xs:mt-2'> 
          <div className='w-full flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/2 p-4 border-b sm:border-r border-gray-300'> 
              <img src={product.image} alt='product-image' className='h-full w-full' />
            </div>
            <div className='w-full sm:w-1/2 p-4 flex flex-col space-y-3'>
              <h3 className='text-black font-bold italic'>Product Details</h3>
              <div className='text-black font-bold '>Name : {product.title}</div>
              <div className='text-black font-bold '>Price : ${product.price}</div>
              <div className='text-black font-bold '>Description : {product.description}</div>
              <div className='text-black font-bold '>Rating : {product.rating?.rate?.$numberDecimal || 'Not available'}</div>

              <div className='text-black font-bold '>Available : {product.availability}</div>
              <div className="flex justify-center">
                <button onClick={(e) => handleAddtocart(e,product._id)} className="bg-amber-400 text-black font-bold text-center px-4 py-1 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Product;
