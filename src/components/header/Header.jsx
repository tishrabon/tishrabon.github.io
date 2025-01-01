import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../../context/ThemeContext";

import logoMain from "/tishrabon.svg";
import logoMarsh from "/tishrabon-marsh.svg";
import navmenudark from "/navmenu-terminal.svg";
import navmenumarsh from "/navmenu-marsh.svg";

import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { BsLightbulbOff } from "react-icons/bs";
import { GoSun } from "react-icons/go";

const Header = ({ stick }) => {
  const { theme, toggleTheme } = useContext(themeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const themeRef = useRef(null);
  const navMenuRef = useRef(null);
  const navMenuButtonRef = useRef(null);
  const [navpass, setNavpass] = useState(false);

  // navlinks/tishrabon
  const navs = [
    {
      address: "/devs-insight",
      linkNameD: "> devsInsight.exe",
      linkNameL: "Dev's Insight",
    },
    {
      address: "/portfolio",
      linkNameD: "> portfolio",
      linkNameL: "Portfolio",
    },
    {
      address: "/side-skills",
      linkNameD: "> side-skills",
      linkNameL: "Side-Skills",
    },
    {
      address: "/hire-dev",
      linkNameD: "> hireDev.exe",
      linkNameL: "Hire Dev!",
    },
    {
      address: "/lets-connect",
      linkNameD: "> let's connect",
      linkNameL: "Let's Connect!",
    },
  ];

  const toggleNav = () => {
    if (!navpass) {
      setNavpass(true);
    }
  };

  const handleNav = (e) => {
    if (
      themeRef.current &&
      !themeRef.current.contains(e.target) &&
      navMenuRef.current &&
      !navMenuRef.current.contains(e.target) &&
      navMenuButtonRef.current &&
      !navMenuButtonRef.current.contains(e.target)
    ) {
      setNavpass(false);
    }
  };

  useEffect(() => {
    if (navpass) {
      document.addEventListener("mousedown", handleNav);
    } else {
      document.removeEventListener("mousedown", handleNav);
    }

    return () => document.removeEventListener("mousedown", handleNav);
  }, [navpass]);

  return (
    <div
      className={`${stick ? "headSlideDown fixed top-0" : "headSlideUp relative top-[110vh]"} ${theme === "dark" ? "bg-darkheader" : "bg-lightheader"} headContainer z-[5000] my-3 flex h-14 w-auto flex-row items-center justify-around gap-x-3 rounded-md px-3 py-1`}
      style={{
        transition: "display 1s ease-in-out", // Smooth transition for fixed header
      }}
    >
      <button
        className={`${theme === "dark" ? "bg-vsmain text-main" : "bg-vslight text-[var(--lightfont)]"} verticalC h-8 w-16 overflow-hidden rounded-md border-none text-[15px]`}
        onClick={toggleTheme}
        ref={themeRef}
        title={`${theme === "dark" ? "theme: terminal_" : "Theme: Marshmallow"}`}
      >
        {theme === "dark" ? (
          <div className="text-lg">
            {">"}<span className="jumpUnderscore10">_</span>
          </div>
        ) : (
          <div className="h-4 w-5 rounded-sm bg-slate-300"></div>
        )}
      </button>

      <div
        className={`h-auto w-[72px] cursor-pointer sm:w-20`}
        onClick={() => navigate("/")}
      >
        <img
          className={`object-fit h-full w-full object-cover`}
          src={theme === "dark" ? logoMain : logoMarsh}
          alt="tishrabon logo"
        />
      </div>

      <div className="relative">
        <button
          className={`${theme === "dark" ? (navpass ? "border border-main bg-vsmain" : "bg-vsmain") : navpass ? "border border-lightfont bg-vslight" : "bg-vslight"} verticalC h-8 w-16 cursor-pointer rounded-md p-2`}
          onClick={() => {
            setNavpass((prev) => !prev);
          }}
          ref={navMenuButtonRef}
        >
          <img
            className={`object-fit h-full w-full`}
            src={theme === "dark" ? navmenudark : navmenumarsh}
            alt=""
          />
        </button>

        {/*HIDDEN/VISIBLE NAVS*/}
        <nav
          className={`${navpass ? "show-nav" : "hidden"} ${theme === "dark" ? "bg-darknavbg" : "bg-lightnavbg"} navBar absolute right-[-12px] top-10 z-[900] mt-2 w-[248px] rounded-md p-2 pb-4 sm:top-11 sm:w-[256px]`}
          ref={navMenuRef}
        >
          <ul className={`flex flex-col gap-y-2`}>
            <p
              className={`${navpass ? "show-nav" : ""} navLinks ${theme === "dark" ? "text-[13px] text-main" : "text-[14px] text-lightfont2"} w-full text-left`}
            >
              {theme === "dark"
                ? `c:\\current\\theme> terminal_`
                : `Current Theme: Marshmallow`}
            </p>
            <p
              className={`${navpass ? "show-nav" : ""} navLinks ${theme === "dark" ? "text-[13px] text-main" : "text-[14px] text-lightfont2"} text-left`}
            >
              {theme === "dark"
                ? `devs:\\now\\localTime> 23:49`
                : `Local time: 23:42`}
            </p>
            <p
              className={`${navpass ? "show-nav" : ""} navLinks ${theme === "dark" ? "text-[13px] text-main" : "text-[14px] text-lightfont2"} mb-1 text-left`}
            >
              {theme === "dark"
                ? `devs:\\now\\status> working on upcoming projects...`
                : `Dev's Status: Working on upcoming projects...`}
            </p>

            {navs.map((link, index) => (
              <li
                className={`${navpass ? "show-nav" : ""} ${theme === "dark" ? "bg-mainbb text-vsmain" : "bg-vslight text-lightfont"} navLinks rounded-md border-none p-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
                key={index}
              >
                <NavLink
                  to={link.address}
                  className="block"
                  onClick={() => setNavpass(false)}
                >
                  {theme === "dark" ? link.linkNameD : link.linkNameL}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
