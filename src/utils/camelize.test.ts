import { camelize } from "./camelize";

test("should convert kebab to camel case", () => {
  expect(camelize("some-value")).toBe("someValue");
});

test("should keep the capital if the kebab have some value", () => {
  expect(camelize("Some-Value")).toBe("SomeValue");
});

test("should not affect a already camel case", () => {
  expect(camelize("someValue")).toBe("someValue");
});

test("should not affect capital case", () => {
  expect(camelize("SomeValue")).toBe("SomeValue");
});
