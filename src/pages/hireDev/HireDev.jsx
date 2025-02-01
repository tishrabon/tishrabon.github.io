import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

const HireDev = () => {
  const terminalHeading = `tishrabon:\\portfolio\\hireDev.exe`;
  const marshmallowHeading = `Hire Dev`;

  const sample = `In an ecosystem with more limited factors, I’ve developed a level of quality, ambition, vision, and drive that’s rare. You’re getting someone with a rare mindset, vision, and resilience who stands out no matter where you're looking. Give me the opportunity to grow and go further, before someone else does, and I’ll show you why I’m worth the investment.`

const sample2 = `In my early university semesters, while most struggled with core programming in C, I found it exciting and intuitive. Once, I even scored the highest in a semester final without studying at all the night before. Currently focused on frontend development, I aim to become a full-stack developer and plan to revisit problem-solving once I land a job. In short, I love programming!`;

  return (
    <div className="otherpage-container verticalS text-cente">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />



      <div
        className={`verticalS overflow-hidden p-5 text-left text-main w-full sm:max-w-[500px] md:max-w-[700px] gap-10`}
      >

        {/*one*/}
        <div className="overflow-hidden rounded-md bg-vsmain p-1 w-full">
          <div
            className={`m-[-4px] flex gap-x-1 bg-main p-2 text-sm text-vsmain`}
          >
            <span className="mt-[2px]">
              {/*<BiSolidTerminal />*/}
            </span>{" "}
            <span>{`tishrabon:\\home\\intro>run --bio`}</span>
          </div>

          <div className="flex flex-col items-start justify-start p-2">
            <p>
              {" "}
              {`>`} {sample}{" "}
            </p>
          </div>
        </div>

        {/*two*/}
        <div className="overflow-hidden rounded-md bg-vsmain p-1 w-full">
          <div
            className={`m-[-4px] flex gap-x-1 bg-main p-2 text-sm text-vsmain`}
          >
            <span className="mt-[2px]">
              {/*<BiSolidTerminal />*/}
            </span>{" "}
            <span>{`tishrabon:\\home\\intro>run --bio`}</span>
          </div>

          <div className="flex flex-col items-start justify-start p-2">
            <p>
              {" "}
              {`>`} {sample2}{" "}
            </p>
          </div>
        </div>


      </div>

    </div>
  );
};

export default HireDev;
