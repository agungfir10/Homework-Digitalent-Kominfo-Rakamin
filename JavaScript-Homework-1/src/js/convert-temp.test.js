const { convert, r, f, c, k } = require("./convert-temp");

// Reamur to
test("Convert 0R to equal 1", () => {
  expect(convert(r, r, 0)).toBe(0);
});
test("Convert 0R to equal 0C", () => {
  expect(convert(r, c, 0)).toBe(0);
});
test("Convert 0R to equal 77K", () => {
  expect(convert(r, f, 0)).toBe(32);
});
test("Convert 0R to equal 18.2F", () => {
  expect(convert(r, k, 0)).toBe(18.2);
});

// Fahrenheit to
test("Convert 1F to equal -13.78R", () => {
  expect(convert(f, r, 1)).toBe(-13.78);
});
test("Convert 1F to equal -17.22C", () => {
  expect(convert(f, c, 1)).toBe(-17.22);
});
test("Convert 1F to equal 255.92K", () => {
  expect(convert(f, k, 1)).toBe(255.93);
});
test("Convert 1F to equal F", () => {
  expect(convert(f, f, 1)).toBe(1);
});

// Celcius to
test("Convert 2C to equal 35.6F", () => {
  expect(convert(c, f, 2)).toBe(35.6);
});
test("Convert 2C to equal 2C", () => {
  expect(convert(c, c, 2)).toBe(2);
});
test("Convert 2C to equal 275.15K", () => {
  expect(convert(c, k, 2)).toBe(275.15);
});
test("Convert 2C to equal 1.6R", () => {
  expect(convert(c, r, 2)).toBe(1.6);
});

// Kelvin to
test("Convert 3K to equal -270.15C", () => {
  expect(convert(k, c, 3)).toBe(-270.15);
});
test("Convert 3K to equal -454.27F", () => {
  expect(convert(k, f, 3)).toBe(-454.27);
});
test("Convert 3K to equal 3K", () => {
  expect(convert(k, k, 3)).toBe(3);
});
test("Convert 3K to equal -216.12R", () => {
  expect(convert(k, r, 3)).toBe(-216.12);
});
