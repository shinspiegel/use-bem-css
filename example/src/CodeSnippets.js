export const codeSnippets = () => {
  const basicUsage = `
  const App = () => {
    const { button, buttonInput, buttonLabel, buttonSpan } = useBemCss({
      className: "button",
      blocks: ["button"],
      elements: ["label", "input", "span"],
    });
  
    return (
      <div className={button}>
        <label className={buttonLabel}>
          <span className={buttonSpan}>Label Text</span>
          <button type="button" className={buttonInput}>
            Info
          </button>
        </label>
      </div>
    );
  };`;

  return { basicUsage };
};
