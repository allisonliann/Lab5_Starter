// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2

//isPhoneNumber
test("isPhoneNumber: valid w/ dashes", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("isPhoneNumber: valid w/ parentheses", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("isPhoneNumber: invalid w/ letters", () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

test("isPhoneNumber: invalid w/ not enough digits", () => {
  expect(isPhoneNumber("123-456")).toBe(false);
});

//isEmail
test("isEmail: valid basic", () => {
  expect(isEmail("olive@gmail.com")).toBe(true);
});

test("isEmail: valid w/ underscore", () => {
  expect(isEmail("ol_ive@ucsd.com")).toBe(true);
});

test("isEmail: invalid missing @", () => {
  expect(isEmail("ol_iveucsd.com")).toBe(false);
});

test("isEmail: invalid missing domain extension", () => {
  expect(isEmail("ol_ive@ucsd")).toBe(false);
});

//isStrongPassword
test("isStrongPassword: valid basic", () => {
  expect(isStrongPassword("Hello123")).toBe(true);
});

test("isStrongPassword: valid w/ underscore", () => {
  expect(isStrongPassword("hi_my")).toBe(true);
});

test("isStrongPassword: invalid starts w/ number", () => {
  expect(isStrongPassword("1password")).toBe(false);
});

test("isStrongPassword: invalid not long enough", () => {
  expect(isStrongPassword("ab8")).toBe(false);
});

//isDate
test("isDate: valid date w/ 2-digit month and day", () => {
  expect(isDate("01/01/2020")).toBe(true);
});

test("isDate: valid date w/ 1-digit month and day", () => {
  expect(isDate("1/1/2020")).toBe(true);
});

test("isDate: invalid date w/ dashes instead of slashes", () => {
  expect(isDate("01-01-2020")).toBe(false);
});

test("isDate: invalid date with two digit year", () => {
  expect(isDate("01/01/20")).toBe(false);
});

//isHexColor
test("isHexColor: valid 6-digit hex w/ hash", () => {
  expect(isHexColor("#FF8246")).toBe(true);
});

test("isHexColor: valid 3-digit hex w/ hash", () => {
  expect(isHexColor("#AAA")).toBe(true);
});

test("isHexColor: invalid hex w/ wrong characters", () => {
  expect(isHexColor("#ZZZZZZ")).toBe(false);
});

test("isHexColor: invalid only 2 digits", () => {
  expect(isHexColor("#EE")).toBe(false);
});
