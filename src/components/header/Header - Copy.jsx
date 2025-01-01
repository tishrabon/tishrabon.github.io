import React, { useState, useContext, useEffect } from "react";
import { themeContext } from "../../context/ThemeContext";
import logoMain from "/tishrabon.svg";
import logoMarsh from "/tishrabon-marsh.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  const location = useLocation();
  const [stick, setStick] = useState(true);

  // useEffect(() => {
  //   const exePosition = () => {
  //     console.log("exe Position yall!");
  //     if (location.pathname === "/") {
  //       setStick(window.scrollY >= window.innerHeight);
  //     } else {
  //       setStick(true);
  //     }
  //   };

  //   window.addEventListener("scroll", exePosition);

  //   return () => window.removeEventListener("scroll", exePosition);
  // }, []);

  return (
    <div
      className={`fixed top-0 z-[1000] ${theme === "dark" ? "bg-[var(--darkheader)]" : "bg-lightheader"} headContainer my-3 flex h-14 w-auto flex-row items-center justify-between gap-x-4 rounded-md p-2`}
    >
      <button
        className={`h-8 w-16 rounded-md border-none bg-gray-800`}
        onClick={toggleTheme}
      >
        {theme}
      </button>

      <div className={`h-10 w-auto sm:h-12`}>
        <img
          className={`object-fit h-full w-full object-cover`}
          src={theme === "dark" ? logoMain : logoMarsh}
          alt="my logo yall"
        />
      </div>

      <div className={`h-8 w-16 rounded-md border-none bg-gray-800 p-2`}>
        <img
          className={`object-fit h-full w-full`}
          src="/barmenu-terminal.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
