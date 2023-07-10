import React, { useEffect, useState } from 'react'
import Products from '../component/Products'
import axios from 'axios'

function Home() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setproducts(res.data)
            // console.log(res.data)
        })
        .catch((error)=>{})
    },[])
        

  return (
    <div>
      <Products data={products}/>
    </div>
  )
}

export default Home
