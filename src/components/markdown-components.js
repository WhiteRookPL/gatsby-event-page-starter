import React from "react";
import RehypeReact from "rehype-react";

import { Col, Grid, Row } from "react-flexbox-grid";

import { HomeIcon } from "./icons";
import { EventDetails } from "./event-details";
import { ContactForm } from "./forms";

const components = {
  "col": Col,
  "grid": Grid,
  "row": Row,

  "event-details": EventDetails,
  "contact-form": ContactForm,

  "home-icon": HomeIcon,
};

export const renderAst = new RehypeReact({ createElement: React.createElement, components }).Compiler;
