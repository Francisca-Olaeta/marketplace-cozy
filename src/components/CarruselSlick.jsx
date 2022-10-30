import React, { Component } from "react";
import Slider from "react-slick";



export default class SimpleSlider extends Component {
  render() {
    
     const settings = {
            dots: false,
            fade: true,
            lazyLoad: true,
            infinite: true,
            speed: 10000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
     };
      
    return (
      <div >
        <Slider {...settings} >
          <div className="sliderslick-bg">
            <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/10/manta-5.jpg" />
            
          </div>
          <div className="sliderslick-bg">
          <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/10/deco-7.jpg"/>
            
          </div>
          <div className="sliderslick-bg">
          <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/10/manta-2.jpg"/>
            
          </div>
          
        </Slider>
      </div>
    );
  }
}