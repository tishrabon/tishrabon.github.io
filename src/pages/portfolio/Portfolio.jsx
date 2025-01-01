import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

const Portfolio = () => {
  const terminalHeading = `tishrabon:\\portfolio\\portfolio.exe`;
  const marshmallowHeading = `Portfolio`;

  return (
    <div className="otherpage-container verticalS text-cente">
      <PageHeading
        terminal={terminalHeading}
        marshmallow={marshmallowHeading}
      />
      dev/tishrabon
    </div>
  );
};

export default Portfolio;
