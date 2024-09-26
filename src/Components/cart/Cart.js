import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, addToCart, updateCartItemQuantity, removeFromCart } from "../redux/cartProductSlice";

const Cart = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const handleAdd = (itemId) => {
    console.log(itemId);
    const item = cartItems.find((item) => item._id === itemId); 
    
    if (item) {
      console.log(item.quantity); 
      dispatch(updateCartItemQuantity({ itemId: itemId, quantity: item.quantity + 1 }));
      window.location.reload() 

    } else {
      console.warn(`Item with ID ${itemId} not found in cart.`);
    }
  };
  
  const handleDecrease = (itemId,productId) => {
    console.log(productId)
    const item = cartItems.find((item) =>item._id==itemId); 
    console.log(itemId)
    console.log(item)
 
    if (item) {
      if (item.quantity > 1) { 
        dispatch(updateCartItemQuantity({ itemId: itemId, quantity: item.quantity - 1 }));
        window.location.reload() 

      } else {
        dispatch(removeFromCart(productId));
        window.location.reload() 
      }
    } else {
      console.warn(`Item with ID ${itemId} not found in cart.`);
    }
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
    window.location.reload()
  };
  const totalCost = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0).toFixed(2);
  console.log(totalCost)
  return (
    <div className="cart-container">
      <h2 className="text-xl font-bold text-amber-600">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.product._id} className="flex justify-between items-center p-2 border-b">
              <div>
                <img src={item.product.image} alt="product image" className="w-10 h-10" />
                <h3 className="text-lg text-amber-600">{item.product.title}</h3>
                <p className="text-sm text-amber-600">${item.product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrease(item._id,item.product._id)}
                    className="bg-red-500 text-black px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2 text-amber-600">{item.quantity}</span>
                  <button
                    onClick={() => handleAdd(item._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDelete(item.product._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded ml-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
       <div className="total-cost mt-4 text-black">
            <h3 className="text-lg font-bold">Total Cost: ${totalCost}</h3>
          </div>
    </div>
  );
};

export default Cart;
