

import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(()=>{
    fetchUserDetails()
    fetchUserAddToCart()
  },[])

  return (
    <>
      <Context.Provider value={{
          fetchUserDetails,
          cartProductCount,
          fetchUserAddToCart
      }}>
        <ToastContainer 
          position='top-center'
          // Use red for progress bar, neutral for background
          toastClassName="!bg-white !text-black !shadow-lg !rounded-md"
          bodyClassName="!text-black"
          progressClassName="!bg-red-600" // Red progress bar
        />
        
        <Header/>
        
        <main className='min-h-[calc(100vh-120px)] pt-16 bg-white'> {/* Main background remains white */}
          <Outlet/>
        </main>
          
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
