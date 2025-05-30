import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import HelmetTag from "../../reactHelmet/HelmetTag";
import PageHeading from "../../components/PageHeading";
import DownloadCv from "../../components/DownloadCv";
import FaqTerminal from "./FaqTerminal";
import FaqMarshmallow from "./FaqMarshmallow";

import { BiSolidMessageDetail } from "react-icons/bi";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaAddressCard,
  FaCertificate,
} from "react-icons/fa6";
import { FaHandshake, FaQuestionCircle } from "react-icons/fa";

import { FaFileDownload } from "react-icons/fa";

const HireDev = () => {
  const terminalHeading = `tishrabon:\\portfolio\\hireDev.exe`;
  const marshmallowHeading = `Hire Dev`;
  const { theme } = useContext(themeContext);

  return (
    <div className="otherpage-container verticalS gap-10 text-center">
      <HelmetTag title="Hire Dev" />
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      <div className="flex w-full justify-end">
        <DownloadCv />
      </div>

      {/*section 1 container*/}
      <div className="verticalS mx-5 mt-5 gap-10">
        {/*banner & intro container*/}
        <div
          className={`flex max-w-[700px] flex-col items-center justify-center gap-5 sm:flex-row sm:items-center sm:gap-10 md:gap-20`}
        >
          {/*BANNER*/}
          <div className={`relative w-[200px]`}>
            <FaAddressCard
              size={200}
              className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}
            />

            <div className={`hireDev-round z-[10]`}>
              <FaCertificate
                size={80}
                className={`${theme === "dark" ? "text-main" : "text-lightfont"} rotatingMonk`}
              />
            </div>

            <div
              className={`${theme === "dark" ? "text-vsmain" : "text-vslight"} hireDev-approve z-[200] text-center text-[60px]`}
            >
              <FaQuestionCircle />
            </div>
          </div>

          {/*intro*/}
          <div
            className={`flex flex-col items-center justify-center sm:items-start`}
          >
            <div className={`text-lg`}>Hey again!</div>

            <div className={`mb-3 text-2xl sm:text-left`}>
              I'm your frontend reactJs dev, Shrabon!
            </div>

            <div
              className={`${theme === "dark" ? "bg-main text-vsmain" : "rubbertap"} w-auto rounded-md p-2`}
            >
              Currently I'm open to job opportunities...
            </div>
          </div>
        </div>

        {/*the pitching*/}
        <div className="verticalC max-w-[600px] gap-5">
          <BiSolidMessageDetail
            size={120}
            className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}
          />

          <div
            className={`${theme === "dark" ? "terminaltap" : "rubbertap"} rounded-[15px] px-2 py-8 text-[16px] sm:text-[18px]`}
          >
            <div className={`mb-3 flex flex-col items-start`}>
              <FaQuoteLeft
                size={50}
                className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}
              />
              <span className="">
                This is my second project, reflecting the quality and uniqueness
                of my work. I designed this portfolio with multiple perspectives
                in mind so it can adapt across different paradigms, and I’m
                ready to deliver even more when given the opportunity to grow in
                a real work environment.
              </span>
            </div>

            <div className={`mb-3 flex flex-col items-end`}>
              <span className="mb-3">
                I'm starting as a frontend dev with plans to evolve into a
                full-stack dev because I’m passionate about coding and building
                a career around it.
              </span>
              <span className="">
                I’ve also put together some FAQs in the last section, covering
                questions you might have, feel free to check them out.
              </span>
              <FaQuoteRight
                size={50}
                className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}
              />
            </div>
          </div>
        </div>

        {/*cta for connections*/}
        <div
          className={`${theme === "dark" ? "rounded-md bg-vsmain" : "rubbertapRev rounded-[20px]"} verticalS p-5`}
        >
          <FaHandshake
            size={100}
            className={`border-b ${theme === "dark" ? "border-main" : "text-lightmain"} mb-5`}
          />

          <p className={`sm:text-lg`}>
            Whether I caught your interest or not, I’d still love to connect. Or
            just drop some feedback on my work, It would truly mean a lot and
            help me learn.
          </p>

          <button
            className={`${theme === "dark" ? "bg-main text-vsmain" : "rubberbuttonRevJr"} my-5 rounded-[10px] p-2 px-6 sm:text-lg`}
            onClick={() => {
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Connect!
          </button>
        </div>
      </div>

      {/*section 2/FAQs*/}
      {theme === "dark" ? <FaqTerminal /> : <FaqMarshmallow />}
    </div>
  );
};

export default HireDev;
