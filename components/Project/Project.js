import React from "react";
import styles from "../MainPage/MainPage.module.css";
import style from "./Project.module.css";
import Image from "next/image";

import net from "../../requirement/image4.jpeg";
import what from "../../requirement/what.png";
import tinder from "../../requirement/tinder.png";
import cred from "../../requirement/cred.webp";
import sypto from "../../requirement/images.avif";
import cycle from "../../requirement/images5.jpeg";
import spotify from "../../requirement/spot.jpg";
import solar from "../../requirement/projj.png";
import uber from "../../requirement/uber2.jpeg";

function Project(props) {
  return (
    <div id="project" className="w-[90%] md:w-10/12 mx-auto mt-[200px]">
      <div
        className={`${
          styles.text
        } text-xl md:text-xl text-left font-bold leading-5 ${
          props.color === "black" ? "text-[#fff]" : "text-[#fff]"
        }`}
      >
        My Work & Projects
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-[100px]">
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={net} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is Netflix clone project which i develop with nextjs and
                movie-trailer api
              </div>

              <div className="my-6 w-full ">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href=""
                >
                  Check Project
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button1}
                  href="https://github.com/Sagarbawane/netflix-clone"
                >
                  Get Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={what} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is Whatsapp clone project which i develop using
                nextjs,firebase and styled components
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href=""
                >
                  Check Project
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button1}
                  href="https://github.com/Sagarbawane/whatsapp-clone/blob"
                >
                  Get Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={tinder} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is Tinder clone project which is web3 project develop using
                nextjs ,sanity,web3,moralis and tailwindcss etc
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href=""
                >
                  Check Project
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button1}
                  href="https://github.com/Sagarbawane/tinder-clone/"
                >
                  Get Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-[5px] md:mt-[50px]">
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={solar} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is cycle app which help you to choose your stock by
                monitoring the performance.It gives the signal when to buy and
                when to sold.
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href="https://app.mycycles.in"
                >
                  Check Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={sypto} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                A sypto is website for Managing crypto portfolios. Fully
                automated, algorithmic trading and investing experience. Build
                using nextjs ,jscharting,tailwind
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href="https://sypto.xyz"
                >
                  Check Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={cycle} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is ssr website which is develop to get traffic on cycle
                app. I had worked to improve seo and user entraction.
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href="https://mycycles.in"
                >
                  Check Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-[5px] md:mt-[50px]">
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={spotify} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is spotify clone project which is develop using spotify api
                with nextjs and tailwind css .
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href="https://spotify-clone-ochre.vercel.app/login"
                >
                  Check Project
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button1}
                  href="https://github.com/Sagarbawane/spotify-clone"
                >
                  Get Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={uber} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                A uber eats clone develop using web3 ,sanity ,nextjs , mapbox-gl
                etc
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href="https://github.com/Sagarbawane/blockchain-ubereats/"
                >
                  Check Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={` md:basis-4/12 ${style.container}`}>
          <div className={style.card}>
            <div className={style.image}>
              <Image src={cred} alt="" />
            </div>
            <div className={style.content}>
              <div className={"px-4"}>
                This is cred clone ui develop using reactjs and css .
              </div>

              <div className="my-6 w-full">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button}
                  href="https://cred-clone-sagar.netlify.app"
                >
                  Check Project
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={style.button1}
                  href="https://github.com/Sagarbawane/cred-clone"
                >
                  Get Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
