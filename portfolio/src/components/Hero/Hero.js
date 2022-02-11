import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Avatar } from "./HeroStyles";
import { Suspense } from "react";
import ThreeDObj from "../ThreeDObj/ThreeDObj";

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
      <Avatar>
        <Suspense fallback={<p>Error while loading 3D object</p>}>
          <ThreeDObj className="artifact" url="/models/ship2.obj" />
        </Suspense>
      </Avatar>
    </LeftSection>
  </Section>
  // <div></div>
);

export default Hero;
