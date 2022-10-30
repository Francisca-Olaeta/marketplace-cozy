import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    
     const settings = {
            dots: true,
            fade: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
     };
      
    return (
      <div >
        <Slider {...settings} >
          <div className="sliderslick">
            
          </div>
          <div className="sliderslick">
            
          </div>
          <div className="sliderslick">
            
          </div>
          
        </Slider>
      </div>
    );
  }
}