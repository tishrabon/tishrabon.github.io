import React, { useState, useContext, useRef, useEffect } from "react";
import { themeContext } from "../../context/ThemeContext";
import HelmetTag from "../../reactHelmet/HelmetTag";
import { useLocation } from "react-router-dom";

import PageHeading from "../../components/PageHeading";
import ChapterHead from "./ChapterHead";
import DownloadCv from "../../components/DownloadCv";

// react icons
import { RiUserSearchLine, RiUserSearchFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { IoTelescopeOutline } from "react-icons/io5";
import { IoTelescope } from "react-icons/io5";

import { PiBaseballHelmetDuotone } from "react-icons/pi";
import { RiToolsFill } from "react-icons/ri";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiFirebase } from "react-icons/si";

import { TbPointFilled } from "react-icons/tb";
import { FaLaptopCode, FaCode } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";

import { IoMdArrowDown, IoMdArrowBack } from "react-icons/io";

import {
  FaJsSquare,
  FaGitAlt,
  FaReact,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

import { SiAdobeillustrator } from "react-icons/si";
import { GiPlantRoots } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiSublimetext } from "react-icons/si";
import { PiHourglassSimpleLowFill } from "react-icons/pi";

import { FaFileDownload } from "react-icons/fa";

const DevsInsight = () => {
  const { theme } = useContext(themeContext);
  const location = useLocation();

  const terminalHeading = `tishrabon:\\portfolio\\devsInsight.exe`;
  const marshmallowHeading = `Dev's Insight`;
  const bmcRef = useRef(null);

  const bClass = `verticalS gap-5 w-full`;
  const pClass = `text-lg text-left px-2 sm:px-4`;
  const toolsBlock = `${theme === "dark" ? "bg-vsmain rounded-md" : "rubbertapRev rounded-[15px]"} verticalS gap-5 overflow-hidden`;
  const toolStack = `flex flex-wrap justify-center items-start w-auto p-5`;
  const toolsClass = `${theme === "dark" ? "bg-main text-vsmain" : "rubbertapRevJr text-lightmain"} verticalC m-2 h-auto w-24 rounded-md p-2`;

  const chapterOne = {
    p1: "I live in Dhaka, Bangladesh. I'm a self-taught programmer. I was pursuing a degree in Computer Science & Engineering but took a break due to certain circumstances. I might resume it in the future. Native in Bangla, confident in English for professional work.",

    p2: "The biggest thing I enjoy about coding is the ability to create something complex and comprehensive using just code and algorithms. It's an addiction I can't get enough of. Whether it's learning a new framework or solving complex problems, I focus on quality and originality.",

    p3: "I'm highly sensitive to the finer details. Every design, theme, and line of code must feel polished and unique. Whatever I create, it will always stand out for its beauty and originality. You can instantly tell my work isn't ordinary by its look and feel.",

    p4: "Take a look at my portfolio, and you'll see the quality and uniqueness of my work. It reflects my personal taste and attention to detail. The portfolio features two themes: Terminal and Marshmallow. These aren’t just typical dark and light themes, they each have their own distinct character, patterns, and design philosophy, setting them apart from the traditional approach.",

    p5: "And That's who I am.",
  };

  const chapterTwo = {
    p1: `Honestly, I'm a fresher with zero experience. I come from a science background and am a self-taught programmer. I was majoring in Computer Science & Engineering at the University of Asia Pacific, Dhaka, Bangladesh, but paused my studies with the possibility of resuming in the future.`,

    p2: `I'm diving into frontend development for now, but since full-stack development is my ultimate goal and I love creating complete solutions, full-stack development is where I’m heading..`,
  };

  const chapterThree = {
    p1: `Well, this chapter might seem boring! I'm about to share a glimpse into the things I love to explore beyond my professionalism, that naturally reflect in the patterns, mechanisms, and structures behind my work. Nothing random or out of place.`,

    p2: `I'm fascinated by the history of human civilization, curious about what things were like then, what they are now, and the journey in between, how paradigms, thoughts, and tastes have evolved over time. This curiosity drives me to explore insights across Philosophy, Psychology, Religion, History, and Anthropology. I enjoy watching documentaries and listening to podcasts to explore different perspectives on these topics and gain a deeper visualization.`,

    p3: `I sometimes like to play with illustration works, such as logos, random posters, cover arts, abstract arts etc as a creative outlet. For my own projects, I create my own illustrations. I’m not a graphic designer, by the way! I just do it as a hobby.`,

    p4: `kire chandu?? valo achis? <span className="underline">nogga</span>`,
  };

  const chapterFour = {
    p1: `It wasn’t my intention to make this so long. I honestly just wanted to share a bit about myself. I hope you’ve gained some good insight, and I’m looking forward to the possibility of collaborating!`,
  };

  const scrollTo = (targetRef) => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.hash === "#bmcRef") {
      scrollTo(bmcRef);
    }
  }, [location]);

  return (
    <div className="otherpage-container verticalS text-center">
      <HelmetTag title="Dev's Insight" />
      {/*PAGE HEADING*/}
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      <div className="my-5 flex w-full justify-end">
        <DownloadCv />
      </div>

      <div className="verticalS w-full gap-5">
        {/*ONE LINE BIO*/}
        <p className="text-2xl">Hi! I’m Shrabon, a React Frontend Developer.</p>
        {/*DEVS IMAGE*/}
        <div className={`h-[200px] w-[200px] overflow-hidden rounded-full`}>
          <img
            className="object-fit object-cover"
            src="tishrabon-photo.jpg"
            alt="tishrabon"
          />
        </div>
        {/*BRIEF INTRO ABOUT ME*/}
        <p
          className={`${theme === "dark" ? "border-main" : ""} max-w-[600px] border-b pb-5 text-lg`}
        >
          My name is Towhidul Islam Shrabon. As a professional, I go by the name{" "}
          <span
            className={`${theme === "dark" ? "rounded-sm bg-main text-vsmain" : "rounded-md bg-slate-200 text-lightfont"} px-2`}
          >
            tishrabon
          </span>
          . You can call me Shrabon.
        </p>
        {/*IN A NUTSHELL*/}
        <p className={`max-w-[600px] pb-5 text-lg`}>
          I’m a React Frontend Developer passionate about crafting original web
          applications with a focus on the psychology behind UI+UX, analyzing
          how design and functionality influence user behavior and experiences.
        </p>

        {/*DEEP INSIGHTS ABOUT ME*/}
        <div className="verticalS w-full max-w-[800px] gap-10">
          {/*CHAPTER ONE*/}
          <div className={`${bClass}`}>
            <ChapterHead
              TerminalIcon={RiUserSearchLine}
              MarshIcon={RiUserSearchFill}
              no="One"
              name="Who Am I?"
              // word="kire chandu? valo achis?"
            />

            <p className={`${pClass}`}>{chapterOne.p1}</p>

            <p className={`${pClass}`}>{chapterOne.p2}</p>

            <p className={`${pClass}`}>{chapterOne.p4}</p>
          </div>

          {/*CHAPTER TWO*/}
          <div className={`${bClass}`} ref={bmcRef}>
            <ChapterHead
              TerminalIcon={BsTools}
              MarshIcon={BsTools}
              no="Two"
              name="Behind My Coding.."
              rotate="rotate"
            />

            <p className={`${pClass}`}>{chapterTwo.p1}</p>

            <p className={`${pClass}`}>{chapterTwo.p2}</p>

            <div className="verticalS w-full gap-10">
              <div
                className={`${theme === "dark" ? "terminaltap" : "rubbertapRev"} verticalC my-3 gap-3 rounded-[15px] p-10 text-lg`}
              >
                <FaCode size={70} />

                <div
                  className={`${theme === "dark" ? "border-b border-main pb-5" : "border-b pb-5"}`}
                >
                  Skills & Tools
                </div>
                <IoMdArrowDown />
              </div>

              {/*THE BLOCK OF SKILLS-N-TOOLS*/}
              <div
                className={`flex w-full flex-wrap items-start justify-center gap-x-10 gap-y-10`}
              >
                {/*CORE LANGUAGES*/}
                <div className={`${toolsBlock}`}>
                  <p
                    className={`${theme === "dark" ? "bg-main text-vsmain" : "mt-2 border-b"} w-full p-1 px-3 text-lg`}
                  >
                    Core Languages
                  </p>

                  <div className={`${toolStack}`}>
                    <div className={`${toolsClass}`}>
                      <FaJsSquare size={70} />
                      <p className="text-sm">js</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <BiLogoTypescript size={70} />
                      <p className="text-sm">ts</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <FaHtml5 size={70} />
                      <p className="text-sm">html</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <FaCss3Alt size={70} />
                      <p className="text-sm">css</p>
                    </div>
                  </div>

                  <p
                    className={`${theme === "dark" ? "" : ""} horizontalS mb-5 mt-[-16px] w-full gap-2 px-4 text-left text-sm`}
                  >
                    <span>
                      <TbPointFilled />
                    </span>{" "}
                    TypeScript: Latest addition, enhancing my expertise...
                  </p>
                </div>

                {/*FRAMEWORKS */}
                <div className={`${toolsBlock}`}>
                  <p
                    className={`${theme === "dark" ? "bg-main text-vsmain" : "mt-2 border-b"} w-full p-1 px-3 text-lg`}
                  >
                    Libraries/Frameworks
                  </p>

                  <div className={`${toolStack}`}>
                    <div className={`${toolsClass}`}>
                      <FaReact size={60} className="rotating360" />
                      <p className="mt-1 text-sm">react</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <RiTailwindCssFill size={70} className="" />
                      <p className="text-sm">tailwind</p>
                    </div>
                  </div>
                </div>

                {/*STATE MANAGEMENT */}
                <div className={`${toolsBlock}`}>
                  <p
                    className={`${theme === "dark" ? "bg-main text-vsmain" : "mt-2 border-b"} w-full p-1 px-3 text-lg`}
                  >
                    State Management
                  </p>

                  <div className={`${toolStack}`}>
                    <div className={`${toolsClass}`}>
                      <SiRedux size={60} />
                      <p className="mt-1 text-sm">redux/rtk</p>
                    </div>
                  </div>
                </div>

                {/*Authentication and Data Storage */}
                <div className={`${toolsBlock}`}>
                  <p
                    className={`${theme === "dark" ? "bg-main text-vsmain" : "mt-2 border-b"} w-full p-1 px-3 text-lg`}
                  >
                    Authentication & Data Storage
                  </p>

                  <div className={`${toolStack}`}>
                    <div className={`${toolsClass}`}>
                      <SiFirebase size={60} />
                      <p className="mt-1 text-sm">firebase</p>
                    </div>
                  </div>
                </div>

                {/*OTHER DEV TOOLS */}
                <div className={`${toolsBlock}`}>
                  <p
                    className={`${theme === "dark" ? "bg-main text-vsmain" : "mt-2 border-b"} w-full p-1 px-3 text-lg`}
                  >
                    Other Developer Tools
                  </p>

                  <div className={`${toolStack}`}>
                    <div className={`${toolsClass}`}>
                      <FaGitAlt size={70} />
                      <p className="text-sm">git</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <PiBaseballHelmetDuotone size={70} />
                      <p className="text-sm">react Helmet</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <VscVscodeInsiders size={65} />
                      <p className="text-sm">vsCode</p>
                    </div>

                    <div className={`${toolsClass}`}>
                      <SiSublimetext size={55} />
                      <p className="mt-1 text-sm">sublime text</p>
                    </div>
                  </div>

                  <p
                    className={`${theme === "dark" ? "" : ""} horizontalS mb-5 mt-[-16px] w-full gap-2 px-4 text-left text-sm`}
                  >
                    <span>
                      <TbPointFilled />
                    </span>{" "}
                    reactHelmet for SEO Optimization
                  </p>
                </div>

                {/*OTHER TOOLS */}
                <div className={`${toolsBlock}`}>
                  <p
                    className={`${theme === "dark" ? "bg-main text-vsmain" : "mt-2 border-b"} w-full p-1 px-3 text-lg`}
                  >
                    Illustration
                  </p>

                  <div className={`${toolStack}`}>
                    <div className={`${toolsClass}`}>
                      <SiAdobeillustrator size={56} />
                      <p className="mt-1 text-sm">adobe illustrator</p>
                    </div>
                  </div>

                  <p
                    className={`${theme === "dark" ? "" : ""} horizontalS mb-5 mt-[-16px] w-full gap-2 px-4 text-left text-sm`}
                  >
                    <span>
                      <TbPointFilled />
                    </span>{" "}
                    ai: just basics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*CHAPTER THREE*/}
          <div className={`${bClass}`}>
            <ChapterHead
              TerminalIcon={IoTelescopeOutline}
              MarshIcon={IoTelescope}
              no="Three"
              name="Beyond My Coding++"
              // rotate="rotate"
            />

            <p className={`${pClass}`}>{chapterThree.p1}</p>

            {/*PART TWO*/}
            <div className="verticalS w-full gap-5">
              {/*front face*/}
              <div
                className={`${theme === "dark" ? "terminaltap" : "rubbertapRev"} verticalC my-3 w-auto max-w-[250px] gap-3 rounded-[15px] p-10 text-lg`}
              >
                <GiPlantRoots size={70} />

                <div
                  className={`${theme === "dark" ? "border-b border-main pb-5" : "border-b pb-5"}`}
                >
                  Curiosity & Exploration
                </div>
                <IoMdArrowDown />
              </div>

              <p className={`${pClass}`}>{chapterThree.p2}</p>
            </div>

            {/*PART Three*/}
            <div className="verticalS w-full gap-5">
              {/*front face*/}
              <div
                className={`${theme === "dark" ? "terminaltap" : "rubbertapRev"} verticalC my-3 w-auto max-w-[250px] gap-3 rounded-[15px] p-10 text-lg`}
              >
                <FaPaintBrush size={70} />

                <div
                  className={`${theme === "dark" ? "border-b border-main pb-5" : "border-b pb-5"}`}
                >
                  Creative Pursuits
                </div>
                <IoMdArrowDown />
              </div>

              <p className={`${pClass}`}>{chapterThree.p3}</p>
            </div>

            {/*PART Four*/}
            <div className="verticalS w-full gap-5">
              {/*front face*/}
              <div
                className={`${theme === "dark" ? "terminaltap" : "rubbertapRev"} verticalC my-3 w-auto max-w-[250px] gap-3 rounded-[15px] p-10 text-lg`}
              >
                <GiFlowerPot size={70} />

                <div
                  className={`${theme === "dark" ? "border-b border-main pb-5" : "border-b pb-5"}`}
                >
                  Passions & Hobbies
                </div>
                <IoMdArrowDown />
              </div>

              <ul className={`list-disc gap-5 px-5 text-left text-lg`}>
                <li>Snooker is my favorite sport full stop.</li>

                <li>I’m a great admirer of melody, rhythm, and tunes.</li>

                <li>
                  I have a thirst to explore the world from a local's
                  perspective, to observe and understand cultures and
                  experiences as I discover them.
                </li>

                <li>Vintage vibes are a luxury I embrace, not a limitation.</li>

                <li>
                  I like to browse Pinterest and explore eras, cultures,
                  aesthetics, ideas and more.
                </li>
              </ul>
            </div>
          </div>

          <div className={`${bClass}`}>
            <ChapterHead
              TerminalIcon={PiHourglassSimpleLowFill}
              MarshIcon={PiHourglassSimpleLowFill}
              no="Four"
              name="The Epilogue"
              rotate="rotate"
            />

            <p className={`${pClass}`}>{chapterFour.p1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevsInsight;
