import React from "react";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title" style={{ fontSize: "30px" }}>
            Hi, I'm Manoj Kumar
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Mobile App Devloper
            </span>
          </h1>
          <p className="hero--section-description">
            Strong in design and integration with intuitive problem-solving
            skills. Proficient in React Native, Node JS, Core JAVA, HTML5, CSS,
            JAVASCRIPT, and basic SQL & MongoDB. Passionate about implementing
            new ideas.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/MyPic.png" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
