import React, { useRef, useEffect } from "react";
import Fade from "react-reveal";
import FileSaver from "file-saver";
import { HashLink } from "react-router-hash-link";

import Grid from "@mui/material/Grid";

import { useInfos } from "../contexts/InfoProvider";

const About = () => {
  const { info, setSizes } = useInfos();
  const { name, profilePic, bio, city, state, phone, email, resume } = info;

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      const { bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const howVisible = bottom / windowHeight;
      if (howVisible > 0.4 && howVisible < 1.3) {
        setSizes({ about: howVisible });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    FileSaver.saveAs(resume, "Ana's Resume.pdf");
  };

  return (
    <section id="about" ref={sectionRef}>
      <Fade duration={1000}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: "95%", margin: "0 auto" }}
        >
          <Grid item xs={12} md={2}>
            <img className="profile-pic" src={profilePic} alt="Profile" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: "0 5%" }}>
            <h2>About Me</h2>

            <p>{bio}</p>
            <Grid container item xs={12}>
              <Grid item xs={12} md={7}>
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <span>
                    {city} {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <button className="buttomDownload" onClick={handleClick}>
                  <i className="fa fa-download"></i>Download Resume
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>

      <p className="scrolldown">
        <HashLink smooth to="/#portfolio">
          <i className="icon-down-circle"></i>
        </HashLink>
      </p>
    </section>
  );
};

export default About;
