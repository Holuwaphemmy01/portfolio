import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oluwafemi Jacob </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            <br />
            I have completed a Bachelor's degree in Statistics at Lagos State Polytechnic
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Musical Instrument
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {/* "Strive to build things that make a difference!"{" "} */}
            "Every line of code must change people life for good!"{" "}
          </p>
          <footer className="blockquote-footer">Oluwafemi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
