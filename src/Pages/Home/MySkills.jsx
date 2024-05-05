import React from "react";
import data from "../../data/index.json";

const MySkills = () => {
  return (
    <section className="skills--section" id="skills">
      <div className="portfolio--container">
        {/* <p className="section--title">My Skills</p> */}
        <h4 className="skills--section--heading">My Skills</h4>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img
                src={item.src}
                alt="Product Chain"
                style={{ width: "52px" }}
              />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
