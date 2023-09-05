import { kebabize } from "./kebabize";

describe("kebabize", () => {
  test("should convert camel case to kebab case", () => {
    expect(kebabize("someValue")).toBe("some-value");
  });

  test("should not affect if its already capitalize", () => {
    expect(kebabize("some-value")).toBe("some-value");
  });

  test("should normalize all the character to lower case", () => {
    expect(kebabize("SomeValue")).toBe("some-value");
  });
});
