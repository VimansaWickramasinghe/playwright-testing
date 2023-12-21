const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");

test.describe("My Test Suit", () => {
  test("My Test Case", async ({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await Authenticate(page);
    await prepareOrder(page);
    await placeOrder(page);

    await browser.close();
  });
});

async function Authenticate(page) {
  await page.goto("https://bitheap.tech");
  await page.click("#menu-item-1311");
  await page
    .locator("[name='xoo-el-username']")
    .fill(process.env.BITHEAP_USERNAME);
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS);
  await page
    .locator(
      "xpath=/html/body/div[2]/div[2]/div/div/div[2]/div[1]/div/div/div[2]/div/form/button"
    )
    .click();

  const text = await page.locator("css=#menu-item-1314 > a").textContent();
  if (text != "Hello, Playwright")
    console.error("The authentication was not successful!");
  await page.screenshot({ path: "screenshot2.png" });
}

async function prepareOrder(page) {
  await page.click("#menu-item-1310");
  await page.locator('xpath=//*[@id="main"]/nav/ul/li[2]/a').click();
  await page
    .locator(
      "css=#main > ul > li.product.type-product.post-211.status-publish.last.instock.product_cat-uncategorized.purchasable.product-type-simple > a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart"
    )
    .click();
  await page.locator("xpath=/html/body/nav/div[1]/div[3]/div/a/i").click();
  await page.getByText("Proceed to checkout").click();
}

async function placeOrder(page) {
  await page.getByPlaceholder("House number and street name").fill("test");
  //await page.getByPlaceholder("1234").fill("1234");
  await page.locator("css=#billing_postcode").fill("1234");
  await page.locator("css=#billing_city").fill("Zurich");
  await page.click("#place_order");

  //an assertion for checking weather something is true
  expect(await page.getByText("Order received").count()).toBe(1);
}
