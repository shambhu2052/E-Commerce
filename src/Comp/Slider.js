import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 
function Slider() {
  

  return (
    <>
    <div>
    <OwlCarousel className='owl-theme' loop margin={10} nav items={1}autoplay={true} autoplayTimeout={1000}>

<img src='https://meroshopping.com/images/KuawoeE7x8kdFDn3Ts26xBogM6828UV9ITGjCVgg.jpg'/>
<img src='https://meroshopping.com/images/bFiWHqk5UfxqiLQPahvoacLXaKBs1uK8olR5PIv0.png'/>
<img src="https://www.meroshopping.com/images/yT6xRVKayM7eNUKMWqHqzHzbgrFDc5NiYDeh2KTA.jpg"/>
    

      </OwlCarousel>
      </div>
      <div className="col-lg-9 round-img">
        <div className='img-text'><img src="https://meroshopping.com/images/TS4eGp37o2wgy7ENX2L7Yh3ocU5zDfAVbTKDejwa.png"/>
       <p className="text-center">Women fashion</p>
        </div>
        <div className='img-text'>
          <img src="https://meroshopping.com/images/DT4K1W232libuHy8woMS7u65aTC5TASMIxItMT9L.png"/>
          <p className="text-center">Health and Beauty</p>
          </div>
          <div className='img-text'>
                    <img src="https://meroshopping.com/images/e2OjChaTYsSSgINw5mlh8XVkhMKQALjBHehgFehf.png"/>
                    <p className="text-center">Household and Pets</p>
                    </div>
                    <div className='img-text'>
                    <img src="https://meroshopping.com/images/mTL81WCVIdciwvZHSotOmVwrBpAZmFMdqTMVrExd.png"/>
                    <p className="text-center">Home and ferniture</p></div>  
                    
      </div>
    </>
    
  )
}

export default Slider;