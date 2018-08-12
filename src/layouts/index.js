import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
import "code-mirror-themes/themes/monokai.css";
import "./index.css";

const Header = () => (
  <div className="navbar navbar-light gradient">
    <Link to="/" className="navbar-brand">
      Complete Intro to React v4
    </Link>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Complete Intro to React v4"
      meta={[
        {
          name: "description",
          content:
            "Learn React! This course will teach everything you need to get up and running in React: how to write React, how to build apps, how to build projects, and all the other tools you'll need!"
        },
        {
          name: "keywords",
          content:
            "computer science, javascript, css, html, web, web developer, web dev, cloud, node, node.js, react, reactjs, redux, parcljs, typescript"
        }
      ]}
    />
    <Header />
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
