import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";

const ChapterHead = ({ TerminalIcon, MarshIcon, no, name, word, rotate }) => {
  const { theme } = useContext(themeContext);
  const iconSize = 50;

  return (
    <div
      className={`verticalC h-full w-full gap-2 ${theme === "dark" ? "terminaltapRev rounded-[20px]" : "rubbertapRev rounded-[20px]"} p-5`}
    >
      {/*react icons*/}
      <div className={`${rotate === "rotate" ? "rotating360" : ""}`}>
        {theme === "dark" ? (
          <TerminalIcon size={iconSize} />
        ) : (
          <MarshIcon size={iconSize} />
        )}
      </div>
      <p className={`${theme === "dark" ? "border-main" : ""} mb-1 border-b`}>
        Chapter {no}
      </p>
      <p className="text-lg">{name}</p>

      <p className="text-lg">{word}</p>
    </div>
  );
};

export default ChapterHead;
