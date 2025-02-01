import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

const HireDev = () => {
  const terminalHeading = `tishrabon:\\portfolio\\hireDev.exe`;
  const marshmallowHeading = `Hire Dev`;

  return (
    <div className="otherpage-container verticalS text-cente">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />



            <div
              className={`verticalS overflow-hidden p-5 text-left text-main sm:max-w-[500px] md:max-w-[700px]`}
            >
              <div className="mb-6">
                <span className="">
                  <FiCoffee size={100} />
                </span>
              </div>

              <p className="horizontalC mb-2 gap-x-2 text-center text-xl font-bold">
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
                  <span>{`tishrabon:\\home\\intro>run --bio`}</span>
                </div>
                <div className="flex flex-col items-start justify-start p-2">
                  <p>
                    {" "}
                    {`>`} {intro101}{" "}
                  </p>
                  <div>
                    <p className="text-[#5e8c01]">
                      <span className="text-main">{">"}</span> Want deeper
                      insight? Type{" "}
                      <span className="rounded-sm bg-darkbg px-1 text-base italic text-main">
                        nav --insight
                      </span>{" "}
                      command below and hit enter to learn more about me!
                    </p>

                    <div className={`${falseCmd ? "" : "hidden"}`}>
                      <span>{"> "}</span>
                      <span className="text-base text-red-600">
                        Wrong command alert! Please enter correct command!(x
                        {falseCmdCounts})
                      </span>
                    </div>
                    <div onClick={() => terminalInputRef.current.focus()}>
                      {"> "}
                      <input
                        ref={terminalInputRef}
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
              </div>
            </div>
    </div>
  );
};

export default HireDev;
