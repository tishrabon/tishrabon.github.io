// npm install photoswipe

import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const sfp01 = [
"https://i.ibb.co/mzvmk49/110-1.jpg",
"https://i.ibb.co/BPhzGjP/110-2.jpg",
"https://i.ibb.co/r5WNG9n/110-3.jpg",
"https://i.ibb.co/L0V19jS/110-4.jpg",
"https://i.ibb.co/bLC7mW6/110-5.jpg",
"https://i.ibb.co/NrMPWmv/110-6.jpg",
"https://i.ibb.co/zsBn9kv/110-7.jpg",
"https://i.ibb.co/WxvqZYB/110-8.jpg",
"https://i.ibb.co/vHpP6W3/110-9.jpg",
"https://i.ibb.co/7NPG7JL/110-10.jpg",
"https://i.ibb.co/54zKDbf/110-11.jpg",
];

const Portfolio = () => {
return (
<div className="gallery-container">
<h1 className="text-center mb-4">Image Slideshow</h1>
<Gallery>
{sfp01.map((src, index) => (
<Item
            key={index}
            original={src}
            thumbnail={src}
            width="1024"
            height="768"
          >
{({ ref, open }) => (
<img
ref={ref}
onClick={open}
src={src}
alt={`Slide ${index + 1}`}
className="cursor-pointer w-40 h-auto mx-2"
/>
)}
</Item>
))}
</Gallery>
</div>
);
};

export default Portfolio;
