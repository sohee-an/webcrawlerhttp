const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeUrl", () => {
  const input = `https://naver.com/blog`;
  const actual = normalizeURL(input);
  const expected = `naver.com/blog`;
  expect(actual).toEqual(expected);
});

test("normalizeUrl slash", () => {
  const input = `https://naver.com/blog/`;
  const actual = normalizeURL(input);
  const expected = `naver.com/blog`;
  expect(actual).toEqual(expected);
});
test("normalizeUrl capital", () => {
  const input = `https://NAVER.com/blog`;
  const actual = normalizeURL(input);
  const expected = `naver.com/blog`;
  expect(actual).toEqual(expected);
});

test("normalizeUrl http", () => {
  const input = `http://NAVER.com/blog`;
  const actual = normalizeURL(input);
  const expected = `naver.com/blog`;
  expect(actual).toEqual(expected);
});
