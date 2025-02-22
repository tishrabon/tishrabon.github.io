import React from "react";
import { Helmet } from "react-helmet";

const HelmetTag = ({ title = "tishrabon" }) => {
  return (
    <div>
      <Helmet>
        {/* Page Title & Basics */}
        <title>{`${title} - tishrabon`}</title>
        <meta name="author" content="Towhidul Islam Shrabon" />
        <meta
          name="description"
          content="I'm a frontend React developer crafting sleek, high-performance web apps. Let’s make it epic."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React Developer, Web Development, JavaScript, Portfolio, JS"
        />

        {/* og:Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="tishrabon - home" />
        <meta
          property="og:description"
          content="I'm a frontend React developer building modern, high-performance web apps. Let’s connect!"
        />
        <meta
          property="og:image"
          content="https://tishrabon.github.io/tishrabon-preview.jpg"
        />
        <meta property="og:url" content="https://tishrabon.github.io" />

        {/* og:Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="tishrabon - home" />
        <meta
          name="twitter:description"
          content="I'm a frontend React developer crafting sleek, high-performance websites. Let’s make it happen!"
        />
        <meta
          name="twitter:image"
          content="https://tishrabon.github.io/tishrabon-preview.jpg"
        />

        {/* Favicon (Optional but good for branding) */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </div>
  );
};

export default HelmetTag;
