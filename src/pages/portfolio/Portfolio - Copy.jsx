import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

const Portfolio = () => {
  const terminalHeading = `tishrabon:\\portfolio\\portfolio.exe`;
  const marshmallowHeading = `Portfolio`;
  const sfp01 = [
    "https://i.ibb.co.com/mzvmk49/110-1.jpg",
    "https://i.ibb.co.com/BPhzGjP/110-2.jpg",
    "https://i.ibb.co.com/r5WNG9n/110-3.jpg",
    "https://i.ibb.co.com/L0V19jS/110-4.jpg",
    "https://i.ibb.co.com/bLC7mW6/110-5.jpg",
    "https://i.ibb.co.com/NrMPWmv/110-6.jpg",
    "https://i.ibb.co.com/zsBn9kv/110-7.jpg",
    "https://i.ibb.co.com/WxvqZYB/110-8.jpg",
    "https://i.ibb.co.com/vHpP6W3/110-9.jpg",
    "https://i.ibb.co.com/7NPG7JL/110-10.jpg",
    "https://i.ibb.co.com/54zKDbf/110-11.jpg",
  ];

  const [toggleLB, setToggleLB] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = (currentIndex + 1) % sfp01.length;
  const prevIndex = (currentIndex + sfp01.length - 1) % sfp01.length;

  console.log(sfp01, currentIndex);

  return (
    <div className="otherpage-container verticalS gap-5 text-center">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />

      <button onClick={() => setToggleLB((prev) => !prev)}>Kire</button>

      {toggleLB ? "Yoyoma" : "Puckyou"}
    </div>
  );
};

export default Portfolio;
