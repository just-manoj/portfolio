import React from "react";

import data from "../../data/index.json";

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="portfolio--section"
      style={{ gap: "0px" }}
    >
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h3 className="skills--section--heading">Certificates</h3>
        </div>
        <div></div>
      </div>
      <div
        className="portfolio--section--container"
        style={{ marginTop: "30px", alignItems: "flex-start" }}
      >
        {data?.certificate?.map((item, index) => {
          return (
            <div
              key={index}
              className="portfolio--section--card"
              style={{ gap: "0px" }}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="portfolio--section--img">
                  <img src={item.certificateUrl} alt={item.course} />
                </div>
                <div className="portfolio--section--card--content">
                  <div>
                    <p className="text-md" style={{ marginTop: "15px" }}>
                      {item.provider}
                    </p>
                    <h3 className="portfolio--section--title">{item.course}</h3>
                    <p className="text-md" style={{ marginTop: "15px" }}>
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm portfolio--link"></p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificate;
