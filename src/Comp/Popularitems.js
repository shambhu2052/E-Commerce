import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Popularitems() {
  let[pop,setPop]=useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>{
      console.log(res.data)
      setPop(res.data)
    })
  })
  return (
    <>
    <div className="product py-3">
      <ul className="list-group">
      <li className="list-group-item active bg-warning" aria-current="true" >Popular items</li>
      {pop.map((p)=>(
        <li className="list-group-item">{p}</li>
      ))}
      </ul>
    </div>
    </>
  )
}

export default Popularitems