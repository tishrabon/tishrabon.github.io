import React, { useState, useContext } from 'react';
import { FaFileDownload } from "react-icons/fa";
import { themeContext } from "../context/ThemeContext"

const DownloadCv = () => {
  const { theme } = useContext(themeContext);
  return (
    <div>

      <div 
        className={`kire`}>
        <a 
          href="/tishrabonCV.pdf"
          dowload="Towhidul Islam Shrabon CV"
          className={`${theme === 'dark' ? "terminalbutton" : "rubberbuttonRev"} horizontalC gap-1 py-4 px-6 rounded-md`}>
          <FaFileDownload size={30} className={`${theme === 'dark' ? "" : "text-lightmain"}`}/>
          <p className="mt-1">Get CV</p>            
        </a>
      </div>   

    </div>
  );
};

export default DownloadCv;