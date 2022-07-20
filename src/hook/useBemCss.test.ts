import { renderHook } from "@testing-library/react-hooks";
import { useBemCss } from "./useBemCss";

test("should generate nothing to return without any properties", () => {
  const { result } = renderHook(() => useBemCss({ className: "block" }));

  expect(Object.keys(result.current).length).toBe(0);
});

test("should generate base classes for components", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block"],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block");
});

test("should keep the camel case on the block", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "classCamelCase",
      blocks: ["block"],
      elements: [],
    })
  );

  expect(result.current.hasOwnProperty("classCamelCase")).toBe(true);
  expect(result.current.classCamelCase).toBe("block");
});

test("should be able to receive empty arguments for blocks or elements", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block", undefined, ""],
      elements: ["", undefined, ""],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block");
});

test("should not generate elements that are undefined", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: [undefined, undefined, undefined],
    })
  );

  expect(Object.keys(result.current).length).toBe(1);
  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block");
});

test("should be able to receive a kebab block name", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["kebab-block"],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("kebab-block");
});

test("should be able to receive a kebab block name", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["kebab-block"],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("kebab-block");
});

test("should generate base classes for components and elements", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block"],
      elements: ["element"],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block");

  expect(result.current.hasOwnProperty("classNameElement")).toBe(true);
  expect(result.current.classNameElement).toBe("block__element");
});

test("should generate classes and modifier for all the blocks and elements", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block"],
      elements: ["element"],
      modifiers: [{ modifier: "modifier", isActive: true }],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block block--modifier");

  expect(result.current.hasOwnProperty("classNameElement")).toBe(true);
  expect(result.current.classNameElement).toBe("block__element block__element--modifier");
});

test("should generate classes and apply modifier only for the block", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block"],
      elements: ["element"],
      modifiers: [{ modifier: "modifier", isActive: true, affects: ["className"] }],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block block--modifier");

  expect(result.current.hasOwnProperty("classNameElement")).toBe(true);
  expect(result.current.classNameElement).toBe("block__element");
});

test("should generate classes and apply modifier only for the element", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block"],
      elements: ["element"],
      modifiers: [
        { modifier: "modifier", isActive: true, affects: ["element"] },
      ],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block");

  expect(result.current.hasOwnProperty("classNameElement")).toBe(true);
  expect(result.current.classNameElement).toBe("block__element block__element--modifier");
});

test("should be able to have multiple block names", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["primaryBlock", "secondaryBlock"],
      elements: [],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("primary-block secondary-block");
});

test("should be able to have multiple element names", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["block"],
      elements: ["primaryElement", "secondaryElement"],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("block");

  expect(result.current.hasOwnProperty("classNamePrimaryelement")).toBe(true);
  expect(result.current.classNamePrimaryelement).toBe("block__primary-element");

  expect(result.current.hasOwnProperty("classNameSecondaryelement")).toBe(true);
  expect(result.current.classNameSecondaryelement).toBe("block__secondary-element");
});

test("should be able to have multiple block and element names", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "className",
      blocks: ["primaryBlock", "secondaryBlock"],
      elements: ["primaryElement", "secondaryElement"],
    })
  );

  expect(result.current.hasOwnProperty("className")).toBe(true);
  expect(result.current.className).toBe("primary-block secondary-block");

  expect(result.current.hasOwnProperty("classNamePrimaryelement")).toBe(true);
  expect(result.current.classNamePrimaryelement).toBe(
    "primary-block__primary-element secondary-block__primary-element"
  );

  expect(result.current.hasOwnProperty("classNameSecondaryelement")).toBe(true);
  expect(result.current.classNameSecondaryelement).toBe(
    "primary-block__secondary-element secondary-block__secondary-element"
  );
});
