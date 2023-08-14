import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import {HashLink as Link} from 'react-router-hash-link';
import "./Navbar.css";
import IEEELogo from "./Assets/ieeelogo.svg";
import { Cross as Hamburger } from "hamburger-react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";
function Navbar() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const onClickHeader = () => {
    setIsOpen1(!isOpen1);
  };
  return (
    <div className={header ? "header active" : "header"}>
      <div
        className={`header-wrapper ${isOpen1 ? "header-wrapper active" : ""} `}
      >
        <NavLink to="/" className="header-logojyc">
          <img onClick={"/"} className="header-logo" src={IEEELogo} />
        </NavLink>

        <div onClick={onClickHeader} className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <Link onClick={() => scroll.scrollToTop()} to="/">
                HOME
              </Link>
            </li>

            <li>
              <LNK
                to="about-hp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                ABOUT
              </LNK>
            </li>
            <li>
              <LNK
                to="about-hp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                SCHEDULE
              </LNK>
            </li>

            <li>
              <Link to="/contact">REGISTRATION</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
