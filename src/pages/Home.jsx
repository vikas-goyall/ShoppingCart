import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

export default function Home() {
    const api_url="https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);

    async function fetchProductDetails(){
        setLoading(true);
        try{
            const res= await fetch(api_url);
            const data=await res.json();
            setPosts(data);
        }
        catch(err){
            console.log(err);
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductDetails();
    },[]);

  return (
    <div>
        {
            loading?<Spinner/>:
            posts.length>0 ?
            <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 '>
                {
                    posts.map((post)=>(
                        <Product key={post.id} post={post}/>
                    ))
                }
            </div>
            :(<div>No Data Found</div>)
        }
    </div>
  )
}
