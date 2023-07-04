import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
function Block1() {
    let[post,postSet]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
            console.log(res.data);
            postSet(res.data)
        })
})
  return (
    <>
      <h4 className="py-3 border-bottom border-danger">
        LATEST PRODUCTS
      </h4>
      <div className="row main">
        {post.slice(0,12).map((a)=>(
          <div className="box bg-light shadow-lg">
            <img src={a.image} className="w-100 " width="200px" height="150px"/>
            <p>{a.category}</p>
            <h4>Rs{a.price}</h4>
            <button><Link to={`/detail/`}> Detail</Link></button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Block1