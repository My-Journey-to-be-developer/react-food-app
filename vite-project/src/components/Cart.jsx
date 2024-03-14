import React from 'react';
import { IoMdClose } from "react-icons/io";
import ItemsCard from './ItemsCard';
import {useSelector} from "react-redux";
import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";


const Cart = () => {
  const[activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state)=>state.cartData.cart)
  // console.log(cartItems);
  const totalQty = cartItems.reduce((totalQty, item)=>totalQty + item.qty, 0);
  const totalAmount = cartItems.reduce((totalAmount, item)=>totalAmount + item.qty * item.price, 0)
  const navigate = useNavigate();
  
  return (
    <>
    <div className={`fixed right-0 top-0 p-5 w-full lg:w-[20vw] h-full bg-white z-50 ${activeCart? "translate-x-0":"translate-x-full"} transition-full duration-500`}>
   <div className='flex justify-between my-3'>
    <span className='text-xl font-bold text-gray-800'>My New Order</span>
    <IoMdClose 
    onClick={()=>setActiveCart(!activeCart)}
    className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
   </div>
  
  {
    cartItems.length>0? cartItems.map((food)=>{
      return  <ItemsCard
      key ={food.id}
      id={food.id}
      name={food.name}
      price={food.price}
      img={food.img}
      qty={food.qty}/>
    }) : <h2 className='text-center text-xl font-bold text-gray-800 '>Your cart is empty</h2>
  }
 

 

   <div className='absolute bottom-0 w-[90vw]'>
    <h3 className='font-semibold text-gray-800'>Items:{totalQty}</h3>
    <h3 className='font-semibold text-gray-800'>Total Amount:{totalAmount}</h3>
    <hr className='w-[90vw] lg:w-[18vw] my-2'/>
    <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
   </div>
    </div>
    <FaCartShopping 
    onClick={()=>{setActiveCart(!activeCart)}}
    className={`bg-white p-2 text-4xl rounded-full shadow-md fixed bottom-4 right-4 ${totalQty>0 && "animate-bounce delay-500 transition-full"}`}/>

    </>
  )
}

export default Cart