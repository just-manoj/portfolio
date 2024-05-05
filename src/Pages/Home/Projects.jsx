import React from "react";

import data from "../../data/index.json";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="portfolio--section"
      style={{ gap: "0px" }}
    >
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h3 className="skills--section--heading">Projects</h3>
        </div>
        <div>
          {/* <button className="btn btn-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.798 8.207 11.385.6.11.793-.261.793-.578 0-.287-.01-1.045-.015-2.05-3.338.724-4.042-1.582-4.042-1.582-.545-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.836 2.809 1.305 3.496.997.108-.773.417-1.305.758-1.605-2.657-.299-5.455-1.314-5.455-5.849 0-1.29.462-2.344 1.225-3.168-.124-.298-.532-1.5.116-3.121 0 0 1.002-.317 3.284 1.209.953-.265 1.97-.397 2.982-.402 1.012.005 2.03.137 2.984.402 2.28-1.526 3.283-1.209 3.283-1.209.65 1.621.241 2.823.117 3.121.765.824 1.224 1.878 1.224 3.168 0 4.547-2.802 5.546-5.465 5.839.429.365.813 1.091.813 2.203 0 1.592-.015 2.874-.015 3.268 0 .32.192.694.8.576C20.568 21.794 24 17.297 24 12c0-6.627-5.373-12-12-12"></path>
            </svg>
            Visit My GitHub
          </button> */}
        </div>
      </div>
      <div
        className="portfolio--section--container"
        style={{ marginTop: "30px", alignItems: "flex-start" }}
      >
        {data?.projects?.map((item, index) => {
          return (
            <div
              key={index}
              className="portfolio--section--card"
              style={{ gap: "0px" }}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="portfolio--section--img">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="portfolio--section--card--content">
                  <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
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

export default MyProjects;
