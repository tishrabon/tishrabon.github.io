import React, { useState } from 'react';
import { FaqData } from "./FaqData";
import { TfiThought } from "react-icons/tfi";
import { IoIosInformationCircle, IoIosInformationCircleOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BiSolidTerminal } from "react-icons/bi";


const FaqTerminal = () => {
  const demo = `[ans to q1] I approach app development from multiple perspectives. I think about how users' needs evolve over time, what they want now, how they’ve changed, how they’ll change in the future, Whether it’s a long-term or short-term project, I might keep users' expectations low with high satisfaction, so that later I can drop an exclusive feature that will blow their minds. This kind of vision shapes both my design and programming work. I'm not just a programmer. I'm a package of solid coding skills and long-term vision with a strategic mindset`

  const [stack, setStack] = useState([]);


  return (
    <div className={`verticalS gap-10 mt-5`}>

      {/*INTRO/BANNER*/}
      <div className={`verticalC max-w-[600px]`}>
        <TfiThought size={100} className={`text-vsmain mb-2`}/>
        <p className={`text-2xl my-2`}>
          Got Questions?
        </p>
        <p className={`text-lg mb-2`}>Browse Below, You Might Find the Answer You’re Looking For!</p>
      </div>

      {/*INSTRUCTION*/}
      <div className={`p-5 max-w-[700px] bg-vsmain verticalC gap-5 rounded-md`}>
        <IoIosInformationCircle size={50} />
        <div>
          Here’s the list of questions. Each one has a specific command, run it in the terminal below to get the answer.
        </div>
        <FaChevronDown />
      </div>

      {/*QUESTION LISTS/COMMANDS*/}
      <div className={`verticalS gap-5`}>
        {FaqData.map((qna, index) => (
          <div key={qna.getCmd} className={`p-2 rounded-md terminaltap`}>
            <p>
              {index+1} {qna.question} <span className="rounded-sm bg-vsmain px-2 whitespace-nowrap">{qna.getCmd}</span>
            </p>
        {/*    <p>
              {"Answer: Command"} <span className="rounded-sm bg-vsmain px-1">{qna.getCmd}</span>
            </p>*/}
          </div>
        ))}
      </div>

      {/*THE TERMINAL*/}
      <div className={`bg-vsmain rounded-[5px] w-full text-left overflow-hidden`}>

        <div className={`p-2 bg-main text-vsmain text-[13px] horizontalS gap-1`}>
          <BiSolidTerminal className="mb-[2px]"/>
          <span>{`tishrabon:\\faqs\\terminal.exe`}</span>          
        </div>

        <div className={`px-1 py-2 text-[15px] h-[50vh] overflow-y-auto`}>
          {">"} {demo}
        </div>


      </div>
      
    </div>
  );
};

export default FaqTerminal;