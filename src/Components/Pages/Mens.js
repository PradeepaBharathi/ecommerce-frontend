import React, { useEffect } from 'react';
import mens from '../Assests/mensfashion.webp';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByCategory } from '../redux/Productslice';
import { useNavigate } from "react-router-dom";
import './pages.css'; 
import { addToCart } from '../redux/cartProductSlice';

function Mens() {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.CategoryProducts);

  useEffect(() => {
    dispatch(fetchProductByCategory({ Productcategory: category }));
  }, [dispatch, category]);

  const handleProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

 const handleAddtocart = (e, productId) => {
    e.stopPropagation();
    const quantity = 1;  
    dispatch(addToCart({ productId, quantity }));
    window.location.reload()
    console.log("Add to cart button clicked");
    console.log(productId);
  };

  return (
    <div>
      <div className="image-container">
        <img
          src={mens}
          className="jewellery-image"
          alt="Men's Fashion"
        />
        <div className="image-overlay">
          MensApparels
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => {
          return (
            <div
              key={product._id}
              className="product-card"
             
            >
              <div className="image-wrapper">
                <img
                  alt={product.image}
                  src={product.image}
                  className="product-image"
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">
                  {product.title}
                </h3>
                <p className="product-price">
                  ${product.price}
                </p>
              </div>
              <div className="button-container">
                <button
                  onClick={(e) => handleAddtocart(e,product._id)}
                  className="add-to-cart-button"
                >
                  Add to cart
                </button>
                <button className='add-to-cart-button'  onClick={() => handleProduct(product._id)}>
                    View Product
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mens;
