import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./home.css";
function Home() {
  return (
    <div className="home" id="home">
      <div className="social-links">
        <a
          href="        https://github.com/Esubalew-Sintie
"
        >
          GitHub <FaGithub size={30} color="yellow" />
        </a>

        <a href="www.linkedin.com/in/esubalew-sintie">
          LinkedinIn <FaLinkedinIn size={30} color="black" />
        </a>
      </div>
      <div className="home-content">
        <p>Hi, my name is</p>
        <p>Esubalew Sintie</p>
        <p>I'm a Full Stack Developer</p>
        <p>
          I am a passionate web developer with expertise in building dynamic and
          responsive applications. With a strong foundation in both front-end
          and back-end technologies, I enjoy creating seamless user experiences
          and efficient solutions. Here's a snapshot of my technical skills:
          JavaScript (React, Next.js): Crafting interactive and scalable web
          applications. HTML/CSS: Building clean, accessible, and responsive
          designs. Python (Django): Developing robust server-side logic and
          applications. SQL (PostgreSQL, MySQL): Designing and managing
          relational databases. REST APIs (GraphQL): Integrating and optimizing
          APIs for diverse client needs. Git: Version control and collaborative
          development. I am constantly seeking to learn and apply new
          technologies to deliver innovative solutions. Let's build something
          amazing together!
        </p>
        <a href="#work">
          <button className="btn">
            View Work <FaArrowRight />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
