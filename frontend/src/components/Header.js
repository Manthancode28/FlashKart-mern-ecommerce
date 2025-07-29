// import React, { useContext, useState } from 'react'

// import myLogo from '../assest/ecommerce2.png'
// import { GrSearch } from "react-icons/gr";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify'
// import { setUserDetails } from '../store/userSlice';
// import ROLE from '../common/role';
// import Context from '../context';

// const userRole = "ADMIN";
// const Header = () => {
//   const user = useSelector(state => state?.user?.user)
//   const dispatch = useDispatch()
//   const [menuDisplay,setMenuDisplay] = useState(false)
//   const context = useContext(Context)
//   const navigate = useNavigate()
//   const searchInput = useLocation()
//   const URLSearch = new URLSearchParams(searchInput?.search)
//   const searchQuery = URLSearch.getAll("q")
//   const [search,setSearch] = useState(searchQuery)

//   const handleLogout = async() => {
//     const fetchData = await fetch(SummaryApi.logout_user.url,{
//       method : SummaryApi.logout_user.method,
//       credentials : 'include'
//     })

//     const data = await fetchData.json()

//     if(data.success){
//       toast.success(data.message)
//       dispatch(setUserDetails(null))
//       navigate("/")
//     }

//     if(data.error){
//       toast.error(data.message)
//     }

//   }

//   const handleSearch = (e)=>{
//     const { value } = e.target
//     setSearch(value)

//     if(value){
//       navigate(`/search?q=${value}`)
//     }else{
//       navigate("/search")
//     }
//   }
//   return (
//     <header className='h-16 shadow-md bg-white fixed w-full z-40'>
//       <div className=' h-full container mx-auto flex items-center px-4 md:px-8 lg:px-16 justify-between'>
//            <div className=''>
//                 <Link to={"/"}>
//                     <img src={myLogo} alt="Logo" className="h-12 w-auto object-contain" />
//                 </Link>
//             </div>

//             <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
//                 <input type='text' placeholder='search product here...' className='w-full outline-none' onChange={handleSearch} value={search}/>
//                 <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
//                   <GrSearch />
//                 </div>
//             </div>


//             <div className='flex items-center gap-7'>
                
//                 <div className='relative flex justify-center'>

//                   {
//                     user?._id && (
//                       <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
//                         {
//                           user?.profilePic ? (
//                             <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
//                           ) : (
//                             <FaRegCircleUser/>
//                           )
//                         }
//                       </div>
//                     )
//                   }
                  
                  
//                  {
//                       menuDisplay && (
//                           <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
//                               <nav>
//                                   {
//                                       user?.role?.toLowerCase() === ROLE.ADMIN.toLowerCase() ? ( 
//                                           <Link 
//                                               to={"/admin-panel/all-products"} 
//                                               className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' 
//                                               onClick={() => setMenuDisplay(false)}
//                                           >
//                                               Admin Panel
//                                           </Link>
//                                       ) : ( 
//                                           <Link 
//                                               to={"/cart"} 
//                                               className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' 
//                                               onClick={() => setMenuDisplay(false)}
//                                           >
//                                               Orders
//                                           </Link>
//                                       )
//                                   }
//                               </nav>
//                           </div>
//                       )
//                   }
                 
//                 </div>

//                   {
//                      user?._id && (
//                       <Link to={"/cart"} className='text-2xl relative'>
//                           <span><FaShoppingCart/></span>
      
//                           <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
//                               <p className='text-sm'>{context?.cartProductCount}</p>
//                           </div>
//                       </Link>
//                       )
//                   }
              


//                 <div>
//                   {
//                     user?._id  ? (
//                       <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
//                     )
//                     : (
//                     <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
//                     )
//                   }
                    
//                 </div>

//             </div>
//       </div>
//     </header>
//   )
// }

