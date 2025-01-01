import React, { useState, useContext, useEffect } from "react";
import { themeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

import darkmotion1 from "/tishrabon-original-codeface.svg";
import darkmotion2 from "/tishrabon-original-name.svg";
import lightmotion1 from "/tishrabon-marsh-codeface.svg";
import lightmotion2 from "/tishrabon-marsh-name.svg";

import { FiCoffee } from "react-icons/fi";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidTerminal } from "react-icons/bi";

const Home = ({ stick }) => {
  const { theme } = useContext(themeContext);
  const navigate = useNavigate();
  const [animationKey, setAnimationKey] = useState(0);
  const [falseCmd, setFalseCmd] = useState(false);
  const [falseCmdCounts, setFalseCmdCounts] = useState(0);
  const [navInsight, setNavInsight] = useState("");
  const holla = "I'm your frontend dev, Shrabon!";
  const intro101 =
    "Focused on crafting and counting every tiny aspect. Committed to perfection, Originality and the urge to make things happen aren’t just what I do—it’s who I am.";

  const toDevsInsight = () => {
    if (navInsight === "nav --insight") {
      navigate("/devs-insight");
    } else {
      setFalseCmd(true);
      setFalseCmdCounts((prev) => prev + 1);
    }
  };

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

        <div className="mb-96">
          {theme === "dark" ? (
            <div
              className={`verticalS m-5 overflow-hidden text-left text-main sm:max-w-[500px] md:max-w-[700px]`}
            >
              <div className="mb-6">
                <span className="">
                  <FiCoffee size={100} />
                </span>
              </div>

              <p className="horizontalC mb-2 gap-x-2 text-2xl font-bold">
                Hello! Good Morning..
              </p>

              <p className="mb-6 text-center text-xl font-semibold">{holla}</p>

              <div className="overflow-hidden rounded-md bg-vsmain p-1 text-lg">
                <div
                  className={`m-[-4px] flex gap-x-1 bg-main p-2 text-sm text-vsmain`}
                >
                  <span className="mt-[2px]">
                    <BiSolidTerminal />
                  </span>{" "}
                  <span>tishrabon:home\intro>run --bio</span>
                </div>
                <div className="flex flex-col items-start justify-start p-2">
                  <p> > {intro101} </p>
                  <div>
                    <p className="text-green-700">
                      > Want deeper insight? Type{" "}
                      <span className="rounded-sm bg-darkbg px-1 text-base italic text-main">
                        nav --insight
                      </span>{" "}
                      command below and hit enter to learn more about me!
                    </p>

                    <div className={`${falseCmd ? "" : "hidden"}`}>
                      <span>></span>{" "}
                      <span className="text-base text-red-600">
                        Wrong command alert! Please enter correct command!(x
                        {falseCmdCounts})
                      </span>
                    </div>
                    <div>
                      >{" "}
                      <input
                        className={`border-none bg-transparent p-0 text-inherit outline-none`}
                        style={{ width: `${Math.max(navInsight.length, 1)}ch` }}
                        type="text"
                        value={navInsight}
                        onChange={(e) => setNavInsight(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && navInsight.trim() !== "") {
                            toDevsInsight();
                          }
                        }}
                      />
                      <span className="jumpUnderscore">{"_"}</span>
                    </div>
                  </div>
                </div>
                {/*<div>kire chandu? ki koris?</div>*/}
              </div>
            </div>
          ) : (
            <div className="verticalS m-5 text-lightfont sm:max-w-[500px] md:max-w-[700px]">
              <div className="mb-6">
                <span className="">
                  <PiCoffeeFill size={100} />
                </span>
              </div>

              <p className="horizontalC mb-2 text-2xl font-bold">
                Hello! Good Morning..
              </p>

              <p className="horizontalC mb-6 text-center text-xl font-semibold">
                {holla}
              </p>

              {/*BIO*/}

              <div className="rubbertap my-10 rounded-3xl bg-vslight p-3 text-lg">
                <p>{intro101} </p>
              </div>

              <button className="rubbertap rounded-md p-2">squish!</button>

              <div className="rubbertap2 my-10 rounded-3xl bg-vslight p-3 text-lg text-lightfont2">
                <p>{intro101} </p>
              </div>

              <button className="rubbertap2 rounded-md p-2">squish2!</button>
            </div>
          )}
          {/*DARK INTRO*/}

          {/*  <div>
            brief bio about me
          </div>

          <div>
            cta
          </div>*/}
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
