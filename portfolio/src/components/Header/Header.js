import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a>
        <DiCssdeck size="3rem" />
        <span>Portfolio</span>
      </a>
    </Div1>
    <Div2>
      <li>
        {/* <Link> */}
        <NavLink>
          <a href="#projects">Projects</a>
        </NavLink>
        {/* </Link> */}
      </li>
      <li>
        <NavLink>
          <a href="#technologies">Technologies</a>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <a href="#about">About</a>
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://www.linkedin.com/in/arondarazs/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://github.com/AronD00"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="mailto: aron.darazs@moon42.com"
        target="_blank"
        rel="noreferrer"
      >
        <SiGmail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
