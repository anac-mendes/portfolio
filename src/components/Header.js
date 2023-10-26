import React, { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import { useInfos } from "../contexts/InfoProvider";

const Header = ({ children }) => {
  const { sizes } = useInfos();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const refNav = useRef(null);

  // const { hash } = useLocation();

  useEffect(() => {
    const hash = Object.keys(sizes).find((key) => sizes[key] > 0);
    if (hash) {
      const allRefs = [
        homeRef.current,
        aboutRef.current,
        portfolioRef.current,
        contactRef.current,
      ];
      const foundIndex = allRefs.findIndex((row) => row.id.includes(hash));

      if (foundIndex !== -1) {
        const activeSection = allRefs[foundIndex];
        allRefs.splice(foundIndex, 1);
        activeSection.classList.add("current");
        allRefs.forEach((row) => row.classList.remove("current"));
      }
    }
  }, [sizes]);

  useEffect(() => {
    const hash = Object.keys(sizes).find((key) => sizes[key] > 0);
    if (hash === "home") {
      refNav.current.classList.remove("noHeaderBackground");
    } else {
      refNav.current.classList.add("noHeaderBackground");
    }
  }, [sizes]);

  return (
    <>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav" ref={refNav}>
          <li className="current" ref={homeRef} id="#homeRef">
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>

          <li ref={aboutRef} id="#aboutRef">
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>

          <li ref={portfolioRef} id="#portfolioRef">
            <HashLink smooth to="/#portfolio">
              Portfolio
            </HashLink>
          </li>

          <li ref={contactRef} id="#contactRef">
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Header;
