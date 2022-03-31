import React from "react";
import "./Header.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";

const Header = () => (
  <div className="header-container">
    <div className="header-wrapper">
      <a className="nav-link" href="/">
        <DiCssdeck size="3rem" />
        <span>Portfolio</span>
      </a>
    </div>
    <div className="header-menupoints">
      <li>
        <a href="#projects" className="nav-link">
          Projects
        </a>
      </li>
      <li>
        <a href="#technologies" className="nav-link">
          Technologies
        </a>
      </li>
      <li>
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/arondarazs/"
        target="_blank"
        rel="noreferrer"
        className="nav-link"
      >
        <AiFillLinkedin size="3rem" />
      </a>
      <a
        href="https://github.com/AronD00"
        target="_blank"
        rel="noreferrer"
        className="nav-link"
      >
        <AiFillGithub size="3rem" />
      </a>
      <a
        href="mailto: aron.darazs@moon42.com"
        target="_blank"
        rel="noreferrer"
        className="nav-link"
      >
        <SiGmail size="3rem" />
      </a>
    </div>
  </div>
);

export default Header;
