import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for hero animations
  await page.waitForTimeout(2000);

  // Hero screenshot
  await page.screenshot({ path: 'screenshot-hero.png' });

  // Scroll through the entire page to trigger whileInView animations
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageHeight; y += 400) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(300);
  }
  // Scroll to bottom, then back to top
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Full page screenshot (all sections now visible)
  await page.screenshot({ path: 'screenshot-full.png', fullPage: true });

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Scroll mobile page too
  const mobileHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < mobileHeight; y += 300) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

  console.log('Screenshots saved successfully');
  await browser.close();
})();
