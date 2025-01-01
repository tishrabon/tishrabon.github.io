import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../../context/ThemeContext";
import { useNavigate, Link } from "react-router-dom";

import darkmotion1 from "/tishrabon-original-codeface.svg";
import darkmotion2 from "/tishrabon-original-name.svg";
import lightmotion1 from "/tishrabon-marsh-codeface.svg";
import lightmotion2 from "/tishrabon-marsh-name.svg";

import { FiCoffee } from "react-icons/fi";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidTerminal } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";

import { IoMdArrowDown, IoMdArrowBack } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

import {
  FaJsSquare,
  FaGitAlt,
  FaReact,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiFirebase } from "react-icons/si";

import { MdStars, MdOutlineStars } from "react-icons/md";

import { RiUserAddFill, RiGlobalFill } from "react-icons/ri";
import { MdVerified, MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Home = ({ stick }) => {
  const { theme } = useContext(themeContext);
  const navigate = useNavigate();
  const terminalInputRef = useRef(null);

  const [animationKey, setAnimationKey] = useState(0);
  const [falseCmd, setFalseCmd] = useState(false);
  const [falseCmdCounts, setFalseCmdCounts] = useState(0);
  const [navInsight, setNavInsight] = useState("");
  const holla = "I'm your frontend dev, Shrabon!";

  const intro101 = "Focused on crafting and counting every tiny aspect. Committed to perfection & originality. Urged to make things happen with a deep focus on UI+UX. These are not just what I do; they are a part of who I am.";

  const toolsClass = `${theme === "dark" ? "bg-main text-vsmain" : "bg-lightmain text-vslight"} verticalC m-2 h-24 w-24 rounded-md p-2`;

  const toDevsInsight = () => {
    if (navInsight === "nav --insight") {
      navigate("/devs-insight");
    } else {
      setFalseCmd(true);
      setFalseCmdCounts((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [theme]);

  return (
    <div
      className={`homepage-container verticalS min-gap-y-5 mb-[500px] text-center`}
      style={{
        marginTop: stick ? "-30px" : "0",
        transition: "margin-top 1s ease",
      }}
    >
      {/*LOGO ANIMATION / HERO */}
      <div
        className="hero-section verticalS mb-[200px] h-[100vh] rounded-md border-none"
        key={animationKey}
      >
        <div className="verticalC relative h-[250px] w-[300px]">
          <img
            className={`${theme === "dark" ? "darkshadow" : "lightshadow"} logo-part right rounded-[11px]`}
            src={theme === "dark" ? darkmotion1 : lightmotion1}
            alt=""
          />

          <img
            className={`logo-part left px-2`}
            src={theme === "dark" ? darkmotion2 : lightmotion2}
            alt=""
          />
        </div>

        <div className="hero-trigger">
          Hey! Looking for a fresh creative talented frontend developer who you
          can trust? Great! You are in the right place! Scroll below mate...
        </div>
      </div>

      {/*PLACE HOLDER FOR HEADER*/}
      <div
        className={`${stick ? "block" : "hidden"} w-full] top-[110vh] h-[72px]`}
      ></div>

      {/*HOME CONTENTS START HERE */}
      <div className="home-contents verticalS relative top-0 gap-20">
        {/* BIO, TEASE/ABOUT, CTAs  */}
        <div tabIndex="0" className="mb-1">
          {theme === "dark" ? (
            <div
              className={`verticalS overflow-hidden p-5 text-left text-main sm:max-w-[500px] md:max-w-[700px]`}
            >
              <div className="mb-6">
                <span className="">
                  <FiCoffee size={100} />
                </span>
              </div>

              <p className="horizontalC mb-2 gap-x-2 text-2xl font-bold text-center">
                Hello! Good Morning..
              </p>

              <p className="mb-6 text-center text-xl font-semibold">{holla}</p>

              <div className="overflow-hidden rounded-md bg-vsmain p-1 text-lg">
                <div
                  className={`m-[-4px] flex gap-x-1 bg-main p-2 text-sm text-vsmain`}
                >
                  <span className="mt-[2px]">
                    <BiSolidTerminal />
                  </span>{" "}
                  <span>{`tishrabon:\home\intro>run --bio`}</span>
                </div>
                <div className="flex flex-col items-start justify-start p-2">
                  <p> {`>`} {intro101} </p>
                  <div>
                    <p className="text-[#5e8c01]">
                      <span className="text-main">{">"}</span> Want deeper insight?
                      Type{" "}
                      <span className="rounded-sm bg-darkbg px-1 text-base italic text-main">
                        nav --insight
                      </span>{" "}
                      command below and hit enter to learn more about me!
                    </p>

                    <div className={`${falseCmd ? "" : "hidden"}`}>
                      <span>{"> "}</span>
                      <span className="text-base text-red-600">
                        Wrong command alert! Please enter correct command!(x
                        {falseCmdCounts})
                      </span>
                    </div>
                    <div onClick={() => terminalInputRef.current.focus()}>
                      {"> "}
                      <input
                        ref={terminalInputRef}
                        className={`border-none bg-transparent p-0 text-inherit outline-none`}
                        style={{ width: `${Math.max(navInsight.length, 1)}ch` }}
                        type="text"
                        value={navInsight}
                        onChange={(e) => setNavInsight(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && navInsight.trim() !== "") {
                            toDevsInsight();
                          }
                        }}
                      />
                      <span className="jumpUnderscore">{"_"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="verticalS p-5 text-lightfont sm:max-w-[500px] md:max-w-[700px]">
              <div className="mb-6">
                <span className="">
                  <PiCoffeeFill size={100} />
                </span>
              </div>

              <p className="horizontalC mb-2 text-2xl font-bold">
                Hello! Good Morning..
              </p>

              <p className="horizontalC mb-6 text-center text-xl font-semibold">
                {holla}
              </p>

              {/*BIO*/}

              <div className="rubbertapRev mb-6 rounded-3xl bg-vslight p-7 text-lg">
                <p>{intro101}</p>
              </div>

              <p>
                Want deeper insight? Click the button below to learn more about
                me
              </p>
              <Link
                to="/devs-insight"
                className="rubberbuttonRev mb-6 mt-3 rounded-md p-2"
              >
                {">>"} Explore Dev's Insight {"<<"}
              </Link>
            </div>
          )}
        </div>

        {/* SKILLS/TOOLS */}
        <div
          tabIndex="0"
          className={`flex h-full flex-col items-center justify-start gap-5 p-5 sm:flex-row sm:items-start sm:justify-between ${theme === "dark" ? "border-main" : ""}`}
        >
          <div className={`verticalC h-full w-full gap-10`}>
            {/*Solid Skills Behind My Coding*/}
            <div
              className={`verticalC h-full w-full gap-10 ${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[20px]"} p-10`}
            >
              <BsTools className="rotating360" size={100} />
              <p
                className={`${theme === "dark" ? "border-main" : ""} verticalC border-b pb-6 text-xl`}
              >
                Solid Skills Behind My Coding
                <IoMdArrowDown className="inline sm:hidden" />
                <FiArrowRight className="hidden sm:inline" />
              </p>
            </div>

            {/*CTA/skills sm:breakpoint*/}
            <div
              className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} hidden flex-col items-center justify-start gap-5 p-10 text-lg sm:flex`}
            >
              <span>
                For detailed insights into my skills and tools, Click the button
                below
              </span>

              <button
                className={`${theme === "dark" ? "terminalbutton" : "rubberbuttonRev"} rounded-md p-2 text-base`}
              >
                <Link className="" to="/devs-insight">
                  {">>"} More Insights {"<<"}
                </Link>
              </button>
            </div>
          </div>

          {/*tools glimpse*/}
          <div className="verticalC gap-y-2">
            {/*js*/}
            <div className={`${toolsClass}`}>
              <FaJsSquare size={70} />
              <p className="text-sm">js</p>
            </div>

            {/*html css*/}
            <div className="horizontalC gap-x-2">
              <div className={`${toolsClass}`}>
                <FaHtml5 size={70} />
                <p className="text-sm">html</p>
              </div>
              <div className={`${toolsClass}`}>
                <FaCss3Alt size={70} />
                <p className="text-sm">css</p>
              </div>
            </div>

            {/*react redux rtk*/}
            <div className="horizontalC gap-x-2">
              <div className={`${toolsClass}`}>
                <FaReact className="rotating360" size={70} />
                <p className="text-sm">react</p>
              </div>
              <div className={`${toolsClass}`}>
                <SiRedux size={70} />
                <p className="text-sm">redux/rtk</p>
              </div>
            </div>

            {/*tailwind firebase*/}
            <div className="horizontalC gap-x-2">
              <div className={`${toolsClass}`}>
                <RiTailwindCssFill size={70} />
                <p className="text-sm">tailwind</p>
              </div>
              <div className={`${toolsClass}`}>
                <SiFirebase size={70} />
                <p className="text-sm">firebase</p>
              </div>
            </div>

            {/*git*/}
            <div className={`${toolsClass}`}>
              <FaGitAlt size={70} />
              <p className="text-sm">git</p>
            </div>
          </div>

          {/*CTA/skills phone:breakpoints*/}
          <div
            className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} flex flex-col items-center justify-start gap-5 p-10 text-lg sm:hidden`}
          >
            <span>
              For detailed insights into my skills and tools, Click the button
              below
            </span>

            <Link
              className={`${theme === "dark" ? "terminalbutton" : "rubberbuttonRev"} rounded-md p-2 text-base`}
              to="/devs-insight"
            >
              {">>"} More Insights {"<<"}
            </Link>
          </div>
        </div>

        {/* FEATURED PROJECTS  */}
        <div className="verticalC h-full w-full gap-10 p-5">
          {/*CAPS*/}
          <div
            className={`verticalC h-full w-full gap-10 ${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[20px]"} p-10`}
          >
            {theme === "dark" ? (
              <MdOutlineStars className="rotating360" size={100} />
            ) : (
              <MdStars className="rotating360" size={100} />
            )}

            <p
              className={`${theme === "dark" ? "border-main" : ""} verticalC border-b pb-6 text-center text-xl`}
            >
              Featured Projects ? <IoMdArrowDown />
            </p>
          </div>
          {/*WORDS*/}
          <div
            className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} flex w-full flex-col items-center justify-start gap-5 p-10 text-base sm:text-lg`}
          >
            <span>
              You're currently browsing my second project, this portfolio. Since
              I only have one other project at the moment, I believe it's best
              to keep things simple! Curious to see my work anyway? Click the
              button below!
            </span>

            <Link
              className={`${theme === "dark" ? "terminalbutton" : "rubberbuttonRev"} rounded-md p-2 text-base`}
              to="/portfolio"
            >
              {">>"} My Works {"<<"}
            </Link>

            <span
              className={`${theme === "dark" ? "darkshadow bg-main text-vsmain" : "lightshadow bg-lightmain text-vslight"} rounded-md p-2`}
            >
              More unique and refined projects are on the way as I'm already
              working on the next one...
            </span>
          </div>
        </div>

        {/* HIRE ME  */}

        <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-5 sm:flex-row sm:items-start">
          {/*CAPS*/}
          <div
            className={`verticalC h-full w-full gap-10 ${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[20px]"} p-10`}
          >
            <div className={`flex w-full items-center justify-center gap-5`}>
              {/*<RiUserAddFill size={100} />{" "}*/}
              <MdVerified className="" size={100} />
            </div>

            <p
              className={`${theme === "dark" ? "border-main" : ""} verticalC border-b pb-6 text-center text-xl`}
            >
              Hire Me ?
              <IoMdArrowDown className="inline sm:hidden" />
              <FiArrowRight className="hidden sm:inline" />
            </p>
          </div>

          {/*WORDS*/}
          <div
            className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} flex w-full flex-col items-center justify-start gap-5 p-10 text-base sm:text-lg`}
          >
            <span>
              Let’s be real... Why would you hire a fresher like me? Hopefully,
              there are plenty of good reasons! If you're looking for a fresher
              dev with originality at their core, click the button below to
              learn more.
            </span>

            <Link
              className={`${theme === "dark" ? "terminalbutton" : "rubberbuttonRev"} rounded-md p-2 text-base`}
              to="/hire-dev"
            >
              {">>"} FAQs {"<<"}
            </Link>
          </div>
        </div>

        {/* LETS CONNECT */}

        <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-5">
          {/*CAPS*/}
          <div
            className={`verticalC h-full w-full gap-5 ${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[20px]"} p-10`}
          >
            <div className={`flex w-full items-center justify-center gap-5`}>
              {/*<RiUserAddFill size={100} />{" "}*/}
              <AiOutlineGlobal className="rotating360" size={100} />
            </div>

            <p
              className={`${theme === "dark" ? "border-main" : ""} verticalC border-b pb-6 text-center text-xl`}
            >
              Let's Connect!
              <IoMdArrowDown />
              {/*<FiArrowRight className="hidden sm:inline" />*/}
            </p>
          </div>

          {/*WORDS*/}
          <div
            className={`${theme === "dark" ? "terminaltap rounded-md" : "rubbertapRev rounded-[20px]"} flex w-full flex-col items-center justify-start gap-5 p-10 text-base sm:text-lg`}
          >
            <p>
              Maybe you’re not looking to collaborate right now, but who knows
              about the future? Let’s stay connected, just in case our paths
              align down the road in the future...
            </p>

            <div></div>

            <div
              className={`${theme === "dark" ? "darkshadow bg-main text-vsmain" : "rubbertapRevJr"} verticalC w-full rounded-md p-4`}
            >
              <p>Let's Connect On</p>
              <a
                className={`flex items-end gap-1`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tishrabon/"
              >
                <FaLinkedin size={50} />
                <span className="text-xs sm:text-sm">/in/tishrabon</span>
              </a>
            </div>

            <div
              className={`${theme === "dark" ? "darkshadow bg-main text-vsmain" : "rubbertapRevJr"} verticalC w-full rounded-md p-4`}
            >
              <p>Email Me</p>
              <MdEmail size={50} />
              <p className="text-sm sm:text-base">
                tishrabon.official@gmail.com
              </p>
            </div>

            <div className="verticalC my-5 gap-1">
              <p className="text-2xl">That's not all..</p>
              <p>
                If you want to check out more of my social links, click the
                button below
              </p>
              <IoMdArrowDown />
            </div>

            <Link
              className={`${theme === "dark" ? "terminalbutton" : "rubberbuttonRev"} rounded-md p-2 text-base`}
              to="/lets-connect"
            >
              {">>"} Connect Further {"<<"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
