import React, { Fragment } from "react";
import Fade from "react-reveal";
import { useParams } from "react-router-dom";

import { useInfos } from "../contexts/InfoProvider";

const Gallery = () => {
  const { workName } = useParams();
  const { info } = useInfos();
  const { projects } = info;

  const selected = projects.find((row) => row.workName === workName);

  // Function to decode HTML entities
  function decodeHTMLEntities(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  // Function to ensure the URL is properly formatted
  function getFormattedURL(encodedURL) {
    const decodedURL = decodeHTMLEntities(encodedURL);
    // Ensure the URL has a proper protocol
    if (!/^https?:\/\//i.test(decodedURL)) {
      return `https://${decodedURL}`;
    }

    return decodedURL;
  }

  return (
    <section id="portfolio">
      <div className="container">
        <Fade bottom duration={1000}>
          <h1>{selected.title}</h1>
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

          <div>
            {selected.embeded && (
              <div className="container-iframe">
                <iframe
                  title="Title"
                  loading="lazy"
                  className="iframe-class"
                  src={getFormattedURL(selected.embeded)}
                />
              </div>
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Gallery;
