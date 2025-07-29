// import React, { useContext, useEffect, useRef, useState } from 'react';
// import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
// import displayINRCurrency from '../helpers/displayCurrency';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
// import addToCart from '../helpers/addToCart';
// import Context from '../context';

// const HorizontalCardProduct = ({ category, heading }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const loadingList = new Array(13).fill(null);
//   const scrollElement = useRef();

//   const { fetchUserAddToCart } = useContext(Context);

//   const handleAddToCart = async (e, id) => {
//     await addToCart(e, id);
//     fetchUserAddToCart();
//   };

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const categoryProduct = await fetchCategoryWiseProduct(category);
//       setData(categoryProduct?.data || []); // ✅ safe fallback
//       setLoading(false);

//     } catch (error) {
//       console.error('Error fetching category products:', error);
//       setData([]); // ✅ fallback to empty
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const scrollRight = () => {
//     scrollElement.current.scrollLeft += 300;
//   };

//   const scrollLeft = () => {
//     scrollElement.current.scrollLeft -= 300;
//   };

//   return (
//     <div className="container mx-auto px-4 my-6 relative">
//       <h2 className="text-2xl font-semibold py-4">{heading}</h2>

//       <div
//         className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all"
//         ref={scrollElement}
//       >
//         <button
//           className="bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block"
//           onClick={scrollLeft}
//         >
//           <FaAngleLeft />
//         </button>
//         <button
//           className="bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block"
//           onClick={scrollRight}
//         >
//           <FaAngleRight />
//         </button>

//         {loading ? (
//           loadingList.map((_, index) => (
//             <div
//               key={index}
//               className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex"
//             >
//               <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse" />
//               <div className="p-4 grid w-full gap-2">
//                 <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full"></h2>
//                 <p className="capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full"></p>
//                 <div className="flex gap-3 w-full">
//                   <p className="text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
//                   <p className="text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
//                 </div>
//                 <button className="text-sm text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse"></button>
//               </div>
//             </div>
//           ))
//         ) : Array.isArray(data) && data.length > 0 ? (
//           data.map((product, index) => (
//             <Link
//               key={product?._id || index}
//               to={`product/${product?._id}`}
//               className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex"
//             >
//               <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]">
//                 <img
//                   src={product?.productImage?.[0] || "/fallback.jpg"}
//                   className="object-scale-down h-full hover:scale-110 transition-all"
//                   alt={product?.productName || "Product"}
//                 />
//               </div>
//               <div className="p-4 grid">
//                 <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
//                   {product?.productName}
//                 </h2>
//                 <p className="capitalize text-slate-500">{product?.category}</p>
//                 <div className="flex gap-3">
//                   <p className="text-red-600 font-medium">
//                     {displayINRCurrency(product?.sellingPrice)}
//                   </p>
//                   <p className="text-slate-500 line-through">
//                     {displayINRCurrency(product?.price)}
//                   </p>
//                 </div>
//                 <button
//                   className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
//                   onClick={(e) => handleAddToCart(e, product?._id)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-slate-500 text-center w-full py-4">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HorizontalCardProduct;

import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';
// src/components/HorizontalCardProduct.js
// ... (imports remain the same)

const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(10).fill(null);
  const scrollElement = useRef();

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const categoryProduct = await fetchCategoryWiseProduct(category);
      setData(categoryProduct?.data || []);
    } catch (error) {
      console.error('Error fetching category products:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl lg:text-3xl font-bold text-black py-4">{heading}</h2>

      <div
        className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all relative group"
        ref={scrollElement}
      >
        <button
          className="bg-white shadow-lg rounded-full p-2 absolute left-0 text-2xl text-gray-700 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity z-10 -ml-4 hover:bg-gray-100 hover:text-red-600" // Red hover
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-lg rounded-full p-2 absolute right-0 text-2xl text-gray-700 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity z-10 -mr-4 hover:bg-gray-100 hover:text-red-600" // Red hover
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        {loading ? (
          loadingList.map((_, index) => (
            <div
              key={index}
              className="w-full min-w-[280px] md:min-w-[300px] max-w-[280px] md:max-w-[300px] h-36 bg-white rounded-lg shadow-md overflow-hidden flex animate-pulse"
            >
              <div className="bg-gray-100 h-full w-2/5 p-4 flex items-center justify-center">
                <div className="h-20 w-20 bg-gray-200 rounded-full"></div>
              </div>
              <div className="p-4 grid w-3/5 gap-2">
                <div className="h-5 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="flex gap-3 w-full">
                  <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="h-9 bg-gray-200 rounded-full mt-2"></div>
              </div>
            </div>
          ))
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((product, index) => (
            <Link
              key={product?._id || index}
              to={`product/${product?._id}`}
              className="w-full min-w-[280px] md:min-w-[300px] max-w-[280px] md:max-w-[300px] h-36 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex transform hover:-translate-y-1 group"
            >
              <div className="bg-gray-50 h-full w-2/5 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product?.productImage?.[0] || "/fallback.jpg"}
                  className="object-contain h-full w-full hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                  alt={product?.productName || "Product"}
                />
              </div>
              <div className="p-4 grid w-3/5 gap-1">
                <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                  {product?.productName}
                </h2>
                <p className="capitalize text-gray-600 text-sm">{product?.category}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-red-600 font-bold text-lg"> {/* Back to Red */}
                    {displayINRCurrency(product?.sellingPrice)}
                  </p>
                  <p className="text-gray-500 line-through text-sm">
                    {displayINRCurrency(product?.price)}
                  </p>
                </div>
                {/* <button
                  className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full mt-3 transition-colors shadow-sm hover:shadow-md" // Back to Red
                  onClick={(e) => handleAddToCart(e, product?._id)}
                >
                  Add to Cart
                </button> */}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-center w-full py-4">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HorizontalCardProduct;