import React from "react";
import styles from "../MainPage/MainPage.module.css";
import style from "./AboutUs.module.css";
import Image from "next/image";
import dev from "../../requirement/image2.svg";
const Aboutus = props => {
  return (
    <div id="about" className="w-[90%] md:w-10/12 mx-auto mt-[200px]">
      <div
        className={`${
          styles.text
        } text-base md:text-xl text-left font-bold leading-5 ${
          props.color === "black" ? "text-[#fff]" : "text-[#000]"
        }`}
      >
        A bit about me
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="basis-1/4 md:basis-6/12">
          <div
            className={`${style.dis} my-4  ${
              styles.text2
            }   text-xl md:text-3xl text-left font-normal leading-7 md:leading-10 ${
              props.color === "black"
                ? "text-[rgba(255,255,255,0.7)]"
                : "text-[#000]"
            }`}
          >
            Hi, I’m Sagar Bawane, A Designer & Entrepreneur focused on creating
            innovative stuff. Always seeking to{" "}
            <span className={"text-[#f76236]"}>
              {" "}
              learn, understand, and evolve.
            </span>{" "}
            I find joy in the process of piecing together small parts of the
            built world. When I’m not designing, you can find me watching sports
            and playing games. I’m currently based in Yavatmal Maharashtra. Fell
            free to conatct me.
            <div className={" flex   "}>
              <span className={"block w-5/12 mt-8 h-0.5 bg-[#f76236]"}></span>
            </div>
            <div
              className={`${
                styles.text
              } text-base md:text-base text-left font-bold leading-7 md:leading-5 ${
                props.color === "black" ? "text-[#fff]" : "text-[#000]"
              } mt-5`}
            >
              Technology creates possibilities. Design creates solutions. Art
              creates questions. Leadership creates actions.
              <div
                className={`${
                  styles.text
                } text-lg md:text-lg text-left font-bold leading-5 ${
                  props.color === "black" ? "text-[#fff]" : "text-[#000]"
                } my-5`}
              >
                - John Maeda
              </div>
            </div>
          </div>
        </div>
        <div className=" md:basis-6/12">
          <div className=" w-full md:w-10/12 mx-auto my-10">
            <Image src={dev} alt="dev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
