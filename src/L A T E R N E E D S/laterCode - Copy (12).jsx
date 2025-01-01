import React, { useState, useContext, useEffect } from "react";
import { themeContext } from "../../context/ThemeContext";

import darkmotion1 from "/tishrabon-original-codeface.svg";
import darkmotion2 from "/tishrabon-original-name.svg";
import lightmotion1 from "/tishrabon-marsh-codeface.svg";
import lightmotion2 from "/tishrabon-marsh-name.svg";

import { FiCoffee } from "react-icons/fi";

const Home = ({ stick }) => {
  const { theme } = useContext(themeContext);
  const [animationKey, setAnimationKey] = useState(0);
  const tishrabonBio = "";
  const intro101 =
    "I design and develop sleek, interactive websites with seamless deliverance and a focus on smooth user experiences. Whether it’s a terminal-inspired theme or soft marshmallow aesthetics, I make sure everything clicks.";

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [theme]);

  return (
    <div
      className={`home-container verticalS min-gap-y-5 mb-[500px] text-center`}
      style={{
        marginTop: stick ? "-30px" : "0",
        transition: "margin-top 1s ease",
      }}
    >
      {/*LOGO ANIMATION / HERO */}
      <div
        className="hero-section verticalS mb-[200px] mt-[-70px] h-[100vh] rounded-md border-none"
        key={animationKey}
      >
        <div className="verticalC relative h-[250px] w-[300px]">
          <img
            className={`${theme === "dark" ? "darkshadow" : "lightshadow"} logo-part right rounded-[11px]`}
            src={theme === "dark" ? darkmotion1 : lightmotion1}
            alt=""
          />

          <img
            className={`logo-part left px-2`}
            src={theme === "dark" ? darkmotion2 : lightmotion2}
            alt=""
          />
        </div>

        <div className="hero-trigger">
          Hey! Looking for a fresh creative talented frontend developer who you
          can trust? Great! You are in the right place! Scroll below mate...
        </div>
      </div>

      {/*PLACE HOLDER FOR HEADER*/}
      <div
        className={`${stick ? "block" : "hidden"} w-full] top-[110vh] h-[72px]`}
      ></div>

      {/*HOME CONTENTS START HERE */}
      <div className="home-contents verticalS relative top-0">
        {/* BIO, TEASE/ABOUT, CTAs  */}

        <div>
          <div
            className={`${theme === "dark" ? "bg-vsmain" : "bg-vslight"} m-5 overflow-hidden rounded-md p-1 text-left text-lg sm:max-w-[500px] md:max-w-[700px]`}
          >
            <div
              className={`${theme === "dark" ? "bg-main text-vsmain" : "bg-lightbb2 text-center text-2xl text-lightfont"} m-[-4px] p-2 text-base`}
            >
              {theme === "dark" ? (
                "devs:home\\intro>"
              ) : (
                <div className="horizontalC h-10 gap-x-2 text-2xl font-bold">
                  Good Morning <FiCoffee />
                </div>
              )}
            </div>

            <div className="m-2 flex flex-col items-start justify-start">
              <p
                className={`${theme === "dark" ? "" : "w-full text-center text-2xl"}`}
              >
                Hello! I'm Shrabon
              </p>
              <p>{intro101}</p>
            </div>
          </div>

          <div>brief bio about me</div>

          <div>cta</div>
        </div>

        {/* SKILLS/TOOLS */}

        <div>skills/tools/cta</div>

        {/* TEASE/WORK  */}

        <div>teaser/work/cta</div>

        {/* BRIEF REMINDER/CONTACT/INDICATION/HIREME  */}

        <div>hireme/contact/cta</div>
      </div>
    </div>
  );
};

export default Home;
