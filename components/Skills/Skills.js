import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import sanity from "../../requirement/sanity.webp";
import boot from "../../requirement/boot.png";
import styles from "../MainPage/MainPage.module.css";
import tailwind from "../../requirement/tailwind.png";
import web from "../../requirement/web3.jpeg";
import react from "../../requirement/react.png";
import native from "../../requirement/native.png";
import next from "../../requirement/next.png";
import node from "../../requirement/node.png";

const Skills = props => {
  return (
    <div
      id="skills"
      className="w-[90%] md:w-10/12 mx-auto mt-[10px] md:mt-[200px]"
    >
      <div
        className={`${
          styles.text
        } text-base md:text-xl text-left font-bold leading-5 ${
          props.color === "black" ? "text-[#fff]" : "text-[#000]"
        }`}
      >
        Things i Know
      </div>
      <div className="mt-[50px]">
        <Marquee gradient={false}>
          <div className="mx-6">
            <Image width={100} height={100} src={react} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={native} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={next} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={tailwind} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={boot} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={node} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={sanity} alt="react" />
          </div>
          <div className="mx-6">
            <Image width={100} height={100} src={web} alt="react" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
