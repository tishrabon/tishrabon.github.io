import React, { useState, useContext, useEffect } from "react";
import { themeContext } from "../../context/ThemeContext";

import darkmotion1 from "/tishrabon-original-codeface.svg";
import darkmotion2 from "/tishrabon-original-name.svg";
import lightmotion1 from "/tishrabon-marsh-codeface.svg";
import lightmotion2 from "/tishrabon-marsh-name.svg";

const Home = ({ stick }) => {
  const { theme } = useContext(themeContext);
  const [animationKey, setAnimationKey] = useState(0);

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
      {/*logo-animation / hero */}
      <div
        className="hero-section verticalS mb-[200px] mt-[-70px] h-[100vh] rounded-md border"
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

        <div className="kire">kire ki koris</div>
      </div>

      <div
        className={`${stick ? "block" : "hidden"} w-full] top-[110vh] h-[72px]`}
      ></div>

      {/*HOME CONTENTS START HERE*/}
      <div className="home-contents verticalS relative top-0">
        {/*billboard here yall*/}
        <p
          className={`w-[300px] rounded-md p-2 ${theme === "dark" ? "darkshadow bg-mainbb text-vsmain" : "lightshadow bg-vslight text-lightfont"}`}
        >
          tishrabon here
        </p>

        {/*table box here yall*/}
        <div
          className={`my-5 h-auto w-[320px] overflow-hidden rounded-md ${theme === "dark" ? "darkshadow bg-[var(--vsmain)]" : "lightshadow bg-white"}`}
        >
          <div
            className={`overflow-hidden p-2 ${theme === "dark" ? "bg-[var(--mainbb)] text-[var(--vsmain)]" : "m-1 rounded-md bg-[var(--lightbb)] text-[var(--lightfont)]"} `}
          >
            testing heading
          </div>

          <p className="my-2 p-2 text-left">
            tishrabon here! this is just a sample text since it's in development
            stage. so hold on, and drink tea. ting goes skrrrhhh...
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500">kire</div>
      </div>
    </div>
  );
};

export default Home;
