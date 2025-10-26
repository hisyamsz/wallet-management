import * as React from "react";
import { Helmet } from "react-helmet-async";

interface PageHeadProps {
  title?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title }) => {
  return (
    <Helmet prioritizeSeoTags title={title} defaultTitle="Wallet Management">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default PageHead;
