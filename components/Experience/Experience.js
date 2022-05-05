import React from "react";
import styles from "../MainPage/MainPage.module.css";
import Image from "next/image";
import dev from "../../requirement/image2.svg";
import style from "./Experience.module.css";
const Experience = props => {
  return (
    <div
      id="experience"
      className="w-[90%] md:w-10/12 mx-auto mt-[100px] md:mt-[200px]"
    >
      <div
        className={`${
          styles.text
        } text-xl md:text-xl text-left font-bold leading-5 ${
          props.color === "black" ? "text-[#fff]" : "text-[#fff]"
        }`}
      >
        Education & Experience
      </div>
      <div
        className={`mt-[100px] ${
          props.color === "#ff3f3f" ? "text-[#fff]" : "text-[#fff]"
        }`}
      >
        <article className={`${style.episode}`}>
          <div className={style.episodeNumber}>00</div>
          <div className={style.episodeContent}>
            <div
              className={` text-sm font-medium leading-5 text-[rgba(255,255,255,0.9)] ${style.text2}`}
            >
              Dr. D. Y. Patil Institute of Engineering, Management &
              Research,pune
              <span className={"block text-lg"}>(2015-2019)</span>
            </div>
            <div
              className={` text-base md:text-lg font-medium leading-5 text-[#fff] ${style.text2}`}
            >
              <p>
                I have done my bachelor in electronic and telecommunication With
                C.G.P.A of 7.6
              </p>
            </div>
          </div>
        </article>

        <article className={`${style.episode}`}>
          <div className={style.episodeNumber}>01</div>
          <div className={style.episodeContent}>
            <div
              className={` text-sm font-medium leading-5 text-[rgba(255,255,255,0.9)] ${style.text2}`}
            >
              Hudl,india private limited
              <span className={"block text-lg"}>(Jun 2019 - Feb 2020)</span>
            </div>
            <div
              className={` text-base md:text-lg font-medium leading-5 text-[#fff] ${style.text2}`}
            >
              <p>
                I worked as a sport analyst.My work was to tag different games
                eg.scoccer,af,bastketball.Also i used to do quality checking of
                the game{" "}
              </p>
            </div>
          </div>
        </article>
        <article className={`${style.episode}`}>
          <div className={style.episodeNumber}>02</div>
          <div className={style.episodeContent}>
            <div
              className={` text-sm font-medium leading-5 text-[rgba(255,255,255,0.9)] ${style.text2}`}
            >
              Dct Academy
              <span className={"block text-lg"}>(Feb 2020 - Oct 2020)</span>
            </div>
            <div
              className={` text-base md:text-lg font-medium leading-6 text-[#fff] ${style.text2}`}
            >
              <p>
                I have done my mern stack intership from dct academy.where i
                have all the frontend stack (react,redux,bootstrap etc) and
                backend stack (node,mongodb,mongoose ,express). I have built few
                projects which help to apply the concept what i have learn eg.
                <a href="https://github.com/Sagarbawane/Ticket-Master-UI">
                  Ticket Master
                </a>
                ,{" "}
                <a href="https://github.com/Sagarbawane/Did-You-know-Frontend">
                  Did You Know
                </a>
              </p>
            </div>
          </div>
        </article>
        <article className={`${style.episode}`}>
          <div className={style.episodeNumber}>03</div>
          <div className={style.episodeContent}>
            <div
              className={` text-sm font-medium leading-5 text-[rgba(255,255,255,0.9)] ${style.text2}`}
            >
              LivPro software solution
              <span className={"block text-lg"}>(Oct 2020 - May 2021)</span>
            </div>
            <div
              className={` text-base md:text-lg font-medium leading-5 text-[#fff] ${style.text2}`}
            >
              <p>
                A service base company,where i work as full stack developer , my
                role was to do frontend stuff as well as backend stuff.I work on
                technologies like react,redux on frontend and node,express on
                backend I work here from oct-2020 to june-2021
              </p>
            </div>
          </div>
        </article>
        <article className={`${style.episode}`}>
          <div className={style.episodeNumber}>04</div>
          <div className={style.episodeContent}>
            <div
              className={` text-sm font-medium leading-5 text-[rgba(255,255,255,0.9)] ${style.text2}`}
            >
              Clearmind
              <span className={"block text-lg"}>(June 2021 - Present)</span>
            </div>
            <div
              className={` text-base md:text-lg font-medium leading-5 text-[#fff] ${style.text2}`}
            >
              <p>
                A finance base company, where i work as frontend end developer .
                Here I work on two projects sypto and cycle. the main stack i
                used was nextjs ,tailwindcss with some other react base
                libraries.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Experience;
