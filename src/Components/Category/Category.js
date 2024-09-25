import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByCategory } from '../redux/Productslice';
import { useNavigate } from 'react-router-dom'; 
function Category() {
  const categoryMenu = [
    { name: 'Mens', href: '/mens' },
    { name: 'Womens', href: '/womens' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Makeup', href: '/makeup' },
    { name: 'Electronics', href: '/electronics' },
  ];

  const [currentNav, setCurrentNav] = useState('Mens');
  const [currentCategory, setCurrentCategory] = useState('Mens');
  const navigate = useNavigate()
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.CategoryProducts);

  const fetchProductsCategory = (category) => {
    setCurrentNav(category);
    setCurrentCategory(category);
  };

  useEffect(() => {
    dispatch(fetchProductByCategory({ Productcategory: currentCategory }));
  }, [dispatch, currentCategory]);

  const catProduct = products.slice(0, 4);
  const handleNavigate = () => {
    
    const categoryItem = categoryMenu.find((menu) => menu.name === currentCategory);
    
    if (categoryItem) {
      
      navigate(`${categoryItem.href}/${currentCategory}`);
    }
  };
  
  const handleProductClick =(id)=>{
    navigate(`/product/${id}`)
  }
  
  return (
    <div className="flex-col justify-center align-middle">
      <h1 className="text-6xl sm:text-7xl lg:text-5xl font-bold tracking-tight mt-4 text-amber-900 leading-tight text-center">
        FIND BY CATEGORY
      </h1>
      <div className="flex space-x-4 mt-5 justify-center xs:flex-wrap ">
        {categoryMenu.map((item) => (
          <a
            key={item.name}
            onClick={() => fetchProductsCategory(item.name)}
            className={classNames(
              item.name === currentNav ? 'bg-amber-400 text-black' : 'text-black hover:bg-amber-400 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium'
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center mt-20">
        {catProduct.map((product) => {
          return (
            <div key={product._id} className="group relative w-72  h-auto xs:ml-3 sm:ml-10 lg:w-48 lg:h-80 flex flex-col border p-4 rounded-lg shadow-md" onClick={()=>handleProductClick(product._id)}>
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
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-7">
        <button className="bg-amber-400 text-white text-center px-4 py-2 rounded" onClick={()=>handleNavigate(currentCategory)}>
          View {currentCategory} collection
        </button>
      </div>
    </div>
  );
}

export default Category;
