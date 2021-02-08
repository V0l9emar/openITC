import React from "react";
import "antd/dist/antd.css";
import "./Courses.css";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChalkboard,
  faBookOpen,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import Knowledge from "../../../img/knowledge.svg";

function Courses() {
  return (
    <div className="Courses">
      <div className="Courses__block">
        <div className="col-lg-8">
          <div className="Courses__text">
            <h2>
              Here is our <br /> Top Courses
            </h2>
            <p>
              Even slightly believable. If you are going use a passage of Lorem
              Ipsum need
            </p>
          </div>
        </div>
      </div>
      <div className="Courses__block">
        <Card className="Courses__card">
          <FontAwesomeIcon
            className="Courses__card-icon"
            icon={faBookOpen}
            size="10x"
            color="#ef4323"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card className="Courses__card">
          <FontAwesomeIcon
            className="Courses__card-icon"
            icon={faChalkboard}
            size="10x"
            color="#ef4323"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card className="Courses__card">
          <FontAwesomeIcon
            className="Courses__card-icon"
            icon={faUserGraduate}
            size="10x"
            color="#ef4323"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Courses;
