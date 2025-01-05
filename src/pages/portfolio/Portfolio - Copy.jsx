import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";

const Portfolio = () => {
  const terminalHeading = `tishrabon:\\portfolio\\portfolio.exe`;
  const marshmallowHeading = `Portfolio`;
  const { theme } = useContext(themeContext);
  const sfp01 = [
    "https://i.ibb.co.com/mzvmk49/110-1.jpg",
    "https://i.ibb.co.com/BPhzGjP/110-2.jpg",
    "https://i.ibb.co.com/r5WNG9n/110-3.jpg",
    "https://i.ibb.co.com/L0V19jS/110-4.jpg",
    "https://i.ibb.co.com/bLC7mW6/110-5.jpg",
    "https://i.ibb.co.com/NrMPWmv/110-6.jpg",
    "https://i.ibb.co.com/zsBn9kv/110-7.jpg",
    "https://i.ibb.co.com/WxvqZYB/110-8.jpg",
    "https://i.ibb.co.com/vHpP6W3/110-9.jpg",
    "https://i.ibb.co.com/7NPG7JL/110-10.jpg",
    "https://i.ibb.co.com/54zKDbf/110-11.jpg",
  ];

  return (
    <div className="otherpage-container verticalS gap-5 text-center">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      {/*PORTFOLIO CONTAINER*/}
      <div className={`verticalS mt-[-20px] w-full max-w-[800px] gap-5 px-5`}>
        {/*some words about my one and only project to show yall*/}
        <div className={`${theme === "dark" ? "" : ""} w-full text-lg`}>
          Here will be a brief. Here will be a brief. Here will be a brief. Here
          will be a brief. Here will be a brief.
        </div>

        {/*each sfp-show container*/}
        <div
          className={`${theme === "dark" ? "terminaltap rounded-md" : "rounded-[20px] border"} verticalS mx-5 w-full gap-5 px-2 py-5`}
        >
          {/*project title*/}
          <p
            className={`${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[15px]"} px-4 py-2 text-base`}
          >
            myShopp - eCommerce Website!
          </p>

          {/*project cover display*/}
          <div
            className={`verticalC h-[170px] w-[200px] overflow-hidden rounded-[16px] sm:h-[200px] sm:w-[250px]`}
          >
            <img
              src="https://i.ibb.co.com/mzvmk49/110-1.jpg"
              alt="tishrabon-project1-myShopp"
              className={`h-full w-full object-cover`}
            />
          </div>

          {/*source code and live demo links*/}
          <div className={`horizontalC w-full gap-2 text-sm`}>
            <div
              className={`${theme === "dark" ? "bg-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <FaGithub size={20} />
              <p>sourceCode</p>
            </div>

            <div
              className={`${theme === "dark" ? "bg-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <MdOutlineLiveTv size={20} />
              <p>liveDemo</p>
            </div>
          </div>

          {/*description about project*/}
          <div className="px-2">
            Here will be a brief. Here will be a brief. Here will be a brief.
            Here will be a brief. Here will be a brief. Here will be a brief.
            Here will be a brief. Here will be a brief. Here will be a brief.
            Here will be a brief.
          </div>
        </div>

        {/*XXXXXXXXXXXXXXX*/}

        {/*each sfp-show container*/}
        <div
          className={`${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRevLite rounded-[20px]"} verticalS mt-5 w-full gap-5 overflow-hidden py-5`}
        >
          {/*project title*/}
          <p
            className={`${theme === "dark" ? "mt-[-20px] w-full bg-main text-vsmain" : "rubbertapRevLite mx-5 rounded-[15px]"} px-4 py-2 text-base`}
          >
            myShopp - eCommerce Website!
          </p>

          {/*project cover display*/}
          <div
            className={`${theme === "dark" ? "" : "border"} verticalC h-[170px] w-[200px] overflow-hidden rounded-[16px] sm:h-[200px] sm:w-[250px]`}
          >
            <img
              src="https://i.ibb.co.com/mzvmk49/110-1.jpg"
              alt="tishrabon-project1-myShopp"
              className={`h-full w-full object-cover`}
            />
          </div>

          {/*source code and live demo links*/}
          <div className={`horizontalC text-xm w-full gap-2 sm:text-sm`}>
            <div
              className={`${theme === "dark" ? "bg-main text-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <FaGithub size={20} />
              <p>sourceCode</p>
            </div>

            <div
              className={`${theme === "dark" ? "bg-main text-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <MdOutlineLiveTv size={20} />
              <p>liveDemo</p>
            </div>
          </div>

          {/*description about project*/}
          <div className="px-2">
            Here will be a brief. Here will be a brief. Here will be a brief.
            Here will be a brief. Here will be a brief. Here will be a brief.
            Here will be a brief. Here will be a brief. Here will be a brief.
            Here will be a brief.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
