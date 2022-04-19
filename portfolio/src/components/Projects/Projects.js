import React from "react";
import { projects } from "../../constants/constants";
import { useStyles } from "./ProjectsStyles";

const Projects = () => {
  const classes = useStyles();
  return (
    <section id="projects" className={classes.gridContainer}>
      <span />
      <h1>Projects</h1>
      <section className={classes.gridContainer}>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => {
            return (
              <div key={id} className={classes.blogCard}>
                <img src={image} alt="" />
                <div className={classes.titleContent}>
                  <h3 className={classes.headerThree}>
                    {title}
                  </h3>
                  <hr />
                </div>
                <div className={classes.intro}>{description}</div>
                <div>
                  <div>Stack</div>
                  <ul className={classes.tagList}>
                    {tags.map((tag, i) => {
                      return (
                        <li key={i} className={classes.tag}>
                          {tag}
                        </li>
                      );
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
};

export default Projects;
