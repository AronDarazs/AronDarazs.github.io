import React, { useState, useRef, useEffect } from "react";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(
  //       carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
  //     );

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   };

  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <section id="about">
      <span />
      <br />
      <h2>My development</h2>
      <p>
        My aim is to learn a big variety of languages, frameworks and libraries
        to be able to always come up with the most optimal solution for a
        problem.
      </p>
      <ul ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((milestone, index) => {
            return (
              <div key={index}>
                <div
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}
                  // onClick={(e) => handleClick(e, index)}
                >
                  <h4>
                    {milestone.year}
                    <svg
                      width="208"
                      height="6"
                      viewBox="0 0 208 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                        fill="url(#paint0_linear)"
                        fillOpacity="0.33"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-4.30412e-10"
                          y1="0.5"
                          x2="208"
                          y2="0.500295"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop
                            offset="0.79478"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h4>
                  <p>{milestone.text}</p>
                </div>
              </div>
            );
          })}
        </>
      </ul>
      <div>
        {TimeLineData.map((index) => {
          return (
            <button
              key={index}
              index={index}
              active={activeItem}
              // onClick={() => handleClick(e, index)}
              type="button"
            >
              <div active={activeItem} />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
