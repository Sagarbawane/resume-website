import Navbar from "./Navbar/Navbar";
import React, { useState, useLayoutEffect, useEffect } from "react";
import MainPage from "./MainPage/MainPage";
import AboutUs from "./AboutUs/Aboutus";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";

const All = () => {
  const [color, setColor] = useState();
  useEffect(() => {
    // Code By Webdevtrick ( https://webdevtrick.com )
    var one = "transparent",
      two = "black",
      three = "#ff3f3f",
      four = "#003b49",
      five = "#ff7a00";
    document.addEventListener("scroll", () => {
      window.scrollY < 300
        ? setColor(one)
        : window.scrollY < 1900
        ? setColor(two)
        : window.scrollY < 3500
        ? setColor(three)
        : setColor(four);
    });
  }, []);
  return (
    <div style={{ backgroundColor: color }}>
      <Navbar />
      <MainPage color={color} />
      <AboutUs color={color} />
      <Skills color={color} />
      <Experience color={color} />
      <Project color={color} />
      <Contact />
    </div>
  );
};

export default All;
