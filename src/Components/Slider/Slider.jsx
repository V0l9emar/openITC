import React from "react";
import "antd/dist/antd.css";
import "./Slider.css";
import { Carousel } from "antd";

function Slider() {
  return (
    <div className="Slider">
      <Carousel autoplay>
        <div className="Slider__slide1"></div>
        <div className="Slider__slide2"></div>
      </Carousel>
      ,
    </div>
  );
}
export default Slider;
