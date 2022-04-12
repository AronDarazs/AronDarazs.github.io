import React from "react";
// import "./Header.scss";
import { useStyles } from "./HeaderStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className="header-wrapper">
        <a className={classes.navLink} href="/">
          <DiCssdeck size="3rem" />
          <span>Portfolio</span>
        </a>
      </div>
      <div className={classes.headerWrapper}>
        <li>
          <a href="#projects" className={classes.headerMenupoints}>
            Projects
          </a>
        </li>
        <li>
          <a href="#technologies" className={classes.headerMenupoints}>
            Technologies
          </a>
        </li>
        <li>
          <a href="#about" className={classes.headerMenupoints}>
            About
          </a>
        </li>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/arondarazs/"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <AiFillLinkedin size="3rem" />
        </a>
        <a
          href="https://github.com/AronD00"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <AiFillGithub size="3rem" />
        </a>
        <a
          href="mailto: aron.darazs@moon42.com"
          target="_blank"
          rel="noreferrer"
          className={classes.navLink}
        >
          <SiGmail size="3rem" />
        </a>
      </div>
    </div>
  );
};

export default Header;
