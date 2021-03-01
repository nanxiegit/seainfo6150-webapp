import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
      <header>
        <h1>You can take a pie on a plane</h1>
        <address>
          by Cathryn Lindsey (
          <a href="mailto:cathryn.lindsey@nytimes.com">cathryn.lindsey@nytimes.com</a>)
          <br />
        </address>
        <time datetime="2018-11-21 14:57:55">November 21st 2018, 2:57 pm </time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
