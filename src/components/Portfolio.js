import React, { useRef, useEffect, useState, useMemo } from "react";
import Fade from "react-reveal";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import { useInfos } from "../contexts/InfoProvider";

import ProjectsComponents from "./ProjectsComponents";

const ContainerImg = styled("div")(({ theme }) => ({
  padding: "0 2rem",
  flexBasis: "33%",
  flexGrow: 0,
  minWidth: "33%",
  maxWidth: "33%",
  [theme.breakpoints.down("md")]: {
    flexBasis: "50%",
    flexGrow: 0,
    minWidth: "50%",
    maxWidth: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    flexBasis: "100%",
    flexGrow: 0,
    minWidth: "100%",
    maxWidth: "100%",
  },
}));

const SlideShow = styled("div")(({ index, theme }) => ({
  display: "inline-flex",
  transform: `translate3d(${-index * 33}%, 0, 0)`,
  [theme.breakpoints.down("md")]: {
    transform: `translate3d(${-index * 50}%, 0, 0)`,
  },
  [theme.breakpoints.down("sm")]: {
    transform: `translate3d(${-index * 100}%, 0, 0)`,
  },
}));

const delay = 3.5; // in seconds

const Portfolio = () => {
  const [indexImg, setIndexImg] = useState(0);
  const timeoutRef = useRef(null);
  const { info, setSizes } = useInfos();
  const { projects } = info;
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  // const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const quantityByScreen = useMemo(() => {
    return isSmall ? 1 : isMedium ? 2 : 3;
  }, [isSmall, isMedium]);

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      const { bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const howVisible = bottom / windowHeight;
      if (howVisible > 0.4 && howVisible < 1.3) {
        setSizes({ portfolio: howVisible });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndexImg((prevIndex) =>
          prevIndex === projects.length - quantityByScreen ? 0 : prevIndex + 1
        ),
      delay * 1000
    );

    return () => {
      resetTimeout();
    };
  }, [indexImg, projects.length, quantityByScreen]);

  return (
    <section id="portfolio" ref={sectionRef}>
      <Fade left duration={1000}>
        <h1 style={{ fontSize: "1.3em" }}>Check Out Some of My Works</h1>
        <div className="container-projects">

          {projects.map((row) => (
            <ProjectsComponents item={row} key={`${row.title}_${row.image}`}/>
          ))}
        </div>
        {/* <div className="slideshow">
          <SlideShow className="slideshowSlider" index={indexImg}>
            {projects.map((row) => (
              <ContainerImg key={`${row.title}_${row.image}`}>
                <ProjectsComponents item={row} />
              </ContainerImg>
            ))}
          </SlideShow>

          <div className="slideshowDots">
            {[...new Array(projects.length - quantityByScreen + 1)].map(
              (_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot ${indexImg === idx ? "active" : ""}`}
                  onClick={() => {
                    setIndexImg(idx);
                  }}
                ></div>
              )
            )}
          </div>
        </div> */}
      </Fade>
    </section>
  );
};

export default Portfolio;
