const app = require("./app");

test("provides empty input to return false", () => {
  expect(app.validInput({}).toBe(false));
});
