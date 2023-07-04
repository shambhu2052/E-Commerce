import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Footer1 from '../Pages/Footer1';
import Detail from './Detail';
function Header() {
  return (
    <>
    <section className="top">
      <div className="container">
      <a href=""> Sell on MeroShopping</a>
      <a href="">Track Order</a>
        <a href=''>Track Order</a>
      <a href="">Help</a>
      <a href="">Login</a>
      <a href="">Registration</a>
      < a href="">
      Seller Login
      </a>

      </div>
    </section>
    <section className="menu py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src="https://meroshopping.com/front/assets/image/catalog/demo/logo/logo-old.png" alt="avatar"/>
          </div>
          <div className="col-lg-6">
          <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search product on meroshopping" aria-label="Search" />
<div className="dropdown">
  <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All Categories
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Samsung</button></li>
    <li><button className="dropdown-item" type="button">Redmi</button></li>
    <li><button className="dropdown-item" type="button">Poco</button></li>
    <li><button className="dropdown-item" type="button">Techno</button></li>
    <li><button className="dropdown-item" type="button">Realmi</button></li>
    <li><button className="dropdown-item" type="button">Vivo</button></li>
  </ul>
</div>

  <button className="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
</form>

          </div>
          <div className="col-lg-3 cart">
           <i class="bi bi-cart4"></i>
    <button type="button" className="btn position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
          </div>
        </div>
      </div>
    </section>
    <section className="global py-3">
      <div className="container">
      <a href=""><img src="https://meroshopping.com/images/mIAj62uhjSkKjY8stxjuRyYYFwW2sHJLB6PeXZ6N.png"/>Global Collection</a>
      <a href=""><img src="https://meroshopping.com/images/GZ1gcWnoibueuqKkhOLEd5oAdGSuEAAJ3SrU3iXE.png"/>Mero Brand</a>
      <a href=""><img src="https://meroshopping.com/images/6ppbyoUGHgjYRr43600Q0xXSurHUvf88qvSoxUSk.png"/>99 store</a>
      <a href=""><img src="https://meroshopping.com/images/aUJgOmPcmnbqrLG5o8VWt3dyh4aCfvG4HcI8bSsk.png"/>Deal of the day</a>
      <a href=""><img src="https://meroshopping.com/images/F8YWeTY1OcQxrux1b4fTQM9W3SAUGDxnhsorZJ7j.png"/>Kids Area</a>
      <a href=""><img src="https://meroshopping.com/images/0fs9twYk9TELAdpFpQFuNRK7DXv59FffBtrFzY3Z.png"/>send gift to nepal</a>
    </div>
    </section>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route Path="/detail/" element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default Header