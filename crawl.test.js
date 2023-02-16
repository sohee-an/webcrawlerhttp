const { normalizeURL, getURLFromHTML } = require("./crawl.js");
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

/////
test("getURLFromHTML", () => {
  const inputHTMLBody = `
  <html>
       <body>
        <a href="http://naver.com/">
            naver.com
        </a>
       </body>
    </html>`;
  const inputBaseURL = "http://naver.com";
  const actual = getURLFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["http://naver.com/"];
  expect(actual).toEqual(expected);
});

test("getURLFromHTML", () => {
  const inputHTMLBody = `
  <html>
       <body>
        <a href="/blog/">
            naver.com
        </a>
       </body>
    </html>`;
  const inputBaseURL = "http://naver.com";
  const actual = getURLFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["http://naver.com/blog/"];
  expect(actual).toEqual(expected);
});

test("getURLFromHTML both", () => {
  const inputHTMLBody = `
  <html>
       <body>
        <a href="/blog/">
            naver.com
        </a>
         <a href="/blog2/">
            naver.com
        </a>
       </body>
    </html>`;
  const inputBaseURL = "http://naver.com";
  const actual = getURLFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["http://naver.com/blog/", "http://naver.com/blog2/"];
  expect(actual).toEqual(expected);
});

test("getURLFromHTML noURL", () => {
  const inputHTMLBody = `
  <html>
       <body>
        <a href="blog">
            no URL
        </a>
        
       </body>
    </html>`;
  const inputBaseURL = "http://naver.com";
  const actual = getURLFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});
