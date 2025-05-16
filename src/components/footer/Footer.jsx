import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import { RiUserAddFill, RiGlobalFill } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { CgHello } from "react-icons/cg";
import { AiOutlineSmile } from "react-icons/ai";

import { FaEarthAsia } from "react-icons/fa6";
import { RxGlobe } from "react-icons/rx";
import { HiGlobeAlt } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`${theme === "dark" ? "" : ""} verticalS relative h-[1400px] w-full max-w-[1200px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] p-10 sm:w-[80vw]`}
      id="footer"
    >
      <div
        className={`${theme === "dark" ? "" : "text-slate-400"} inset-0 mt-[50px]`}
      >
        <BsGlobe className={`rotatingSloth h-[1300px] w-[1300px]`} />
      </div>

      {/*MAIN CONTAINER*/}
      <div
        className={`${theme === "dark" ? "bg-darknavbg text-lightmain" : "bg-lightnavbg text-lightfont"} frostglassFooter verticalS absolute inset-0 gap-5 rounded-tl-[16px] rounded-tr-[16px] p-5 text-center`}
      >
        <CgHello size={80} className={`mt-10 text-lightmain`} />

        <p className={`max-w-[900px] text-[18px] sm:text-xl`}>
          Maybe you’re not looking to collaborate right now, but who knows about
          the future? Let’s stay connected, just in case our paths align down
          the road in the future...
        </p>

        <FaEarthAsia size={80} className={`rotatingMonk text-lightmain`} />

        <p className={`text-[30px]`}>Let's Connect!</p>

        <div className={`verticalS gap-10`}>
          {/*EMAIL*/}
          <div
            className={`${theme === "dark" ? "terminalbutton" : "rubberbutton2"} verticalC w-full rounded-md p-4`}
          >
            <p>Email Me</p>
            <MdEmail size={50} />
            <p className="text-sm sm:text-base">tishrabon.official@gmail.com</p>
          </div>

          {/*LINKEDIN*/}
          <div
            className={`${theme === "dark" ? "terminalbutton" : "rubberbutton2"} verticalC w-full rounded-md p-4`}
          >
            <p>Let's Connect On</p>
            <a
              className={`flex flex-col items-center gap-1`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tishrabon/"
            >
              <FaLinkedin size={50} />
              <span className="text-sm">linkedin.com/in/tishrabon</span>
            </a>
          </div>

          {/*GITHUB*/}
          <div
            className={`${theme === "dark" ? "terminalbutton" : "rubberbutton2"} verticalC w-full rounded-md p-4`}
          >
            <p>{`< code & stuffs />`}</p>
            <a
              className={`flex flex-col items-center gap-1`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tishrabon"
            >
              <FaSquareGithub size={50} />
              <span className="text-sm">@tishrabon</span>
            </a>
          </div>

          {/*X*/}
          <div
            className={`${theme === "dark" ? "terminalbutton" : "rubberbutton2"} verticalC w-full rounded-md p-4`}
          >
            <p>Find Me On</p>
            <a
              className={`flex flex-col items-center gap-1`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/tishrabon"
            >
              <FaSquareXTwitter size={50} />
              <span className="text-sm">@tishrabon</span>
            </a>
          </div>
        </div>

        <p>
          Thanks for stopping by! Let’s connect and hope we get to work together
          soon!
        </p>

        <div
          className={`flex h-[150px] w-full flex-col items-center justify-end px-5 text-lg`}
        >
          <p className={`text-sm`}>Originally Coded by</p>

          <p
            className={`${theme === "dark" ? "border-lightmain" : ""} mb-3 border-b pb-1`}
          >
            T.I. Shrabon
          </p>

          <p className={`text-xs`}>
            &copy; {new Date().getFullYear()} All rights reserved. This site,
            including all code, design, and ideas, is my original work.
            Unauthorized use is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
