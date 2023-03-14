import puppeteer from "puppeteer";

describe("Inn Form", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({});

    page = await browser.newPage();
  });

  test("Form should render on page start", async () => {
    await page.goto("http://localhost:8888");

    await page.waitForSelector(".form");
  });

  test("When the button is clicked add class .tooltip and .popover", async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:8888");

    await page.waitForSelector(".form");

    const form = await page.$(".form");
    const submit = await form.$(".btn");

    await submit.click();
    await submit.onmouseover;

    await page.waitForSelector(".popover");
    await page.waitForSelector(".tooltip");
  });

  afterAll(async () => {
    await browser.close();
  });
});
