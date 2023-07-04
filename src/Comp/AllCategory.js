import axios from 'axios'
import React, { useEffect,useState } from 'react'

function AllCategory() {
    let[cat,catSet]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then(res=>
              {
                console.log(res.data);
                catSet(res.data);
              }
            );
    })
  return (
    <>
    <div className="w">
   <ul className="list-group">
  <li className="list-group-item active" aria-current="true">ALL CATEGORIES</li>
  {cat.slice(0,14).map((a)=>(
     <li className="list-group-item">{a}</li>
  ))}
  

</ul>

    </div>
    </>
  )
}

export default AllCategory