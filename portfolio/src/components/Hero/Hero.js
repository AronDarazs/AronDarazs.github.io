import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my Portfolio
      </SectionTitle>
      <SectionText>
        My goal is to apply my wide variety of STEM skills combined with my
        artistic interests and make something purposeful and a difference in
        this world.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/arondarazs/")
        }
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
  // <div></div>
);

export default Hero;
