import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";

import { BsFillLaptopFill } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";

// import { GiVineFlower } from "react-icons/gi";
import { GiFlowerTwirl } from "react-icons/gi";
// import { GiVanillaFlower } from "react-icons/gi";
// import { GiFlowers } from "react-icons/gi";
// import { GiWrappingStar } from "react-icons/gi";
// import { SiStarship } from "react-icons/si";
// import { GiStarSwirl } from "react-icons/gi";
// import { GiButterflyFlower } from "react-icons/gi";
// import { GiBowlSpiral } from "react-icons/gi";

const Portfolio = () => {
  const terminalHeading = `tishrabon:\\portfolio\\portfolio.exe`;
  const marshmallowHeading = `Portfolio`;
  const { theme } = useContext(themeContext);

  return (
    <div className="otherpage-container verticalS gap-10 text-center">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      {/*PORTFOLIO CONTAINER*/}
      <div className={`${theme === 'dark' ? "border-b border-main" : " border-b"} verticalS mt-[-40px] w-full max-w-[800px] gap-10 px-5 pb-14`}>
        
        {/*ORIGINAL banner icon and intro*/}
        <div className="verticalS gap-5">
          <div className={`relative`}>
            <BsFillLaptopFill
              size={200}
              className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}
            />

            <div className={`pf-icon absolute z-[10]`}>
              <GiGearHammer
                size={150}
                className={`${theme === "dark" ? "text-darkbg" : "text-lightbg"} rotatingMonk`}
              />
            </div>
          </div>

          {/*some words about my one and only project to show yall*/}
          <div className={`${theme === "dark" ? "" : ""} w-full text-lg`}>
            Here’s my first project. This portfolio itself is my second,
            reflecting the progress from the first. As I continue building, you
            can expect more refined and impactful work. For now, this gives you a
            glimpse of where I’m heading.
          </div>
        </div>

        {/*each sfp-show container*/}
        <div
          className={`${theme === "dark" ? "terminaltap rounded-md" : "rounded-[20px] rubbertapRev"} verticalS mx-5 w-full gap-5 px-2 py-5`}
        >
          {/*project title*/}
          <p
            className={`${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[15px]"} px-4 py-2 text-base`}
          >
            myShopp - eCommerce Website
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
      </div>

      {/*BEHANCE*/}
      <div className={`${theme === 'dark' ? "border-b border-main" : " border-b"} verticalS w-full max-w-[800px] gap-10 px-5 pb-14 mb-14`}>
        {/*ORIGINAL banner icon and intro*/}
        <div className="verticalS gap-5">
          <div className={`relative`}>
            <BsFillLaptopFill
              size={200}
              className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}
            />

            <div className={`pf-icon absolute z-[10]`}>
              <GiFlowerTwirl
                size={150}
                className={`${theme === "dark" ? "text-darkbg" : "text-lightbg"} rotatingMonk`}
              />
            </div>
          </div>
          
          {/*some words about my one and only project to show yall*/}
          <div className={`${theme === "dark" ? "" : ""} w-full text-lg`}>
            Beyond coding, I’ve done some graphic design and written a blog article purely out of passion. These aren’t professional works, but you can check them out through the links below..
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Portfolio;
