import React from "react";
import "antd/dist/antd.css";
import "./Environment.css";
import FeaturesPNG from "../../../img/features.png";
import { Card, Button } from "react-bootstrap";

function Environment() {
  return (
    <div className="Environment">
      <div className="Environment__courses">
        <div className="Environment__courses-mask">
          <h4>- Individual approach</h4>
          <h4>- Expert Teachers</h4>
          <h4>- Online Education</h4>
        </div>
      </div>
      <div className="Environment__block row justify-content-end">
        <div className="row justify-content-end">
          <div className="col-lg-8">
            <h2 className="Environment-title">
              Provide{" "}
              <span>
                best <br /> Educational
              </span>{" "}
              Environment
            </h2>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="Environment-image">
              <img src={FeaturesPNG} alt="features" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Environment;
