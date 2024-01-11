import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import TextNav from "../Texts/TextNav";
import ButtonHover from "../Texts/ButtonHover";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img
            className="logo"
            src="https://techtiz.co/wp-content/uploads/2023/09/Techtiz-Logo-White@2x.webp"
            alt=""
          />
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            {" "}
            <Link to="/about">
              <TextNav label="About" />
            </Link>
          </li>
          <div class="dropdown">
            <li
              style={{ display: "flex", justifyContent: "center" }}
              className="dropbtn"
            >
              <TextNav label="Services" />
              <MdArrowDropDown
                style={{
                  fontSize: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
                className={click ? "services" : "services-menu"}
              />
            </li>
            <div class="dropdown-content">
              <Link to="/mobile-application">Mobile Application</Link>
              <Link to="/website">Web Development Services</Link>
              <Link to="/ui-ux-design">UI/UX Design</Link>
              <Link to="/sqa">SQA</Link>
            </div>
          </div>

          <li>
            <Link to="/industries">
              <TextNav label="Industries" />
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              {" "}
              <TextNav label="Case Study" />
            </Link>
          </li>
          <li>
            {" "}
            <TextNav label="Blog" />
          </li>

          <li>
            <Link to="/careers">
              <TextNav label="Career" />
            </Link>
          </li>
        </ul>
        {isWideScreen && (
          <div className="btn-group" style={{ marginRight: "6%" }}>
          <Link to="/get-started">
          <ButtonHover textButton="Get Started" />
          </Link>
            
          </div>
        )}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white", marginLeft: "-15%" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