// export default Header
// src/components/Header.js
import React, { useContext, useState } from 'react';
import myLogo from '../assest/ecommerce2.png'; // Your logo will now fit better!
import { GrSearch } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import CategoryMegaMenu from './CategoryMegaMenu';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });
    const data = await fetchData.json();
    if(data.success){ toast.success(data.message); dispatch(setUserDetails(null)); navigate("/"); }
    if(data.error){ toast.error(data.message); }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if(value){ navigate(`/search?q=${value}`); }else{ navigate("/search"); }
  };

  return (
    <header className='h-16 shadow-lg bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 md:px-8 lg:px-16 justify-between relative'>
        <div>
          <Link to={"/"}>
            <img src={myLogo} alt="FlashKart Logo" className="h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Categories Mega Menu Trigger */}
        <div 
          className="hidden lg:block h-full"
          onMouseEnter={() => setShowCategoryMenu(true)}
          onMouseLeave={() => setShowCategoryMenu(false)}
        >
          <button className="h-full flex items-center px-4 text-black font-semibold hover:bg-gray-100 hover:text-red-600 transition-colors"> {/* Added hover text-red-600 */}
            Categories
          </button>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border border-gray-300 rounded-full focus-within:shadow-md pl-2 overflow-hidden'>
          <input 
            type='text' 
            placeholder='Search products here...' 
            className='w-full outline-none py-1 px-2 text-gray-800 bg-transparent'
            onChange={handleSearch} 
            value={search}
          />
          <div className='text-lg min-w-[50px] h-9 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer hover:bg-red-700 transition-colors'> {/* Back to Red */}
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
            {user?._id && (
              <div 
                className='text-3xl cursor-pointer relative flex justify-center text-gray-800 hover:text-red-600 transition-colors' // Back to Red hover
                onClick={() => setMenuDisplay(prev => !prev)}
              >
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full object-cover border-2 border-red-600' alt={user?.name} /> 
                ) : (
                  <FaRegCircleUser/>
                )}
              </div>
            )}
            
            {menuDisplay && (
              <div className='absolute bg-white top-14 right-0 min-w-[150px] p-2 shadow-xl rounded-lg border border-gray-100 animate-fade-in z-50'>
                <nav>
                  {user?.role?.toLowerCase() === ROLE.ADMIN.toLowerCase() ? ( 
                    <Link 
                      to={"/admin-panel/all-products"} 
                      className='whitespace-nowrap block py-2 px-3 text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors' // Back to Red hover/text
                      onClick={() => setMenuDisplay(false)}
                    >
                      Admin Panel
                    </Link>
                  ) : ( 
                    <Link 
                      to={"/orders"} 
                      className='whitespace-nowrap block py-2 px-3 text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors' // Back to Red hover/text
                      onClick={() => setMenuDisplay(false)}
                    >
                      Orders
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout} 
                    className='whitespace-nowrap block w-full text-left py-2 px-3 text-red-600 hover:bg-red-50 rounded-md transition-colors' // Back to Red text
                  >
                    Logout
                  </button>
                </nav>
              </div>
            )}
          </div>

          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative text-gray-800 hover:text-red-600 transition-colors'> {/* Back to Red hover */}
              <span><FaShoppingCart/></span>
              <div className='bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3 text-xs font-semibold'> {/* Back to Red */}
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}
          
          <div>
            {!user?._id ? (
              <Link to={"/login"} className='px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors shadow-md'>Login</Link> 
            ) : null}
          </div>
        </div>
        
        {showCategoryMenu && (
            <div 
              className="absolute top-full left-0 right-0 max-w-[1200px] mx-auto bg-white shadow-xl rounded-b-lg overflow-hidden py-4 animate-fade-in-down z-50"
              onMouseEnter={() => setShowCategoryMenu(true)}
              onMouseLeave={() => setShowCategoryMenu(false)}
            >
              <CategoryMegaMenu onClose={() => setShowCategoryMenu(false)} />
            </div>
          )}

      </div>
    </header>
  );
};

export default Header;