
import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-4 py-6'>
           <div className='flex items-center gap-6 justify-between overflow-x-auto scrollbar-hidden pb-2'>
           {
               loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='flex-shrink-0 h-16 w-16 md:w-20 md:h-20 rounded-full bg-gray-200 animate-pulse flex items-center justify-center' key={"categoryLoading"+index}>
                                  <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct.map((product,index)=>{
                        return(
                            <Link 
                                to={"/product-category?category="+product?.category} 
                                className='flex-shrink-0 cursor-pointer flex flex-col items-center gap-1 group' 
                                key={product?.category + index}
                            >
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-2 bg-white shadow-md flex items-center justify-center 
                                group-hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100'>
                                    <img src={product?.productImage[0]} alt={product?.category} className='h-full object-contain mix-blend-multiply'/>
                                </div>
                                <p className='text-center text-sm md:text-base capitalize text-gray-800 group-hover:text-red-600 transition-colors mt-1'>{product?.category}</p> {/* Back to Red hover */}
                            </Link>
                        )
                    })
                )
            }
           </div>
    </div>
  )
}

export default CategoryList;
