import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 10000,
  
    };
    return (
      <div>
        <Slider {...settings} className="carrusel_container">
          <div className="carrusel_bg">
            <img 
            src="https://redigital.cl/wp-content/uploads/2022/10/header-3-scaled.jpg"
            className="carrusel_bg__img"
            />
            <div className="caption"><h3>Crea un espacio de relajo en tu hogar</h3></div>
          </div>

          <div className="carrusel_bg">
          <img 
            src="https://redigital.cl/wp-content/uploads/2022/10/header-2-scaled.jpg"
            className="carrusel_bg__img"
            />
            <div className="caption"><h3>Revisa los nuevos productos</h3></div>
          </div>

          <div className="carrusel_bg">
          <img 
            src="https://redigital.cl/wp-content/uploads/2022/10/header-4-scaled.jpg"
            className="carrusel_bg__img"
            />
            <div className="caption"><h3>Descubre lo nuevo en deco</h3></div>
          </div>

          <div className="carrusel_bg">
          <img 
            src="https://redigital.cl/wp-content/uploads/2022/10/header-1-scaled.jpg"
            className="carrusel_bg__img"
            />
            <div className="caption"><h3>Muebles sencillos y con estilo</h3></div>
          </div>
          
        </Slider>
      </div>
    );
  }
}