import React, { createContext, useContext, useReducer } from "react";
// import PropTypes from "prop-types";

import profilePic from "../assets/profilepic.png";
import resume from "../assets/resume.pdf";

// Images
import gallery from "../assets/svg/Gallery.js";
import square from "../assets/svg/Square.js";
import Document from "../assets/svg/Document.js";
import laptop from "../assets/svg/Laptop.js";
import play from "../assets/svg/Play.js"; 
// import image01 from "../assets/projects/social-media-branding.png";
// import image02 from "../assets/projects/social-media-posts.png";
// import image03 from "../assets/projects/flyers.png";
// import image04 from "../assets/projects/web-design.png";
// import image05 from "../assets/projects/seo.png";

const initialSize = {
  home: 0,
  about: 0,
  portfolio: 0,
  contact: 0,
};

const InfoContext = createContext({
  info: {},
  sizes: {},
});

function InfoProvider({ children }) {
  const [sizes, setSizes] = useReducer(
    (oldState, newState) => ({ ...initialSize, ...newState }),
    initialSize
  );

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const info = {
    name: "Ana Carolina Mendes",
    resume,
    projectName: "Hello!",
    description: "I'm Ana, a Graphic Designer & Social Media Strategist.",
    profilePic,
    bio: "I'm a creator content based on Victoria, BC and passionate about designing pieces that are creative and effective. My journey with digital marketing started as a hobby when I was a teenage, which lead me to several volunteer work in marketing during my bachelor's. After my graduation, I invested my time in digital marketing courses and I fell in love in how digital marketing strategies can open so many opportunities for businesses. My goal is to help to improve social media presence by developing fresh concepts for creating graphic content in line with the company's goals.",
    contactMessage:
      "Here is where you should write your message to readers to have them get in contact with you.",
    email: "ac.anamendes@gmail.com ",
    phone: "(250) 986-0158",
    address: {
      street: "(Your Street)", // I dont think that's needed
      city: "Victoria",
      state: "BC",
      zip: "(Your Zip/Postal Code)", // I dont think that's needed
    },
    projects: [
      {
        title: "Print & Digital Media",
        textHover: "Print & Digital Media",
        image: gallery,
        workName: "print-digital-media",
        children: importAll(
          require.context(
            "../assets/print_and_media",
            false,
            /\.(png|jpe?g|svg)$/
          )
        ),
        isVideo: false,
        embeded: 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGIPrCZG68&#x2F;0zyEdi0HBLZFiohwpO7_CQ&#x2F;view?embed'
      },
      {
        title: "Social Media",
        textHover: "Social Media",
        image: square,
        workName: "social-media",
        children: importAll(
          require.context(
            "../assets/social-media",
            false,
            /\.(png|jpe?g|svg)$/
          )
        ),
        isVideo: false,
        embeded: 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGIPjCBR28&#x2F;eRkK3KZ-3LI3N5nIEihEFg&#x2F;view?embed'
      },
      {
        title: "Marketing Materials",
        textHover: "Marketing Materials",
        image: Document,
        workName: "marketing-materials",
        children: importAll(
          require.context("../assets/marketing_materials", false, /\.(png|jpe?g|svg)$/)
        ),
        isVideo: false,
        embeded: 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGIuH9wmLA&#x2F;cycpHJb4GgHxpgeUBRPepQ&#x2F;view?embed'
      },
      {
        title: "Web Design",
        textHover: "Web Design",
        image: laptop,
        workName: "web-design",
        children: importAll(
          require.context("../assets/web-design", false, /\.(mp4)$/)
        ),
        isVideo: true,
        embeded: 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGItzsUADA&#x2F;i1862CwF4lkDAk77GUCjkA&#x2F;view?embed'
      },
      {
        title: "Video Content",
        textHover: "Video Content",
        image: play,
        workName: "video-content",
        children: importAll(
          require.context("../assets/video_content", false, /\.(png|jpe?g|svg)$/)
        ),
        isVideo: false,
        embeded: 'https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGItod1H1o&#x2F;Vo4WxruGjBH6LtVg74ZgJQ&#x2F;view?embed'
      },
    ],
  };

  return (
    <InfoContext.Provider value={{ info, sizes, setSizes }}>
      {children}
    </InfoContext.Provider>
  );
}

function useInfos() {
  const context = useContext(InfoContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a InfoProvider");
  }
  return context;
}

// InfoProvider.propTypes = {
//   children: PropTypes.any.isRequired,
// };

export { InfoProvider, useInfos };
