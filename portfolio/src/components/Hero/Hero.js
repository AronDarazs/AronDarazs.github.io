import React from "react";
import { Suspense } from "react";
import ThreeDObj from "../ThreeDObj/ThreeDObj";
import { useStyles } from "./HeroStyles";

const Hero = () => {
  const classes = useStyles();
  return (
    <section row nopadding>
      <div>
        <h1 main center>
          Welcome to <br />
          my Portfolio
        </h1>
        <p>
          My goal is to apply my wide variety of STEM skills combined with my
          artistic interests and make something purposeful and a difference in
          this world.
        </p>
        <button
          onClick={() =>
            (window.location = "https://www.linkedin.com/in/arondarazs/")
          }
        >
          Learn more
        </button>
        <div>
          <Suspense fallback={<p>Error while loading 3D object</p>}>
            <ThreeDObj className="artifact" url="/models/ship2.obj" />
          </Suspense>
        </div>
      </div>
    </section>
    // <div></div>
  );
};

export default Hero;
