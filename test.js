const { chromium } = require("playwright"); //constant variable named chromium, which is an object representing the Chromium browser, imported from the 'playwright' module accessed from the require() node js fuction.
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://swagger.io/");
  await page.screenshot({ path: "screenshot1.png" });
  await browser.close();
})();
