import React, { Fragment } from "react";
import { Heading, Divider } from "@theme-ui/components";

import Seo from "../components/Seo";
import { useConfig } from "../utils/useConfig";

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { name, description, keywords, siteUrl, siteImage, lang },
    },
  } = useConfig();

  return (
    <Fragment>
      <Seo
        type="website"
        title={name}
        titleTemplate=""
        keywords={keywords}
        description={description}
        siteUrl={siteUrl}
        siteImage={siteImage}
        lang={lang}
      />
      <Heading as="h1" variant="styles.h1">
        Faanus{" "}
        <span role="img" aria-label="wave">
          ⚗️
        </span>
      </Heading>
      <Divider />
      <Heading as="h4" variant="styles.h4">
        Ask your any question to your friends!
      </Heading>
      <Divider />
    </Fragment>
  );
};

export default IndexPage;
