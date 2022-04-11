import React from "react";

import styles from "./Navbar.module.css";

import Link from "next/link";
const navbar = () => {
  return (
    <div
      className={`w-[90%] md:w-11/12 mx-auto ${styles.nWrapper}`}
      id="Navbar"
    >
      {/* left */}
      <div className={styles.nLeft}>
        <div
          className={`${styles.text}  my-4 text-xl md:text-3xl text-left font-bold leading-5 text-[#000]`}
        >
          Sagar
        </div>
      </div>
      {/* right */}
      <div className={styles.nRight}>
        <div className={styles.nList}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a href="#about">About </a>
            </li>
            <li>
              <a href="#skills">Skills </a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
          </ul>
        </div>
        <Link href="#contact">
          <button className={` ${styles.button} ${styles.nButton}`}>
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
