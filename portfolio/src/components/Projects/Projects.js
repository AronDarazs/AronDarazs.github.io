import React from "react";
import { projects } from "../../constants/constants";

const Projects = () => (
  <section nopadding id="projects">
    <span />
    <h1 main>Projects</h1>
    <section>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => {
          return (
            <div key={id}>
              <img src={image} alt="" />
              <div>
                <h3 title>{title}</h3>
                <hr />
              </div>
              <p>{description}</p>
              <div>
                <div>Stack</div>
                <ul>
                  {tags.map((tag, i) => {
                    return <li key={i}>{tag}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }
      )}
    </section>
  </section>
);

export default Projects;
