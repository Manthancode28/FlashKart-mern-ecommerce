
import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/displayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'


const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const scrollElement = useRef();

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const categoryProduct = await fetchCategoryWiseProduct(category);
      setData(categoryProduct?.data);
    } catch (error) {
      console.error("Failed to fetch category products:", error);
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
    <div className='container mx-auto px-4 my-6 relative'>
      <h2 className='text-2xl lg:text-3xl font-bold text-black py-4'>{heading}</h2>

      <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all relative group' ref={scrollElement}>
        <button
          className='bg-white shadow-lg rounded-full p-2 absolute left-0 text-2xl text-gray-700 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity z-10 -ml-4 hover:bg-gray-100 hover:text-red-600' // Red hover
          onClick={scrollLeft}
        >
          <FaAngleLeft/>
        </button>
        <button
          className='bg-white shadow-lg rounded-full p-2 absolute right-0 text-2xl text-gray-700 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity z-10 -mr-4 hover:bg-gray-100 hover:text-red-600' // Red hover
          onClick={scrollRight}
        >
          <FaAngleRight/>
        </button>

        {loading ? (
          loadingList.map((_, index) => (
            <div
              className='w-full min-w-[280px] md:min-w-[260px] max-w-[280px] md:max-w-[260px] bg-white rounded-lg shadow-md overflow-hidden animate-pulse'
              key={"verticalCardLoading" + index}
            >
              <div className="bg-gray-100 h-48 p-4 flex justify-center items-center">
                <div className="h-24 w-24 bg-gray-200 rounded-full"></div>
              </div>
              <div className='p-4 grid gap-2'>
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="flex gap-2">
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="h-9 bg-gray-200 rounded-full mt-2"></div>
              </div>
            </div>
          ))
        ) : (
          data.map((product) => (
            <Link
              to={"product/" + product?._id}
              className='w-full min-w-[280px] md:min-w-[260px] max-w-[280px] md:max-w-[260px] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1 group'
              key={product?._id}
            >
              <div className="bg-gray-50 h-48 p-4 flex justify-center items-center overflow-hidden">
                <img
                  src={product.productImage[0]}
                  className='object-contain h-full w-full hover:scale-110 transition-transform duration-300 mix-blend-multiply'
                  alt={product?.productName}
                />
              </div>
              <div className='p-4 grid gap-1'>
                <h2 className='font-medium text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                <p className='capitalize text-gray-600 text-sm'>{product?.category}</p>
                <div className='flex items-baseline gap-2 mt-1'>
                  <p className='text-red-600 font-bold text-lg'>{displayINRCurrency(product?.sellingPrice)}</p> {/* Back to Red */}
                  <p className='text-gray-500 line-through text-sm'>{displayINRCurrency(product?.price)}</p>
                </div>
               
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default VerticalCardProduct;
