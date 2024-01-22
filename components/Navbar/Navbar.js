import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import TextNav from "../Texts/TextNav";
import ButtonHover from "../Texts/ButtonHover";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWideScreen(window.innerWidth > 900);
    }

    const handleResize = () => {
      setIsWideScreen(typeof window !== "undefined" && window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <img
            className={styles.logo}
            src="https://techtiz.co/wp-content/uploads/2023/09/Techtiz-Logo-White@2x.webp"
            alt=""
          />
        </Link>

        <ul
          className={
            click
              ? styles["nav-menu"] + " " + styles.active
              : styles["nav-menu"]
          }
        >
          <li>
            {" "}
            <Link href="/about">
              <TextNav label="About" />
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li
              style={{ display: "flex", justifyContent: "center" }}
              className={styles.dropbtn}
            >
              <TextNav label="Services" />
              <MdArrowDropDown
                style={{
                  fontSize: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
                className={click ? styles.services : styles["services-menu"]}
              />
            </li>
            <div className={styles["dropdown-content"]}>
              <Link href="/mobile-application">Mobile Application</Link>
              <Link href="/website">Web Development Services</Link>
              <Link href="/ui-ux-design">UI/UX Design</Link>
              <Link href="/sqa">SQA</Link>
            </div>
          </div>

          <li>
            <Link href="/industries">
              <TextNav label="Industries" />
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <TextNav label="Case Study" />
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <TextNav label="Blog" />
            </Link>
          </li>

          <li>
            <Link href="/careers">
              <TextNav label="Career" />
            </Link>
          </li>
        </ul>
        {isWideScreen && (
          <div className={styles["btn-group"]} style={{ marginRight: "6%" }}>
            <Link href="/get-started">
              <ButtonHover textButton="Get Started" />
            </Link>
          </div>
        )}
        <div className={styles.hamburger} onClick={handleClick}>
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
