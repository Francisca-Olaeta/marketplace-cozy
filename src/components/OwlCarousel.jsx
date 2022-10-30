import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.

const OwlCarousel = () => {
    
  return (
    <OwlCarousel ref="car" options={options} events={events} >
    <div><img src="/img/fullimage1.jpg" alt="The Last of us"/></div>
    <div><img src="/img/fullimage2.jpg" alt="GTA V"/></div>
    <div><img src="/img/fullimage3.jpg" alt="Mirror Edge"/></div>
    </OwlCarousel>
  )
}

export default OwlCarousel;