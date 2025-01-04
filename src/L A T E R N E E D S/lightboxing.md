npm install react-image-lightbox
// npm install react-image-lightbox/style.css

import { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

export default function App() {
const [isOpen, setIsOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

const images = [
"https://via.placeholder.com/300/FF0000",
"https://via.placeholder.com/300/00FF00",
"https://via.placeholder.com/300/0000FF",
];

const nextIndex = (currentIndex + 1) % images.length;
const prevIndex = (currentIndex + images.length - 1) % images.length;

return (
<div className="p-4">
<img
src={images[0]}
alt="Thumbnail"
className="cursor-pointer"
onClick={() => setIsOpen(true)}
/>
{isOpen && (
<Lightbox
mainSrc={images[currentIndex]}
nextSrc={images[nextIndex]}
prevSrc={images[prevIndex]}
onCloseRequest={() => setIsOpen(false)}
onMovePrevRequest={() => setCurrentIndex(prevIndex)}
onMoveNextRequest={() => setCurrentIndex(nextIndex)}
/>
)}
</div>
);
}

- X X X X X X X X X X X X -
- X X X X X X X X X X X X -

import React, { useState } from 'react';
import Lightbox from 'react-images';

const Gallery = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const [isOpen, setIsOpen] = useState(false);

const images = [
{ src: 'image1.jpg' },
{ src: 'image2.jpg' },
{ src: 'image3.jpg' },
];

const nextIndex = (currentIndex + 1) % images.length;
const prevIndex = (currentIndex + images.length - 1) % images.length;

return (
<div>
<button onClick={() => setIsOpen(true)}>Open Lightbox</button>

      {isOpen && (
        <Lightbox
          currentImage={currentIndex}
          images={images}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onClickPrev={() => setCurrentIndex(prevIndex)}
          onClickNext={() => setCurrentIndex(nextIndex)}
        />
      )}
    </div>

);
};

export default Gallery;
