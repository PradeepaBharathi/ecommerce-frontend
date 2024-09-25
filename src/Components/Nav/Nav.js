import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import shoplogo from "../Assests/shoplogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchProductByCategory } from "../redux/Productslice";

const navigation = [
  { name: "Mens", href: "/mens" },
  { name: "Womens", href: "/womens" },
  { name: "Accessories", href: "/accessories" },
  { name: "Makeup", href: "/makeup" },
  { name: "Electronics", href: "/electronics" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [currentNav, setCurrentNav] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.allProducts);


  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    const filtered = product.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleNavClick = (item) => {
    setCurrentNav(item.name);

    dispatch(fetchProductByCategory({ Productcategory: item.name }));

    navigate(`${item.href}/${item.name}`);
  };

  const handleSearchProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`)
    setSearchTerm('');
    setFilteredProducts([]);
  };
  return (
    <Disclosure as="nav" className="bg-amber-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden xs:mr-0"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start xs:mr-20">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={shoplogo}
                className="h-16 w-16 sm:h-12 sm:w-12 xs:h-7 xs:w-7 xs:mr-14 rounded-full"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 mt-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={classNames(
                      item.name === currentNav
                        ? "bg-amber-400 text-black"
                        : "text-black hover:bg-amber-400 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:mt-2">
            <div className="relative text-gray-600 focus-within:text-gray-400 sm:ml-8 sm:m-3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="h-6 w-6 sm:h-4 sm:w-4 xs:hidden"
                />
              </span>

              <input
                type="search"
                className="w-full py-2 text-sm text-black bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 sm:w-28 sm:py-1 sm:text-xs sm:pl-8 xs:w-20 xs:pl-1"
                placeholder="Search..."
                autoComplete="off"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button
              type="button"
              className="relative rounded-full bg-white-800 p-1 text-black hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <div className="relative inline-block">
                <ShoppingCartIcon
                  aria-hidden="true"
                  className="h-6 w-6 cart "
                />
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
              0
                </span>
              </div>
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon className="h-8 w-8" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => handleNavClick(item)}
              className={classNames(
                item.name === currentNav
                  ? "bg-amber-500 text-black"
                  : "text-black-300 hover:bg-amber-400 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      {searchTerm && (
        <div className="absolute top-16 w-full bg-white shadow-lg z-10">
          <ul className="py-2 px-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li
                  key={product._id}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSearchProduct(product._id)}
                >
                  {product.title}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-700">
                No products found
              </li>
            )}
          </ul>
        </div>
      )}
    </Disclosure>
  );
}
