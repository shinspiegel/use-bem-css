import { renderHook } from "@testing-library/react-hooks";
import { useBemCss } from "./useBemCss";

test("should generate base classes for components", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: [],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block");
});

test("should be able to receive a kebab block name", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["kebab-block"],
      elements: [],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("kebab-block");
});

test("should be able to receive a kebab block name", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["kebab-block"],
      elements: [],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("kebab-block");
});

test("should generate base classes for components and elements", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: ["element"],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block");

  expect(result.current.hasOwnProperty("blockElement")).toBe(true);
  expect(result.current.blockElement).toBe("block__element");
});

test("should generate classes and modifier for all the blocks and elements", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: ["element"],
      modifiers: [{ modifier: "modifier", isActive: true }],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block block--modifier");

  expect(result.current.hasOwnProperty("blockElement")).toBe(true);
  expect(result.current.blockElement).toBe("block__element block__element--modifier");
});

test("should generate classes and apply modifier only for the block", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: ["element"],
      modifiers: [{ modifier: "modifier", isActive: true, affects: ["block"] }],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block block--modifier");

  expect(result.current.hasOwnProperty("blockElement")).toBe(true);
  expect(result.current.blockElement).toBe("block__element");
});

test("should generate classes and apply modifier only for the element", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: ["element"],
      modifiers: [{ modifier: "modifier", isActive: true, affects: ["element"] }],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block");

  expect(result.current.hasOwnProperty("blockElement")).toBe(true);
  expect(result.current.blockElement).toBe("block__element block__element--modifier");
});

test("should be able to have multiple block names", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["primaryBlock", "secondaryBlock"],
      elements: [],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("primary-block secondary-block");
});

test("should be able to have multiple element names", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["block"],
      elements: ["primaryElement", "secondaryElement"],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("block");

  expect(result.current.hasOwnProperty("blockPrimaryelement")).toBe(true);
  expect(result.current.blockPrimaryelement).toBe("block__primary-element");

  expect(result.current.hasOwnProperty("blockSecondaryelement")).toBe(true);
  expect(result.current.blockSecondaryelement).toBe("block__secondary-element");
});

test("should be able to have multiple block and element names", () => {
  const { result } = renderHook(() =>
    useBemCss({
      className: "block",
      blocks: ["primaryBlock", "secondaryBlock"],
      elements: ["primaryElement", "secondaryElement"],
    })
  );

  expect(result.current.hasOwnProperty("block")).toBe(true);
  expect(result.current.block).toBe("primary-block secondary-block");

  expect(result.current.hasOwnProperty("blockPrimaryelement")).toBe(true);
  expect(result.current.blockPrimaryelement).toBe("primary-block__primary-element secondary-block__primary-element");

  expect(result.current.hasOwnProperty("blockSecondaryelement")).toBe(true);
  expect(result.current.blockSecondaryelement).toBe(
    "primary-block__secondary-element secondary-block__secondary-element"
  );
});
