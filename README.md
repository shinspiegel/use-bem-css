# use-bem-css

> A hook to generate BEM styled string to use on `classNames` for react components

[![NPM](https://img.shields.io/npm/v/use-bem-css.svg)](https://www.npmjs.com/package/@shinspiegel/use-bem-css)

## Install

```bash
npm install --save use-bem-css
```

## Usage

```jsx
import React from "react";
import { useBemCss } from "use-bem-css";

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
};
```

## Basic Usage

It will generate an object with BEM styles strings to use on the react components as values for `classNames`.

```jsx
const { button, buttonInput, buttonLabel, buttonSpan } = useBemCss({
  className: "button",
  blocks: ["button"],
  elements: ["label", "input"],
});

console.log(button); // "button"
console.log(buttonInput); // "button__input"
console.log(buttonLabel); // "button__label"
```

## Usage with modifiers

You can add modifier on the classes. To be active you need to pass a property `isActive`, otherwise it will not allow. If a modifier does not provide a array of with the affected items it will not generate.

```jsx
const { button, buttonInput, buttonLabel, buttonSpan } = useBemCss({
  className: "button",
  blocks: ["button"],
  elements: ["label", "input"],
  [{ modifier: "white", isActive: true }]
});

console.log(button); // "button button--white"
console.log(buttonInput); // "button__input button__input--white"
console.log(buttonLabel); // "button__label button__label--white"
```

## Usage with affected modifiers

You can add modifier on the classes. To be active you need to pass a property `isActive`, otherwise it will not allow. If a modifier does not provide a array of with the affected items it will not generate.

```jsx
const { button, buttonInput, buttonLabel, buttonSpan } = useBemCss({
  className: "button",
  blocks: ["button"],
  elements: ["label", "input"],
  [{ modifier: "white", isActive: true, affects: ["label"] }]
});

console.log(button); // "button"
console.log(buttonInput); // "button__input"
console.log(buttonLabel); // "button__label button__label--white"
```

## Usage multiple blocks and elements

In some cases you may need to add some extra block level classes, in this cases you just need to add extra items in the block.

```jsx
const { button, buttonInput, buttonLabel, buttonSpan } = useBemCss({
  className: "button",
  blocks: ["buttonBase", "alternativeButton"],
  elements: ["label", "input"],
  [{ modifier: "white", isActive: true, affects: ["label"] }]
});

console.log(button); // "base-button alternative-button"
console.log(buttonInput); // "base-button__input alternative-button__input"
console.log(buttonLabel); // "base-button__label alternative-button__label base-button__label--white alternative-button__label--white"
```

## License

MIT © [ShinSpiegel](https://github.com/ShinSpiegel)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
