import React from "react";
import Highlight from "react-highlight";
import { useBemCss } from "use-bem-css";
import { codeSnippets } from "./CodeSnippets";

const App = () => {
  const code = codeSnippets();

  const { main } = useBemCss({
    className: "main",
    blocks: ["main"],
    elements: [],
  });

  const { hero, heroSmall, heroTitle } = useBemCss({
    className: "hero",
    blocks: ["hero"],
    elements: ["title", "small"],
  });

  const { usage, usageCode, usageTitle } = useBemCss({
    className: "usage",
    blocks: ["usage"],
    elements: ["title", "code"],
  });

  const { about, aboutLink } = useBemCss({
    className: "about",
    blocks: ["about"],
    elements: ["link"],
  });

  const thing = Math.random() < 0.01 ? "bbb" : undefined;

  return (
    <main className={main}>
      <div className={hero}>
        <h1 className={heroTitle}>use-bem-css</h1>
        <small className={heroSmall}>
          A small helper hook to create and maintain BEM styled css classes
        </small>
      </div>

      <div className={usage}>
        <h3 className={usageTitle}>How to use?</h3>
        <div className={usageCode}>
          <Highlight className="jsx">{code.basicUsage}</Highlight>
        </div>
      </div>

      <div className={about}>
        For more information visit the
        <a
          className={aboutLink}
          href="https://github.com/shinspiegel/use-bem-css"
          target="_blank"
          rel="noreferrer noopener"
        >
          github page
        </a>
        .
      </div>
    </main>
  );
};
export default App;
