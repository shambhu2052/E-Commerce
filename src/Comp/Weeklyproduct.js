import axios from 'axios';
import React, {useEffect, useState}from 'react'

function Weeklyproduct() {
    let[week,weekSet]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data);
            weekSet(res.data)
        })
})

  return (
    <>
  <ul className="list-group">
  <li className="list-group-item active" aria-current="true">Weekly Product</li>
  {week.slice(7,15).map((c)=>(
     <li className="list-group-item mainbox">
        <div className="box1">
        <img src={c.image} alt="avatar" width="70px" height="70px"/>
        </div>
         <div className="box2">
            <h4>Rs{c.price}</h4>
            <p>{c.title}</p>
         </div>
     </li>
  ))}
  
  
</ul>

    </>
  )
}

export default Weeklyproduct