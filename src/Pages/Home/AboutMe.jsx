import React from "react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/MyPic.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a recent MSC Computer Science graduate from the 2024 batch with
            a strong background in React Native and Node.js. Having completed
            comprehensive Udemy courses in these technologies. My academic
            background has provided me with a solid foundation in computer
            science principles, and my practical experience in web development
            further supplements my skill set. I am particularly passionate about
            mobile app development and have actively pursued projects in this
            field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
