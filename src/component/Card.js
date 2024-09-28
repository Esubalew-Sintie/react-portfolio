import React from "react";
import "./card.css";

export const Card = ({ title, url, th }) => {
  return (
    <div className="card-contianer">
      <div className="work-img">
        {th != 3 ? (
          <img src={require("./assets/pro.png")} alt="" />
        ) : (
          <img src={require("./assets/pro2.png")} alt="" />
        )}{" "}
      </div>
      <div className="hover-display">
        <h4>{title}</h4>
        <div className="btn-card">
          {/* <button>Demo</button> */}
          <a className=" " href={url}>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
