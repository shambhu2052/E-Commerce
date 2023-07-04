import axios from 'axios'
import React, { useEffect,useState } from 'react'

function Electronic() {
    let[ele,eleSet]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data)
            eleSet(res.data)
        })
    })
  return (
    <>
    <div className="col-lg-12 electronic">
    <h4 className="py-3 border-bottom border-danger">
         ELECTRONIC PRODUCTS
      </h4>
      <div className="row main">
        {ele.slice(9,14).map((a)=>(
          <div className="box bg-light shadow-lg">
            <img src={a.image} className="w-100 " width="200px" height="150px"/>
            <p>{a.category}</p>
            <h4>Rs{a.price}</h4>
            <button>Detail</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Electronic