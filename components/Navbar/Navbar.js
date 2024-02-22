import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import TextNav from "../Texts/TextNav";
import ButtonHover from "../Texts/ButtonHover";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);



  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWideScreen(window.innerWidth > 990);
    }

    const handleResize = () => {
      setIsWideScreen(typeof window !== "undefined" && window.innerWidth > 990);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setClick(false);
    setIsDropdownOpen(false); 
    setIsArrowUp(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsArrowUp(!isArrowUp);
  };

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
            <Link href="/about" onClick={closeMenu}>
              <TextNav label="About" />
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li
              style={{ display: "flex" }}
              className={styles.dropbtn}
              onClick={toggleDropdown}
            >
              <TextNav label="Services" />

             {isArrowUp ? (
                <IoMdArrowDropup
                  style={{
                    fontSize: "30px",
                    color: "white",
                    cursor: "pointer",
                    
                  }}
                  className={click ? styles.services : styles["services-menu"]}
                />
              ) : (
                <MdArrowDropDown
                  style={{
                    fontSize: "30px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  className={click ? styles.services : styles["services-menu"]}
                />
              )}
            </li>
            { isWideScreen && (
              <div className={styles["dropdown-content"]}>
                <Link href="/mobile-application" onClick={closeMenu}>
                  Mobile Application
                </Link>
                <Link href="/website" onClick={closeMenu}>
                  Web Development Services
                </Link>
                <Link href="/ui-ux-design" onClick={closeMenu}>
                  UI/UX Design
                </Link>
                <Link href="/sqa" onClick={closeMenu}>
                  SQA
                </Link>
              </div>
            )}
            {!isWideScreen && isDropdownOpen && (
              <ul  style={{padding:'0'}} >
                <li  className={styles.drop}>
                  <Link href="/mobile-application" onClick={closeMenu}>
                    <TextNav label="Mobile Application" />
                  </Link>
                </li>
                <li className={styles.drop}>
                  <Link href="/website" onClick={closeMenu}>
                    <TextNav label="Web Development Services" />
                  </Link>
                </li>
                <li className={styles.drop}>
                  <Link href="/ui-ux-design" onClick={closeMenu}>
                    <TextNav label="UI/UX Design" />
                  </Link>
                </li>
                <li className={styles.drop}>
                  <Link href="/sqa" onClick={closeMenu}>
                    <TextNav label="SQA" />
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <li>
            <Link href="/industries" onClick={closeMenu}>
              <TextNav label="Industries" />
            </Link>
          </li>
          <li>
            <Link href="/portfolios" onClick={closeMenu}>
              <TextNav label="Case Studies" />
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={closeMenu}>
              <TextNav label="Blog" />
            </Link>
          </li>

          <li>
            <Link href="/career" onClick={closeMenu}>
              <TextNav label="Careers" />
            </Link>
          </li>
        </ul>
        {isWideScreen && (
          <div className={styles["btn-group"]} style={{ marginRight: "2%" }}>
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
