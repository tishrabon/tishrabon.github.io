import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";
import FaqTerminal from "./FaqTerminal";
import FaqMarshmallow from "./FaqMarshmallow";

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

  const pitching = "I'm a fresher & this is my 2nd project, reflecting the quality and uniqueness of my work. I designed this portfolio with multiple perspectives in mind so that it can fit into even more paradigms, and I’ll do even better when I have the opportunity to grow in a real work environment. I'm starting as a frontend dev with plans to evolve into a full-stack dev because I’m passionate about coding and building a career around it. I’ve also put together some FAQs, covering questions you might have, feel free to check them out."

  return (
    <div className="otherpage-container verticalS text-center gap-10">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      {/*section 1 container*/}
      <div className="verticalS mx-5 mt-5 gap-10">

        {/*banner & intro container*/} 
        <div className={`flex flex-col justify-center items-center sm:flex-row sm:items-center gap-5 sm:gap-10 md:gap-20 max-w-[700px]`}>          

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

            <div className={`${theme === "dark" ? "text-vsmain" : "text-vslight"} hireDev-approve z-[200] text-[60px] text-center`}>
              <FaQuestionCircle />
            </div>
          </div>   
          
          {/*intro*/}
          <div className={`flex flex-col justify-center items-center sm:items-start`}>

            <div className={`text-lg`}>
              Hey again!
            </div>

            <div className={`text-2xl mb-3 sm:text-left`}>
              I'm your frontend reactJs dev, Shrabon!
            </div>   

            <div className={`${theme === "dark" ? "bg-main text-vsmain" : "rubbertap"} p-2 w-auto rounded-md`}>
              Currently I'm open to job opportunities...
            </div>

          </div>       
        </div>

        {/*the pitching*/}
        <div className="verticalC max-w-[600px] gap-5">          
          <BiSolidMessageDetail size={120} className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}/>

          <div className={`${theme === "dark" ? "terminaltap" : "rubbertap"} py-8 px-2 rounded-[15px] text-[16px] sm:text-[18px]`}>

            <div className={`mb-3 flex flex-col items-start`}>
              <FaQuoteLeft  size={50} className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}/>
              <span className="">I'm a fresher & this is my 2nd project, reflecting the quality and uniqueness of my work. I designed this portfolio with multiple perspectives in mind so that it can fit into even more paradigms, and I’ll do even better when I have the opportunity to grow in a real work environment.
              </span>
            </div>

            <div className={`mb-3 flex flex-col items-end`}>              
              <span className="mb-3">I'm starting as a frontend dev with plans to evolve into a full-stack dev because I’m passionate about coding and building a career around it.
              </span>
              <span className="">
                I’ve also put together some FAQs in the last section, covering questions you might have, feel free to check them out.
              </span>              
              <FaQuoteRight  size={50} className={`${theme === "dark" ? "text-vsmain" : "text-lightmain"}`}/>
            </div>

          </div>
        </div>

        {/*cta for connections*/}
        <div className={`${theme === "dark" ? "bg-vsmain rounded-md" : "rubbertapRev rounded-[20px]"} p-5 verticalS`}>
          <FaHandshake size={100} className={`border-b ${theme === "dark" ? "border-main" : "text-lightmain"} mb-5`}/>

          <p className={`sm:text-lg`}>Whether I caught your interest or not, I’d still love to connect. Or just drop some feedback on my work, It would truly mean a lot and help me learn.</p>

          <button className={`${theme === "dark" ? "bg-main text-vsmain" : "rubberbuttonRevJr"} p-2 px-6 my-5 rounded-[10px] sm:text-lg`}>
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
