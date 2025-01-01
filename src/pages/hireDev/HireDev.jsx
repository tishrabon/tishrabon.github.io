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
      dev/tishrabon
    </div>
  );
};

export default HireDev;
