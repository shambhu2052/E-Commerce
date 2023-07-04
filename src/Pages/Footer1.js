import React from 'react'
import Footer2 from './Footer2'
function Footer1() {
  return (
    <>
    <div className="container parent py-3">
    <div className="child1">
            <div className="icon1 fs-1"><i class="bi bi-lock"></i></div>
            <h4>100% SECURE PAYMENT</h4>
            <p>All Measure Debit and Credit</p>
        </div>
        <div className="child1">
            <div className="icon1 fs-1"><i class="bi bi-info-circle-fill"></i></div>
            <h4>HELP CENTER</h4>
            <p>Got a question? Look no further
Browse our FAQs or submit your here</p>
        </div>
        <div className="child1">
            <div className="icon1 fs-1"><i class="bi bi-wallet2"></i></div>
            <h4>TRUSTPAY</h4>
            <p>100% Payment Protection. Easy
Return Policy</p>
        </div>
        <div className="child1">
            <div className="icon1 fs-1"><i class="bi bi-truck"></i></div>
            <h4>WORLDWIDE DELIVERY</h4>
            <p>With sites in 5 languages, we ship to
over 200 countries & regions.</p>
        </div>
        <div className="child1">
            <div className="icon1 fs-1"><i class="bi bi-handbag"></i></div>
            <h4>GREAT VALUE</h4>
            <p>We offer competitive prices on our 10
million plus product range.</p>
        </div>
    </div>
    <div className="container py-3">
        <Footer2/>
    </div>
    </>
  )
}

export default Footer1