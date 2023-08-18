import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, author,keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default SEO;
