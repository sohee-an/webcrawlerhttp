const { crawlPage } = require("./crawl");
const { printReport } = require("./report");

async function main() {
  console.log(process.argv);
  if (process.argv.length < 3) {
    console.log("no website provied");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("to many!!!");
  }
  const baseURL = process.argv[2];
  console.log(`crawl 스타트~ ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});
  printReport(pages);
}
main();
