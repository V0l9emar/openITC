import React from "react";
import Slider from "./Slider/Slider";
import Courses from "./Courses/Courses"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <Slider />
      <Courses />
    </div>
  );
}

export default Main;
