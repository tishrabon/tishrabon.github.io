import React, { useState, useEffect, useContext, useRef } from 'react';
import { themeContext } from '../context/ThemeContext'; 

const TypingEffect = ({text}) => {
  const { theme } = useContext(themeContext);

  const [showtext, setShowtext] = useState("");
  // const [index, setIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {    

    const interval = setInterval(() => {
      if (index < text.length) {
        setShowtext(prev => prev + text[index]);
        setIndex(prev => prev + 1);
        console.log(text[index]);
      }      
    }, 100);

    console.log("ki holo")
    return () => clearInterval(interval);
  }, [index])

  return (
    <div>
      {showtext}
    </div>
  );
};

export default TypingEffect;