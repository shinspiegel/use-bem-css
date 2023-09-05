import { capitalize } from "./capitalize";

describe("capitalize", () => {
  test("should capitalize the first letter", () => {
    expect(capitalize("value")).toBe("Value");
  });

  test("should not affect if its already capitalize", () => {
    expect(capitalize("Value")).toBe("Value");
  });

  test("should not affect other characters", () => {
    expect(capitalize("vaLUE")).toBe("VaLUE");
  });
});
