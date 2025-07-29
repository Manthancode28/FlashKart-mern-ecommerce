// import React, { useEffect, useState } from 'react'
// import image1 from '../assest/banner/img1.webp'
// import image2 from '../assest/banner/img2.webp'
// import image3 from '../assest/banner/img3.jpg'
// import image4 from '../assest/banner/img4.jpg'
// import image5 from '../assest/banner/img5.webp'


// import image1Mobile from '../assest/banner/img1_mobile.jpg'
// import image2Mobile from '../assest/banner/img2_mobile.webp'
// import image3Mobile from '../assest/banner/img3_mobile.jpg'
// import image4Mobile from '../assest/banner/img4_mobile.jpg'
// import image5Mobile from '../assest/banner/img5_mobile.png'

// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";


// const BannerProduct = () => {
//     const [currentImage,setCurrentImage] = useState(0)

//     const desktopImages = [
//         image1,
//         image2,
//         image3,
//         image4,
//         image5
//     ]

//     const mobileImages = [
//         image1Mobile,
//         image2Mobile,
//         image3Mobile,
//         image4Mobile,
//         image5Mobile
//     ]

//     const nextImage = () =>{
//         if(desktopImages.length - 1 > currentImage){
//             setCurrentImage(preve => preve + 1)
//         }
//     }

//     const preveImage = () =>{
//         if(currentImage != 0){
//             setCurrentImage(preve => preve - 1)
//         }
//     }


//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             if(desktopImages.length - 1 > currentImage){
//                 nextImage()
//             }else{
//                 setCurrentImage(0)
//             }
//         },5000)

//         return ()=> clearInterval(interval)
//     },[currentImage])

//   return (
//     <div className='container mx-auto px-4 rounded '>
//         <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

//                 <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
//                     <div className=' flex justify-between w-full text-2xl'>
//                         <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
//                         <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
//                     </div>
//                 </div>

//                 {/**desktop and tablet version */}
//               <div className='hidden md:flex h-full w-full overflow-hidden'>
//                 {
//                         desktopImages.map((imageURl,index)=>{
//                             return(
//                             <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
//                                 <img src={imageURl} className='w-full h-full'/>
//                             </div>
//                             )
//                         })
//                 }
//               </div>


//                 {/**mobile version */}
//                 <div className='flex h-full w-full overflow-hidden md:hidden'>
//                 {
//                         mobileImages.map((imageURl,index)=>{
//                             return(
//                             <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
//                                 <img src={imageURl} className='w-full h-full object-cover'/>
//                             </div>
//                             )
//                         })
//                 }
//               </div>


//         </div>
//     </div>
//   )
// }

// export default BannerProduct

// src/components/BannerProduct.js
import React, { useEffect, useState } from 'react';
import image1 from '../assest/banner/img1.webp';
import image2 from '../assest/banner/img2.webp';
import image3 from '../assest/banner/img3.jpg';
import image4 from '../assest/banner/img4.jpg';
import image5 from '../assest/banner/img5.webp';
import myImg2 from "../assest/banner/myImg2.jpg";
import myImg3 from "../assest/banner/myImg3.png";


import image1Mobile from '../assest/banner/img1_mobile.jpg';
import image2Mobile from '../assest/banner/img2_mobile.webp';
import image3Mobile from '../assest/banner/img3_mobile.jpg';
import image4Mobile from '../assest/banner/img4_mobile.jpg';
import image5Mobile from '../assest/banner/img5_mobile.png';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [
    myImg3,
    myImg2,
    image3,
    image4,
    image5
  ];

  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage(prev => prev + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const preveImage = () => {
    if (currentImage !== 0) {
      setCurrentImage(prev => prev - 1);
    } else {
      setCurrentImage(desktopImages.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, desktopImages.length]);

  return (
    <div className='w-full lg:h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] h-auto overflow-hidden shadow-lg'>
        <div className='w-full h-full bg-gray-100 relative'>

            {/* Navigation Arrows */}
            <div className='absolute z-10 h-full w-full hidden md:flex items-center justify-between px-4 group'>
                <button 
                  onClick={preveImage} 
                  className='bg-white bg-opacity-80 shadow-md rounded-full p-2 text-2xl text-gray-700 hover:bg-opacity-100 hover:text-red-600 transition-all opacity-0 group-hover:opacity-100' // Red hover
                >
                    <FaAngleLeft/>
                </button>
                <button 
                  onClick={nextImage} 
                  className='bg-white bg-opacity-80 shadow-md rounded-full p-2 text-2xl text-gray-700 hover:bg-opacity-100 hover:text-red-600 transition-all opacity-0 group-hover:opacity-100' // Red hover
                >
                    <FaAngleRight/>
                </button>
            </div>

            {/* Desktop and Tablet Version */}
            <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                    desktopImages.map((imageUrl,index)=>{
                        return(
                        <div 
                            className='w-full h-full min-w-full min-h-full transition-transform duration-700 ease-in-out'
                            key={imageUrl} 
                            style={{transform : `translateX(-${currentImage * 100}%)`}}
                        >
                            <img src={imageUrl} className='w-full h-full object-cover'/>
                        </div>
                        )
                    })
                }
            </div>

            {/* Mobile Version */}
            <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                    mobileImages.map((imageUrl,index)=>{
                        return(
                        <div 
                            className='w-full h-full min-w-full min-h-full transition-transform duration-700 ease-in-out'
                            key={imageUrl} 
                            style={{transform : `translateX(-${currentImage * 100}%)`}}
                        >
                            <img src={imageUrl} className='w-full h-full object-cover'/>
                        </div>
                        )
                    })
                }
            </div>

            {/* Dots Indicator for Mobile */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 md:hidden z-20">
                {mobileImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full ${currentImage === index ? 'bg-red-600' : 'bg-gray-300'}`} // Back to Red active dot
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    </div>
  );
};

export default BannerProduct;