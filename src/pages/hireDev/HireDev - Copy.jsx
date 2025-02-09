import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

import { BsCardText } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { BsGearWide } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

const HireDev = () => {
  const terminalHeading = `tishrabon:\\portfolio\\hireDev.exe`;
  const marshmallowHeading = `Hire Dev`;
  const { theme } = useContext(themeContext);

  const sample = `In an ecosystem with more limited factors, I’ve developed a level of quality, ambition, vision, and drive that’s rare. You’re getting someone with a rare mindset, vision, and resilience who stands out no matter where you're looking. Give me the opportunity to grow and go further, before someone else does, and I’ll show you why I’m worth the investment.`;

  const sample2 = `In my early university semesters, while most struggled with core programming in C, I found it exciting and intuitive. Once, I even scored the highest in a semester final without studying at all the night before. Currently focused on frontend development, I aim to become a full-stack developer and plan to revisit problem-solving once I land a job. In short, I love programming!`;

  const pitching =
    "I'm a fresher & this is my 2nd project, reflecting the quality and uniqueness of my work. I designed this portfolio with multiple perspectives in mind so that it can fit into even more paradigms, and I’ll do even better when I have the opportunity to grow in a real work environment. I'm starting as a frontend dev with plans to evolve into a full-stack dev because I’m passionate about coding and building a career around it.";

  return (
    <div className="otherpage-container verticalS text-center">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

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
                I'm a fresher & this is my 2nd project, reflecting the quality
                and uniqueness of my work. I designed this portfolio with
                multiple perspectives in mind so that it can fit into even more
                paradigms, and I’ll do even better when I have the opportunity
                to grow in a real work environment.
              </span>
            </div>

            <div className={`mb-3 flex flex-col items-end`}>
              <span className="">
                I'm starting as a frontend dev with plans to evolve into a
                full-stack dev because I’m passionate about coding and building
                a career around it.
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
          >
            Let's Connect!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireDev;
