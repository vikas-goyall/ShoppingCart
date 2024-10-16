import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

export default function Product({post}) {
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item added")
    }

    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.error("Item removed")
    }

  return (
    <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl'>
        <div>
            <p className='truncate w-40 mt-1 text-gray-700 font-bold  text-lg  text-left'>{post.title}</p>
        </div>
        <div>
            <h1 className=' w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.substr(0,90)+"..."}</h1>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} alt='' className='h-full w-full object-contain">'></img>
        </div>
        <div className='flex items-center justify-between w-full mt-5'>
            <p className='text-green-600 font-semibold'>${post.price}</p>
            {
                cart.some((p)=>p.id===post.id)?
                (<div>
                    <button className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={removeFromCart}>Remove item</button>
                </div>):
                (<div>
                    <button className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={addToCart}>Add item</button>
                </div>)
            }
        </div>
    </div>
  )
}
