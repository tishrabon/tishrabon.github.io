import React, { useState } from "react";
import { FaqData } from "./FaqData";
import { TfiThought } from "react-icons/tfi";
import {
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";

const FaqMarshmallow = () => {
  const [viewAns, setViewAns] = useState([]);

  return (
    <div className={`verticalS mt-5 gap-10`}>
      {/*INTRO/BANNER*/}
      <div className={`verticalC max-w-[600px]`}>
        <TfiThought size={100} className={`mb-2 text-lightmain`} />
        <p className={`my-2 text-2xl`}>Got Questions?</p>
        <p className={`mb-2 text-lg`}>
          Browse Below, You Might Find the Answer You’re Looking For!
        </p>
      </div>

      {/*INSTRUCTION*/}
      <div
        className={`verticalC rubbertapRev max-w-[700px] gap-5 rounded-[10px] p-5`}
      >
        <IoIosInformationCircle size={50} className="text-lightmain" />
        <div>Here’s the list of questions. Click them to view the answers.</div>
        <FaChevronDown className="text-lightmain" />
      </div>

      {/*QUESTION LISTS/ANS*/}
      <div className={`verticalS gap-5`}>
        {FaqData.map(
          (qna, index) =>
            qna.type === "qna" && (
              <div
                key={qna.id}
                className={`rubberbutton cursor-help rounded-md p-2`}
                onClick={() => {
                  if (!viewAns.includes(qna.id)) {
                    setViewAns([...viewAns, qna.id]);
                  } else {
                    setViewAns(viewAns.filter((id) => id !== qna.id));
                  }
                }}
              >
                <div>
                  {index + 1}. {qna.question}{" "}
                </div>

                <div
                  className={`${viewAns.includes(qna.id) ? "" : "hidden"} mx-1 mt-2 border-t py-2`}
                >
                  Answer: {qna.answer}
                </div>
              </div>
            ),
        )}
      </div>

      {/*THE EPILOGUE*/}
      <div className={`verticalS max-w-[700px] gap-3 text-sm`}>
        <RiLightbulbFlashFill size={30} className="text-light" />
        <p>
          If you're up for a different experience, switch to terminal mode, my
          personal favorite, built the way I like it. (Click the left button in
          the header to switch.)
        </p>
      </div>
    </div>
  );
};

export default FaqMarshmallow;
