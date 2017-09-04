const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const viewports = [1200, 992, 768, 576, 350];

  await page.goto('https://google.com'); // Add url

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // Height doesn't matter, screenshotting full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: `./screenshots/screen-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();
})();