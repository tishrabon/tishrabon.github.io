"Bringing Designs to Life. Delivering Excellence. Ending Your Search."


"Looking for a Frontend Developer? Your search ends here."

"Looking for a Frontend Developer? Let’s make it happen."

Looking for a Frontend Developer? Your search ends here.
Lets make it happen. 
Lets Make it epic



import React, { useState, useEffect, useContext } from 'react';
import { themeContext } from '../context/ThemeContext';

const TypingEffect = ({ texts }) => {
  const { theme } = useContext(themeContext);

  const [showText, setShowText] = useState(""); // To show the typed text
  const [index, setIndex] = useState(0); // To track the character position
  const [sentenceIndex, setSentenceIndex] = useState(0); // To track the current sentence

  useEffect(() => {
    if (sentenceIndex < texts.length) {
      const currentSentence = texts[sentenceIndex];

      // Create a typing effect for each sentence
      const interval = setInterval(() => {
        if (index < currentSentence.length) {
          setShowText((prev) => prev + currentSentence[index]); // Append character
          setIndex((prev) => prev + 1); // Move to the next character
        } else {
          clearInterval(interval); // Stop once sentence is typed
          setTimeout(() => {
            setIndex(0); // Reset index for the next sentence
            setShowText(""); // Clear the current sentence
            setSentenceIndex((prev) => prev + 1); // Move to the next sentence
          }, 1000); // Wait 1 second before typing the next sentence
        }
      }, 100); // Typing speed: 100ms per character

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [index, sentenceIndex, texts]); // Run effect when `index` or `sentenceIndex` changes

  return <div>{showText}</div>;
};

export default TypingEffect;


- - - - - - -

import { useState, useEffect } from 'react';

const SequentialTyping = () => {
  const teaser = [
    "Looking for a Frontend Dev? Your search ends here.",
    "Lets make it happen.",
    "Lets Make it epic"
  ];
  
  const [lines, setLines] = useState(['', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= teaser.length) return;

    const timeout = setTimeout(() => {
      if (currentChar < teaser[currentLine].length) {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = teaser[currentLine].substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      } else {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  return (
    <div className="space-y-4">
      {lines.map((line, index) => (
        <div key={index} className="text-2xl font-bold">
          {line}
          {currentLine === index && 
            <span className="inline-block w-[2px] h-6 bg-black ml-1 animate-pulse" />
          }
        </div>
      ))}
    </div>
  );
};

export default SequentialTyping;


-_--------_


{teaser.map((_, index) => (
  <div key={index} className="text-2xl font-bold">
    {lines[index] || ''}
    {currentLine === index && 
      <span className="inline-block w-[2px] h-6 bg-black ml-1 animate-pulse" />
    }
  </div>
))}






------



        <div className="flex justify-start items-end">
          <div>
            {lines && lines.length <= teaser.length && lines.map((line, index) => (
              <div key={index} className={`w-[300px] p-2 text-[16px] text-left`}>
                {line} 
                {(index === lines.filter(l => l).length - 1) && <span className="jumpUnderscore">_</span>}           
             
              </div>
            ))}            
          </div>
          {/*<span className={`jumpUnderscore`}>_</span>          */}
        </div>


