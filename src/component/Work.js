import React from "react";
import "./work.css";
import { Card } from "./Card";
const Work = () => {
  return (
    <div className="work" id="work">
      <h3>Work</h3>
      <p>check out some of my recent work</p>
      <div className="cards">
        <Card
          title={
            "suk-bederete e-commerce platform with Next js my final year project "
          }
          url={
            "https://github.com/Esubalew-Sintie/suk-bederete-ecommerce-platform.git"
          }
        />
        <Card
          title={"suk-bederete e-commerce platform with  django"}
          url={"https://github.com/Esubalew-Sintie/suk-bederete-backend.git"}
        />
        <Card
          th={3}
          title={"social-media app with node js"}
          url={
            "https://github.com/Esubalew-Sintie/social-media-mern-frontend-with-graphql.git"
          }
        />
      </div>
    </div>
  );
};

export default Work;
