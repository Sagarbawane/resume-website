import React from "react";
import styles from "../MainPage/MainPage.module.css";
import { GrInstagram } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

import { GrMail } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contact" className="w-full md:w-10/12 mx-auto  mt-[100px]">
      <div className="flex flex-col md:flex-row justify-between ml-8 md:ml-auto py-[100px]">
        <div className="basis-4/12">
          <div
            className={`${styles.text2}  my-4 text-lg md:text-lg text-left md:text-center font-bold leading-5 text-[#fff]`}
          >
            <GrMail className={styles.iconsAbout} />
            sagarbawane460@gmail.com
          </div>
        </div>
        <div
          className={`${styles.text2} basis-2/12  my-4 text-lg md:text-lg ttext-left md:text-center font-bold leading-5 text-[#fff]`}
        >
          <a href="https://www.instagram.com/the_freaking_lm10/">
            <GrInstagram className={styles.iconsAbout} /> Instagram
          </a>
        </div>
        <div
          className={`${styles.text2} basis-2/12 my-4 text-lg md:text-lg text-left md:text-center font-bold leading-5 text-[#fff]`}
        >
          <FiPhoneCall className={styles.iconsAbout} /> +917083360946
        </div>
        <div
          className={`${styles.text2} basis-2/12  my-4 text-lg md:text-lg text-left md:text-center font-bold leading-5 text-[#fff]`}
        >
          <a href="https://github.com/Sagarbawane"></a>
          <AiFillGithub className={styles.iconsAbout} /> Github
        </div>
      </div>
    </div>
  );
};

export default Contact;
