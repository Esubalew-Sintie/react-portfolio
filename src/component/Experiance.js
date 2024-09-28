import React from "react";
import {
  FaCss3,
  FaFlask,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import "./experiance.css";
function Experiance() {
  return (
    <div className="experience" id="experiance">
      <h3>Experiance</h3>
      <div className="underline"></div>
      <p>These are the Tecnonlogies that I've worked</p>
      <div className="experiences">
        <p>
          <FaCss3 size={45} color="blue" /> Css
        </p>
        <p>
          <FaCss3 size={45} color="aqua" /> Tailwind Css
        </p>

        <p>
          <FaHtml5 size={45} color="red" /> HTML
        </p>
        <p>
          <FaJava size={45} color="aqua" /> Javascript
        </p>
        <p>
          <FaReact size={45} color="rgb(255, 230, 0)" /> React
        </p>
        <p>
          <FaReact size={45} /> Next js
        </p>
        <p>
          <FaPython size={45} color="rgb(0, 145, 255)" /> Python{" "}
        </p>
        <p>
          <FaPython size={45} color=" rgb(0, 255, 153)" /> Django
        </p>
      </div>
    </div>
  );
}

export default Experiance;
