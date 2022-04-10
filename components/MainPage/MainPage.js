import React from "react";
import styles from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerblob}>
        <div className={` ${styles.blob}`}></div>
      </div>

      <div
        className={`${styles.text} w-2/12 md:w-4/12 mx-auto md:mx-auto my-6 md:my-4 text-lg md:text-3xl text-left font-bold leading-5 text-[#000]`}
      >
        HI, I’M
      </div>
      <div
        className={`${styles.text} text-5xl md:text-8xl text-center font-bold leading-5 text-[#000]`}
      >
        Sagar Bawane
      </div>
      <div
        className={`${styles.text} text-2xl mt-[70px] md:text-4xl text-center font-bold leading-10 text-[#000]`}
      >
        DEVELOPER & DESIGNER
      </div>
      <div className={" flex justify-center align-center  "}>
        <span className={"block w-3/12 mt-8 h-0.5 bg-[#003b49]"}></span>
      </div>
      <div
        className={`font-work_sans text-lg mt-[10px] md:text-lg text-center font-medium leading-10 text-[#000]`}
      >
        Yavatmal , Maharashtra
      </div>
    </div>
  );
};

export default MainPage;
