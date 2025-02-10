import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { themeContext } from "../../context/ThemeContext";

import { FaqData } from "./FaqData";
import { TfiThought } from "react-icons/tfi";
import {
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BiSolidTerminal } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";

const FaqTerminal = () => {
  const demo = `[ans to q1] I approach app development from multiple perspectives. I think about how users' needs evolve over time, what they want now, how they’ve changed, how they’ll change in the future, Whether it’s a long-term or short-term project, I might keep users' expectations low with high satisfaction, so that later I can drop an exclusive feature that will blow their minds. This kind of vision shapes both my design and programming work. I'm not just a programmer. I'm a package of solid coding skills and long-term vision with a strategic mindset`;

  const navigate = useNavigate();
  const { toggleTheme } = useContext(themeContext);

  const initMsg = `kire chandu??`;
  const [stack, setStack] = useState([]);
  const [inputs, setInputs] = useState("");
  const inputRef = useRef(null);

  // THE TERMINAL METHOD
  const exeCommand = (cmd) => {
    const found = FaqData.find((data) => data.getCmd === cmd);

    if (found) {
      if (found.type === "qna") {
        let qnaResult = found.label + " " + found.answer;
        setStack([...stack, qnaResult]);
      } else if (found.type === "clearStack") {
        setStack([]);
      } else if (found.type === "heydev") {
        let knowMore = found.answer;
        setStack([...stack, knowMore]);
      } else if (found.type === "navinsight") {
        navigate("/devs-insight");
      } else if (found.type === "switchtheme") {
        toggleTheme();
      } else if (found.type === "opalt") {
        let temp = `I'm sorry that you didn't like this process. How can I make it better? I would deeply appreciate your feedback! You can also switch to Marshmallow Mode—it's designed to be effortless and smooth.`;
        setStack([...stack, temp]);
      } else if (found.type === "teabreak") {
        let tempTea = `This is a fun goal made to bring a smile to your face. Not done yet, working on it...`;
        setStack([...stack, tempTea]);
      } else {
        setStack([...stack, "Sorry! Try again!"]);
      }
    } else {
      setStack([...stack, "false command! false command!"]);
    }

    setInputs("");
  };

  return (
    <div className={`verticalS mt-5 gap-10`}>
      {/*INTRO/BANNER*/}
      <div className={`verticalC max-w-[600px]`}>
        <TfiThought size={100} className={`mb-2 text-vsmain`} />
        <p className={`my-2 text-2xl`}>Got Questions?</p>
        <p className={`mb-2 text-lg`}>
          Browse Below, You Might Find the Answer You’re Looking For!
        </p>
      </div>

      {/*INSTRUCTION*/}
      <div className={`verticalC max-w-[700px] gap-5 rounded-md bg-vsmain p-5`}>
        <IoIosInformationCircle size={50} />
        <div>
          Here’s the list of questions. Each one has a specific command, run it
          in the terminal below to get the answer.
        </div>
        <FaChevronDown />
      </div>

      {/*QUESTION LISTS/COMMANDS*/}
      <div className={`verticalS gap-5`}>
        {FaqData.map(
          (qna, index) =>
            qna.type === "qna" && (
              <div key={qna.id} className={`terminalbutton rounded-md p-2`}>
                <p>
                  {index + 1}. {qna.question}{" "}
                  <span className="whitespace-nowrap rounded-sm bg-vsmain px-2">
                    {qna.getCmd}
                  </span>
                </p>
              </div>
            ),
        )}
      </div>

      {/*THE TERMINAL*/}
      <div
        className={`w-full max-w-[700px] overflow-hidden rounded-[5px] bg-vsmain text-left`}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <div
          className={`horizontalS gap-1 bg-main p-2 text-[13px] text-vsmain`}
        >
          <BiSolidTerminal className="mb-[2px]" />
          <span>{`tishrabon:\\faqs\\terminal.exe`}</span>
        </div>

        <div className={`h-[50vh] overflow-y-auto px-1 py-2 text-[15px]`}>
          <div className={`flex items-start justify-start gap-1`}>
            <span>{"> "}</span>
            <div>
              <span>{" run "}</span>
              <span className="whitespace-nowrap rounded-sm bg-gray-700 px-1">
                cls
              </span>
              <span>{" to clear output & "}</span>
              <span className="whitespace-nowrap rounded-sm bg-gray-700 px-1">
                hey dev
              </span>
              <span>{" to know more"}</span>
            </div>
          </div>

          {/*TERMINAL DISPLAY/output*/}
          <div className={`${stack.length !== 0 ? "" : "hidden"}`}>
            <div className={`flex flex-col items-start justify-start`}>
              {stack.map((output, index) => (
                <div key={index} className={`horizontalUp gap-1`}>
                  <p className="">{">"}</p>
                  <div className="">{output}</div>
                </div>
              ))}
            </div>
          </div>

          {/*INPUT SECTION*/}
          <div className={`flex flex-row items-start justify-start gap-1`}>
            <span>{">"}</span>
            <input
              type="text"
              ref={inputRef}
              className={`border-none bg-transparent p-0 text-inherit outline-none`}
              style={{ width: `${Math.max(inputs.length, 1)}ch` }}
              value={inputs}
              onChange={(e) => setInputs(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputs.trim() !== "") {
                  exeCommand(inputs);
                }
              }}
            />
            <span className="jumpUnderscore">{"_"}</span>
          </div>
        </div>
      </div>

      <div className={`verticalS max-w-[700px] gap-3 text-sm`}>
        <HiLightBulb size={30} className="" />

        <p>
          If you are not comfortable with this process then you can switch theme
          to Marshmallow, it's designed to be effortless and smooth. (Click the
          left button in the header to switch theme)
        </p>
      </div>
    </div>
  );
};

export default FaqTerminal;
