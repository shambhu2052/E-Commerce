import axios from 'axios'
import React, { useEffect,useState } from 'react'

function Hotdeal() {
    let[hot,hotSet]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data)
            hotSet(res.data)
        })
    })
  return (
    <>
    <h4 className="py-3 border-bottom border-danger">
        Hot Deal
      </h4>
      <div className="row main">
        {hot.slice(12,16).map((a)=>(
          <div className="box bg-light shadow-lg">
            <img src={a.image} className="w-100 " width="200px" height="150px"/>
            <p>{a.category}</p>
            <h4>Rs{a.price}</h4>
            <button>Detail</button>
          </div>
            
          

        ))}
      </div>
    </>
  )
}

export default Hotdeal