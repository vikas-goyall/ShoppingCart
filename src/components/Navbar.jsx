import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const {cart}=useSelector((state)=>state);

  return (
    <nav className=' flex justify-between h-20 items-center mx-auto max-w-6xl'>
        <NavLink to="/">
            <div className=' ml-5'>
                <img className=' h-14' src='https://codehelp-shopping-cart.netlify.app/logo.png' alt=''></img>
            </div>
        </NavLink>
       
        
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to="/">
                <div className='cursor-pointer hover:text-green-400 transition duration-300 ease-in'>Home</div>
            </NavLink>
            <NavLink>
                <div>
                    <NavLink to="/cart">
                    <div className='text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'>
                        <FaShoppingCart></FaShoppingCart>
                        {
                            cart.length>0&&
                            <div className='absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white'>
                                {cart.length}
                            </div>
                        }
                    </div>
                        
                    </NavLink>
                </div>
            </NavLink>
        </div>
        
    </nav>
  )
}
