
import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t border-red-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="hidden md:block">
            <h3 className="text-red-600 text-lg font-semibold mb-4">FlashKart</h3>
            <p className="text-sm">
              Your one-stop shop for all your tech needs. We offer a wide range of products
              from top brands at unbeatable prices.
            </p>
            <p className="text-sm mt-2">
              &copy; {new Date().getFullYear()} FlashKart. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-red-600 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="/product-category" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Shop</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="hidden md:block">
            <h3 className="text-red-600 text-lg font-semibold mb-4">Categories</h3>
            <div className='flex gap-12'>
                   <ul className="space-y-2">
                      <li><a href="/product-category?category=mobiles" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Mobiles</a></li>
                      <li><a href="/product-category?category=airpodes" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Airpodes</a></li>
                      <li><a href="/product-category?category=camera" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Cameras</a></li>
                      <li><a href="/product-category?category=speakers" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Speakers</a></li>
                    </ul>
                     <ul className="space-y-2">
                      <li><a href="/product-category?category=televisions" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Televisions</a></li>
                      <li><a href="/product-category?category=watches" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Watches</a></li>
                      <li><a href="/product-category?category=refrigerator" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Refrigerator</a></li>
                      <li><a href="/product-category?category=Mouse" className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm">Mouse</a></li>
                    </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-red-600 text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm">Email: manthan.ecommerce28.com</p>
            <p className="text-sm">Phone: 7972884367</p>
            <div className="flex space-x-4 mt-4">
              <a href="mailto: manthan.ecommerce28@gmail.com" target="_blank" className="text-gray-700 text-2xl hover:text-red-600 transition-colors duration-200" aria-label="Email">               
                <MdEmail />
              </a>

              <a href="https://wa.me/7972884367" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 text-2xl transition-colors duration-200" aria-label="WhatsApp">
                <RiWhatsappFill />
              </a>
              <a href="https://www.linkedin.com/in/manthan-nimonkar-082987297/" target="_blank" className="text-gray-700 text-2xl hover:text-red-600 transition-colors duration-200" aria-label="Instagram">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='bg-slate-200'>
//       <div className='container mx-auto p-4'>
//        <p className='text-center font-bold' title="Youtube Channel">Dynamic Coding with Amit</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer