import puppeteer from "puppeteer";
import { fork } from "child_process";

describe("Inn Form", () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    browser = await puppeteer.launch({});
    server = fork(`${__dirname}/e2e.server.js`);
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
