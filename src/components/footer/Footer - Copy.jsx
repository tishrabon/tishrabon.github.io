import React, { useState, useContext } from 'react';
import { themeContext } from '../../context/ThemeContext'

const Footer = () => {  
const { theme } = useContext(themeContext);

  return (
    <div className={`${theme === "dark" ? "bg-darknavbg" : "bg-lightnavbg"} frostglass w-full rounded-tl-[16px] rounded-tr-[16px] max-w-[800px] px-10 min-h-[30vh] verticalS`}      
      id="footer"
    >
      {/*MAIN CONTAINER*/}
      <div>
        
      </div>
    </div>
  );
};

export default Footer;


{/*<div className="relative">
  <div className="absolute">
    
  </div>
</div>*/}