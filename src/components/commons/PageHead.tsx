import * as React from "react";

interface PageHeadProps {
  title: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title }) => {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
  );
};

export default PageHead;
