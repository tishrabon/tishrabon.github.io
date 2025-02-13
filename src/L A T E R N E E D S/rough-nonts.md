// CustomHelmet.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title, description, robotsContent }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robotsContent && <meta name="robots" content={robotsContent} />}
    </Helmet>
  );
};

export default CustomHelmet;



// AnyPage.jsx
import React from 'react';
import CustomHelmet from './CustomHelmet';

const AnyPage = () => {
  return (
    <div>
      <CustomHelmet 
        title="Custom Page Title" 
        description="This is a custom description for the page."
        robotsContent="noindex, follow" // Optional
      />
      <h1>Welcome to My Page</h1>
      <p>This is a great page!</p>
    </div>
  );
};

export default AnyPage;


<Helmet>
  <meta property="og:title" content="Your Page Title" />
  <meta property="og:description" content="Description of your page for social media." />
  <meta property="og:image" content="URL to your image" />
  <meta name="twitter:card" content="summary" />
</Helmet>
