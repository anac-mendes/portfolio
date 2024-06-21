import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import openLink from "../functions/openLink";

const ProjectsComponents = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = (event) => {
    const destination = `/work/${item.workName}`;
    openLink(event, destination, navigate);
    window.scrollTo(0, 0);
  };

  return (
    // <div
    //   className="imgHover"
    //   onMouseEnter={() => setIsHover(true)}
    //   onMouseLeave={() => setIsHover(false)}
    //   onClick={handleOnClick}
    // >
    //   <img
    //     src={`${item.image}?w=248&fit=crop&auto=format`}
    //     srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //     alt={item.title}
    //     style={{ height: "100%" }}
    //   />
    //   <div className={`hiddenComponents ${isHover ? "containerImgHover" : ""}`}>
    //     <span className="textHover">{item.textHover}</span>
    //   </div>
    //   <div className={`hiddenComponents ${isHover ? "coverHover" : ""}`} />
    // </div>

    <div className="container-category">
      <div
        className="categories"
        onClick={handleOnClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className="contaienr-img">
          {<item.image width={40} color={isHover ? "#fff" : "#6ec0cd"} />}
        </span>
        <div>
          {item.title}
        </div>

      </div>
    </div>
  );
};

export default ProjectsComponents;
