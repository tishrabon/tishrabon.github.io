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
  const theChuckNorris = [
    `Chuck Norris doesn’t write code. He tells the computer what to do, and the computer does it out of fear. ~ Just a little fun. Chuck Norris might've chuckled.`,

    `Chuck Norris doesn’t use version control. He simply types 'git push' and the code is pushed into perfection. ~ Just a bit of humor. If Chuck Norris laughed, it would be legendary.`,

    `Chuck Norris doesn’t need to optimize his code. His code optimizes itself out of fear of disappointing him. ~ Just a joke, but Chuck Norris would say, ‘It’s not bad.’`,

    `Chuck Norris doesn’t need a coffee break. His sheer presence makes the coffee wake up on its own. ~ Just some fun. Chuck Norris approves, and that’s all that matters.`,

    `Chuck Norris once completed a project in a day... and then rewrote it in a single line of code, just to show off. ~ Just a bit of fun. If Chuck Norris had a sense of humor, this would be it.`,

    `Chuck Norris doesn’t need a debugger. His code works the first time. Every time. ~ Just a bit of fun. Chuck Norris doesn’t laugh, but this would make him nod.`,

    `Why did Chuck Norris become a recruiter? Because when he says, 'You’re hired,' there’s no arguing. ~ Just a joke, but Chuck Norris would say, ‘It’s not bad.’`,

    `Chuck Norris doesn’t need a keyboard. He just looks at the screen, and the code writes itself. ~ Just some fun. Chuck Norris approves, and that’s all that matters.`,

    `Chuck Norris doesn’t need a meeting. When he shows up, everyone already knows the agenda. ~ Just a bit of fun. Chuck Norris doesn’t laugh, but this would make him nod.`,

    `Chuck Norris doesn’t need to check his emails. The emails check themselves for fear of missing his response. ~ Just a bit of humor. If Chuck Norris laughed, it would be legendary.`,

    `Chuck Norris doesn't need a password manager. He just stares at his passwords, and they remember themselves. ~ Just a joke, but Chuck Norris would say, ‘It’s not bad.’`,

    `Chuck Norris doesn’t need a code review. The code reviews itself to make sure it’s worthy of his attention. ~ Just a little fun. Chuck Norris might've chuckled.`,

    `Chuck Norris can debug his code by simply looking at it. The bugs fix themselves out of fear. ~ Just a bit of fun. If Chuck Norris had a sense of humor, this would be it.`,

    `Chuck Norris doesn’t need a break. The break takes a break when he’s around. ~ Just a bit of fun. Chuck Norris doesn’t laugh, but this would make him nod.`,

    `Chuck Norris doesn’t need a code editor. His mind auto-corrects every line before it even exists. ~ Just some fun. Chuck Norris approves, and that’s all that matters.`,

    `Chuck Norris doesn’t need a programming language. The code understands his thoughts without words. ~ Just a bit of humor. If Chuck Norris laughed, it would be legendary.`,

    `Chuck Norris doesn’t use a VPN. The internet is always safe when he’s browsing. ~ Just a little fun. Chuck Norris might've chuckled.`,
  ];

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
        let temp = `I’m genuinely thrilled you’ve explored my work this far, it means a lot! If the process wasn’t exactly what you were hoping for, I’d love to hear your thoughts on alternatives. Feel free to reach out at tishrabon.official@gmail.com, or maybe connect on LinkedIn: linkedin.com/in/tishrabon or X/twitter @tishrabon to keep the conversation going! I’d be honored to keep the conversation going and explore future opportunities together!`;
        setStack([...stack, temp]);
      } else if (found.type === "teabreak") {
        let tempTea =
          theChuckNorris[Math.floor(Math.random() * theChuckNorris.length)];
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
            {/*<span className="jumpUnderscore">{"_"}</span>*/}
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
