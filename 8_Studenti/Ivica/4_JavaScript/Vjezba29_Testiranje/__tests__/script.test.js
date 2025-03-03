const maxNumber = require("../script");

const testArray = [1, 4, 5, 89, 49, 2, -1];

test("Get max number", () => {
  expect(maxNumber(testArray)).toBe(89);
});
