import React from "react";
import Link from "gatsby-link";

import { HomeIcon } from "../components/icons";
import { Paper, ParagraphAlignedToRight } from "../components/content";

export default () => (
  <Paper>
    <section>
      <h1>No lambdas here...</h1>
      <p><em>Okay</em>, there is one: <strong>&lambda;</strong> - just for you!</p>
      <p>If you looked for something, and you have not found it - <Link to={`/#contact`}>let us know.</Link></p>
      <ParagraphAlignedToRight>Now let&#39;s go <Link to={`/`}>back</Link>. <HomeIcon /></ParagraphAlignedToRight>
    </section>
  </Paper>
);
