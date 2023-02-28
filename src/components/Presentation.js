import React, { useEffect, useRef } from "react";
import Fade from "react-reveal";
import { HashLink } from "react-router-hash-link";

import { useInfos } from "../contexts/InfoProvider";
import Particles from "./Particles";

const settings = {
  canvas: {
    canvasFillSpace: true,
    // width: 200,
    // height: 200,
    useBouncyWalls: false,
  },
  particle: {
    particleCount: 90,
    minSize: 5,
    maxSize: 15,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 360,
    minSpeed: 0.1,
    maxSpeed: 0.7,
  },
  opacity: {
    minOpacity: 0.4,
    maxOpacity: 0.8,
    opacityTransitionTime: 30 * 1000,
  },
};

const Presentation = () => {
  const { info, setSizes } = useInfos();
  const { projectName, description } = info;

  const sectionRef = useRef(null);

  useEffect(() => {
    setSizes({ home: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      const { bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const howVisible = bottom / windowHeight;
      if (howVisible > 0.4 && howVisible < 1) {
        setSizes({ home: howVisible });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" ref={sectionRef}>
      <Particles
        settings={settings}
        style={{
          background:
            "radial-gradient(circle, rgba(179,58,79,1) 0%, rgba(112,132,191,1) 100%)",
        }}
      />

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{projectName}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}.</h3>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <HashLink smooth to="/#about">
          <i className="icon-down-circle"></i>
        </HashLink>
      </p>
    </section>
  );
};

export default Presentation;
