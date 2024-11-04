import { Browser, chromium, Page } from 'playwright';

describe('Example Test', function () {
  let browser:Browser;
  let page:Page;

  before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it('should navigate to the Playwright homepage', async () => {
    await page.goto('https://playwright.dev');
    const title = await page.title();
    console.log(title);
    if (title.includes('Fast and reliable end-to-end testing for modern web apps')) {
      throw new Error('Title does not match');
    }
  });
});
