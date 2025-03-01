import React, { useState, useContext } from "react";
import { FaFileDownload } from "react-icons/fa";
import { themeContext } from "../context/ThemeContext";

const DownloadCv = () => {
  const { theme } = useContext(themeContext);
  return (
    <div>
      <div className={`kire`}>
        <a
          href="/tishrabon-resume.pdf"
          // download="tishrabon-resume.pdf"
          className={`${theme === "dark" ? "terminalbutton" : "rubberbuttonRev"} horizontalC gap-1 rounded-md px-6 py-4`}
        >
          <FaFileDownload
            size={30}
            className={`${theme === "dark" ? "" : "text-lightmain"}`}
          />
          <p className="mt-1">Resume</p>
        </a>
      </div>
    </div>
  );
};

export default DownloadCv;
