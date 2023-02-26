import React, { Fragment } from "react";
import Fade from "react-reveal";
import { useParams } from "react-router-dom";

import { useInfos } from "../contexts/InfoProvider";

const Gallery = () => {
  const { workName } = useParams();
  const { info } = useInfos();
  const { projects } = info;

  const selected = projects.find((row) => row.workName === workName);

  return (
    <section id="portfolio">
      <Fade bottom duration={1000}>
        <h1 style={{ fontSize: "1.3em" }}>{selected.title}</h1>
        <div className="imgs-work">
          {!!Object.values(selected.children).length &&
            !selected.isVideo &&
            Object.values(selected.children).map((row) => (
              <img
                key={row}
                src={`${row}?w=248&fit=crop&auto=format`}
                width={"33%"}
                height="auto"
                srcSet={`${row}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={""}
                style={{ height: "100%" }}
              />
            ))}

          {!!Object.values(selected.children).length &&
            selected.isVideo &&
            Object.values(selected.children).map((row) => (
              <Fragment key={row}>
                <video width="100%" height="auto" controls>
                  <source src={row} type="video/mp4" />
                </video>
              </Fragment>
            ))}
        </div>
      </Fade>
    </section>
  );
};

export default Gallery;
