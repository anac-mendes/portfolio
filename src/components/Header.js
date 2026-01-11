import React, { useRef, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import { useInfos } from "../contexts/InfoProvider";

const Header = ({ children }) => {
  const { sizes } = useInfos();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const refNav = useRef(null);

  const handleToogleMobMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      refNav.current?.classList.remove("noHeaderBackground");
    } else {
      refNav.current?.classList.add("noHeaderBackground");
    }
  }, [sizes]);

  useEffect(() => {
    if (refNav.current) {
      refNav.current.classList.toggle("open", menuOpen);
    }
  }, [menuOpen]);

  return (
    <>
      <nav id="nav-wrap">
        <div
          className="mobile-buttom-div"
          role="button"
          tabIndex={0}
          aria-label="Toggle list"
          onClick={handleToogleMobMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToogleMobMenu();
            }
          }}
        />

        <ul id="nav" className="nav" ref={refNav}>
          <li className="current" ref={homeRef} id="#homeRef">
            <HashLink smooth to="/#home" onClick={closeMenu}>
              Home
            </HashLink>
          </li>

          <li ref={aboutRef} id="#aboutRef">
            <HashLink smooth to="/#about" onClick={closeMenu}>
              About
            </HashLink>
          </li>

          <li ref={portfolioRef} id="#portfolioRef">
            <HashLink smooth to="/#portfolio" onClick={closeMenu}>
              Portfolio
            </HashLink>
          </li>

          <li ref={contactRef} id="#contactRef">
            <HashLink smooth to="/#contact" onClick={closeMenu}>
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
