import React, { useState, useEffect, useContext, useRef } from 'react';
import { themeContext } from '../context/ThemeContext'; 

const TeaserTyping = ({texts}) => {
  const { theme } = useContext(themeContext);

  const [showtext, setShowtext] = useState("");  
  const [index, setIndex] = useState(0);
  const [sentenceIdx, setSentenceIdx] = useState(0);

  useEffect(() => {
    if (sentenceIdx < texts.length) {
      const current = texts[sentenceIdx];

      const interval = setInterval(() => {
        if (index < current.length) {
          setShowtext(prev => prev + current[index]);
          setIndex(prev => prev + 1);        
        }
        else {
          clearInterval(interval);

          setTimeout(() => {
            setIndex(0);
            setShowtext("");
            setSentenceIdx(prev => prev + 1);            
          }, 500);
        }
      }, 100)
    }

  }, [index]);



  return (
    <div>
      {showtext}
    </div>
  );
};

export default TeaserTyping;