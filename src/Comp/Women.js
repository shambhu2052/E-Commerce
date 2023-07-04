import axios from 'axios'
import React,{useEffect, useState} from 'react'

function Women() {
    let[women,womenSet]=useState([])
    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products')
     .then(res=>{
        console.log(res.data)
        womenSet(res.data)
     })
    })
  return (
    <>
     <h4 className="py-3 border-bottom border-danger">
         WOMEN PRODUCT
      </h4>
      <div className="row main">
        {women.slice(15,19).map((a)=>(
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

export default Women