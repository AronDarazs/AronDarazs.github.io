import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

const Technologies = () => (
  <section id="technologies">
    <span />
    <br />
    <h2>Technologies</h2>
    <p>
      My goal is always to look for and integrate the most functional and
      up-to-date frameworks. I have experience in backend frontend and database
      development.
    </p>
    <ul>
      <li>
        <DiReact size="3rem" />
        <div>
          <h4>Front-End</h4>
          <p>
            Experience with <br /> React, NextJS
          </p>
        </div>
      </li>
      <li>
        <DiFirebase size="3rem" />
        <div>
          <h4>Back-End</h4>
          <p>
            Experience with <br /> ASP.NET, NodeJS
          </p>
        </div>
      </li>
      <li>
        <DiFirebase size="3rem" />
        <div>
          <h4>Database Development</h4>
          <p>
            Experience with <br /> MySQL, FaunaDB
          </p>
        </div>
      </li>
    </ul>
  </section>
);

export default Technologies;
