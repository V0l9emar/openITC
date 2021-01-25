import React from "react";
import "antd/dist/antd.css";
import "./Slider.css";
import { Carousel } from "antd";

function Slider() {
  return (
    <div className="Slider">
      <Carousel autoplay>
        <div className="Slider__slide1">
          <div className="Slider__container">
            <h2 data-animation="fadeInLeft" data-delay="0.2s">Education it most powerful Weapon</h2>
          </div>
        </div>
        <div className="Slider__slide2"></div>
      </Carousel>
      ,
    </div>
  );
}
export default Slider;
