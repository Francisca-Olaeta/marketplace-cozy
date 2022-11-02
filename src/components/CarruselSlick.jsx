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
            <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/11/header-13.jpg" />
          </div>

          <div className="sliderslick-bg">
          <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/10/header-6-scaled.jpg"/>
          </div>

          <div className="sliderslick-bg">
          <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/10/manta-2.jpg"/>
          </div>

          <div className="sliderslick-bg">
          <img className="sliderslick" src="https://redigital.cl/wp-content/uploads/2022/11/header-14-scaled.jpg"/>
          </div>
          
        </Slider>
      </div>
    );
  }
}