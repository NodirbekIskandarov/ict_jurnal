import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import img from '../../assets/images/slider.png'
import blur from '../../assets/images/blur.png'
import { Link } from "react-router-dom";
function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider_item">
            <div className="blur">
                <h3>A little text about the collection of the brightest products</h3>
                <div className="description_slide">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <Link to='/' className="link">Maqolalarni ko’rmoq</Link>
                </div>
            </div>
        </div>
        <div className="slider_item">
            <div className="blur">
                <h3>A little text about the collection of the brightest products</h3>
                <div className="description_slide">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <Link to='/' className="link">Maqolalarni ko’rmoq</Link>
                </div>
            </div>
        </div>
      </Slider>
    </div>
  );
}
export default Sliders;
