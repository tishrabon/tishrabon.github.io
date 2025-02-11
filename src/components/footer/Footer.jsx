import React, { useState, useContext } from 'react';
import { themeContext } from '../../context/ThemeContext';
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
    <div className={`${theme === "dark" ? "" : ""} relative w-full rounded-tl-[30px] rounded-tr-[30px] max-w-[1000px] p-10 verticalS h-[1400px] overflow-hidden`}      
      id="footer"
    >      
      {/*<img src="tishrabon-frost-original.svg" alt="" className="rotatingMonkz" />*/}

      <div className={`${theme === "dark" ? "" : "text-slate-400"} inset-0 mt-[50px]`}>
        <BsGlobe className={`h-[1300px] w-[1300px] rotatingSloth`} />
      </div> 

 {/*     <div className={`${theme === "dark" ? "" : "text-slate-400"} inset-0`}>
        <BsGlobe className={`h-[100vh] w-[100vh] rotatingSloth`} />
      </div> */}           

      {/*MAIN CONTAINER*/}
      <div className={`${theme === "dark" ? "bg-darknavbg text-lightmain" : "bg-lightnavbg text-lightfont"} frostglassFooter absolute inset-0 verticalS rounded-tl-[16px] rounded-tr-[16px] p-5 gap-5 text-center`}> 

        <CgHello size={80} className={`text-lightmain mt-10`}/>       

        <p className={`text-[18px] sm:text-xl`}>
          Maybe you’re not looking to collaborate right now, but who knows
          about the future? Let’s stay connected, just in case our paths
          align down the road in the future...
        </p>  

        <FaEarthAsia size={80} className={`text-lightmain rotatingMonk`}/> 

        <p className={`text-[30px]`}>
          Let's Connect!
        </p>

        <div className={`verticalS gap-10`}>
          {/*EMAIL*/}
          <div
            className={`${theme === "dark" ? "terminalbutton" : "rubberbutton2"} verticalC w-full rounded-md p-4`}
          >
            <p>Email Me</p>
            <MdEmail size={50} />
            <p className="text-sm sm:text-base">
              tishrabon.official@gmail.com
            </p>
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

        <p>Thanks for stopping by! Let’s connect and hope we get to work together soon!</p>

        <div className={`text-lg px-5 w-full h-[150px] flex flex-col justify-end items-center`}>
          <p className={`text-sm`}>Originally Coded by</p>

          <p className={`${theme === 'dark' ? "border-lightmain" : ""} border-b pb-1 mb-3`}>T.I. Shrabon</p>

          <p className={`text-xs`}>All rights reserved. Unauthorized use of this code is strictly prohibited.</p>
        </div>
    
      </div>

    </div>
  );
};

export default Footer;
