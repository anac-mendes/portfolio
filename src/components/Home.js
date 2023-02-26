import React, { Fragment } from "react";

import ScrollToHashElement from "./ScrollToHashElement";
import Presentation from "./Presentation";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <Fragment>
      <ScrollToHashElement />
      <Presentation />
      <About />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
