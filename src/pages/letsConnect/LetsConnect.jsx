import React, { useState, useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import PageHeading from "../../components/PageHeading";

const LetsConnect = () => {
  const terminalHeading = `tishrabon:\\portfolio\\letsConnect.exe`;
  const marshmallowHeading = `Lets Connect`;

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

export default LetsConnect;
