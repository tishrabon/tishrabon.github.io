import React, { useState, useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const PageHeading = ({ terminal, marshmallow }) => {
  const { theme } = useContext(themeContext);

  return (
    <div className="w-full">
      {theme === "dark" ? (
        <div className="mb-5 rounded-md bg-vsmain px-2 py-2 pb-6 text-left sm:text-lg">
          {terminal}
        </div>
      ) : (
        <div
          className={`rubbertapRev mb-10 rounded-[20px] p-5 text-center text-3xl`}
        >
          {marshmallow}
        </div>
      )}
    </div>
  );
};

export default PageHeading;
