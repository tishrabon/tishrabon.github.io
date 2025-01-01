import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

const SideSkills = () => {
  const terminalHeading = `tishrabon:\\portfolio\\sideSkills.exe`;
  const marshmallowHeading = `Side Skills`;

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

export default SideSkills;
