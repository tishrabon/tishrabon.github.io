import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";
import HelmetTag from "../../reactHelmet/HelmetTag";
import DownloadCv from "../../components/DownloadCv";

import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";

import { BsFillLaptopFill } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";

import { GiFlowerTwirl } from "react-icons/gi";
import { FaBehanceSquare } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import { ImBlogger2 } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";

const Portfolio = () => {
  const terminalHeading = `tishrabon:\\portfolio\\portfolio.exe`;
  const marshmallowHeading = `Portfolio`;
  const { theme } = useContext(themeContext);

  return (
    <div className="otherpage-container verticalS gap-10 text-center">
      <HelmetTag title="Portfolio" />
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      <div className="mb-5 flex w-full justify-end">
        <DownloadCv />
      </div>

      {/*PORTFOLIO CONTAINER*/}
      <div
        className={`${theme === "dark" ? "border-b border-main" : "border-b"} verticalS mt-[-40px] w-full max-w-[800px] gap-10 px-1 pb-14`}
      >
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
            Here are my original projects, each crafted with intent and
            creativity. As I continue building, you can expect more refined and
            impactful work. For now, this gives you a glimpse of where I’m
            heading.
          </div>
        </div>

        {/*each sfp-show container*/}
        {/* myShopp sfp */}
        <div
          className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} verticalS mx-5 w-full gap-5 px-2 py-5`}
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
              loading="lazy"
              className={`h-full w-full object-cover`}
            />
          </div>

          {/*source code and live demo links*/}
          <div className={`horizontalC w-full gap-2 text-sm`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tishrabon/psc-myShopp.git"
              className={`${theme === "dark" ? "bg-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <FaGithub size={20} />
              <p>sourceCode</p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://myshopp-dusky.vercel.app/"
              className={`${theme === "dark" ? "bg-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <MdOutlineLiveTv size={20} />
              <p>liveDemo</p>
            </a>
          </div>

          {/*description about project*/}
          <div className="verticalS gap-5">
            <div>
              This project isn’t focused on uniqueness, but rather on skill
              development. It’s a complete React frontend project where I
              applied my knowledge. Some key highlights are listed below:
            </div>

            <ul
              className={`flex max-w-[500px] list-disc flex-col items-start justify-between gap-2 pl-5 text-left`}
            >
              <li>Create account, like products, and add to the cart.</li>
              <li>Access data from anywhere after logging in.</li>
              <li>Admin panel for viewing necessary user data.</li>
              <li>Responsive design for seamless experience across devices.</li>
            </ul>
          </div>
        </div>

        {/* pro active sfp */}
        <div
          className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} verticalS mx-5 w-full gap-5 px-2 py-5`}
        >
          {/*project title*/}
          <p
            className={`${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[15px]"} px-4 py-2 text-base`}
          >
            +proActive beta - 3 in 1
          </p>

          {/*project cover display*/}
          <div
            className={`verticalC h-[170px] w-[200px] overflow-hidden rounded-[16px] sm:h-[200px] sm:w-[250px]`}
          >
            <img
              src="/pro-active-plus.jpg"
              alt="tishrabon-project1-myShopp"
              loading="lazy"
              className={`h-full w-full object-cover`}
            />
          </div>

          {/*source code and live demo links*/}
          <div className={`horizontalC w-full gap-2 text-sm`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tishrabon/psc-pro-active-plus.git"
              className={`${theme === "dark" ? "bg-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <FaGithub size={20} />
              <p>sourceCode</p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pro-active-plus.vercel.app/"
              className={`${theme === "dark" ? "bg-vsmain" : "bg-slate-200"} verticalC min-h-[50px] w-[110px] rounded-md p-1`}
            >
              <MdOutlineLiveTv size={20} />
              <p>liveDemo</p>
            </a>
          </div>

          {/*description about project*/}
          <div className="verticalS gap-5">
            <div>
              A 3-in-1 tool blending Pomodoro, Metronome, and ambient sounds to
              help you shape a focused, customizable workspace. All wrapped in a
              minimalist, intuitive design.
            </div>

            <ul
              className={`flex max-w-[500px] list-disc flex-col items-start justify-between gap-2 pl-5 text-left`}
            >
              <li>
                Pomodoro: Customizable format, session labels. Metronome: Set
                BPM, choose tick sound. Soothing ambient sounds with
                user-selected options.
              </li>
              <li>
                Seamless experience: Easily toggle Metronome + background music
                while the clock is running, keeping them both or any specific
                one.
              </li>
              <li>
                State persistence with Redux/Persist: Clock and app state stay
                smooth even after page reload or browser close.1
              </li>
              <li>
                Sound fetching from Freesound API: Caches sounds to save data
                after the first load, making future access quicker.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*side skills*/}
      <div
        className={`${theme === "dark" ? "" : ""} verticalS mb-14 w-full max-w-[800px] gap-10 px-1 pb-14`}
      >
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
            Beyond coding, I’ve done some graphic design and written a blog
            article purely out of passion. These aren’t professional works, but
            you can check them out through the links below..
          </div>
        </div>

        {/*behance*/}
        <div
          className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} verticalS mx-5 w-full gap-5 px-2 py-5`}
        >
          <p className={`${theme === "dark" ? "border-main" : ""} border-b`}>
            Behance
          </p>

          <div className={`${theme === "dark" ? "" : ""} verticalS gap-5`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/tishrabon"
            >
              <FaBehanceSquare
                size={80}
                className={`${theme === "dark" ? "" : "text-lightmain"}`}
              />
            </a>
            <div
              className={`${theme === "dark" ? "border-main" : ""} horizontalC gap-2 border-b text-sm sm:text-base`}
            >
              <IoLinkOutline />
              <p>behance.net/tishrabon</p>
            </div>

            <div>
              Here’s a peek at some graphic design projects I’ve worked on in my
              spare time. Click the icon above to navigate to my full profile.
            </div>
          </div>
        </div>

        {/*blogger*/}
        <div
          className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} verticalS mx-5 w-full gap-5 px-2 py-5`}
        >
          <p className={`${theme === "dark" ? "border-main" : ""} border-b`}>
            Blogger
          </p>

          <div className={`${theme === "dark" ? "" : ""} verticalS gap-5`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tishrabon.blogspot.com/"
            >
              <ImBlogger2
                size={72}
                className={`${theme === "dark" ? "" : "text-lightmain"}`}
              />
            </a>
            <div
              className={`${theme === "dark" ? "border-main" : ""} horizontalC gap-2 border-b text-sm sm:text-base`}
            >
              <IoLinkOutline />
              <p>tishrabon.blogspot.com</p>
            </div>

            <div>
              I wrote an article out of passion about the history and context of
              the Goatee, but it’s unfortunately written in Bengali. You can
              check it out if you're interested by clicking the icon above.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
