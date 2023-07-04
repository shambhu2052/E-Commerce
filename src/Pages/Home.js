import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import AllCategory from '../Comp/AllCategory';
import Slider from '../Comp/Slider'
import Block1 from '../Comp/Block1';
import Popularitems from '../Comp/Popularitems';
import Weeklyproduct from '../Comp/Weeklyproduct';
import Hotdeal from '../Comp/Hotdeal';
import Women from '../Comp/Women';
import Wowo from '../Comp/Wowo';
import Maker from '../Comp/Maker';
import Electronic from '../Comp/Electronic';
import Brands from '../Comp/Brands';

function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <AllCategory/>
        <Popularitems/>
        <Weeklyproduct/>
        <Wowo/>
        </div>
        <div className="col-lg-9">
          <Slider/>
          <Block1/>
          <Hotdeal/>
          <Women/>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-12 col-md-6 col-sm-4">
         <Maker/>
        </div>
      </div>
      <div className="row">
       <Electronic/>
      </div>
      <div className="row py-3">
        <div className="col-lg-12 col-md-6 col-sm-3">
          <Brands/>
        </div>
      </div>
    </div>
    <Routes>
      
      </Routes>
    </>
  )
}

export default Home;