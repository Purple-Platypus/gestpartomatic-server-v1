const { test, expect } = require('@playwright/test');

test('my test 1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute(
    'href',
    '/docs/intro',
  );

  // Expect an element "to be visible".
  await expect(page.locator('text=Learn more').first()).toBeVisible();
  await page.click('text=Get Started');

  // Expect some text to be visible on the page.
  await expect(page.locator('text=System requirements').first()).toBeVisible();
});

test('my test 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute(
    'href',
    '/docs/intro',
  );

  // Expect an element "to be visible".
  await expect(page.locator('text=Learn more').first()).toBeVisible();
  await page.click('text=Get Started');

  // Expect some text to be visible on the page.
  await expect(page.locator('text=System requirements').first()).toBeVisible();
});

test('my test 3', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute(
    'href',
    '/docs/intro',
  );

  // Expect an element "to be visible".
  await expect(page.locator('text=Learn more').first()).toBeVisible();
  await page.click('text=Get Started');

  // Expect some text to be visible on the page.
  await expect(page.locator('text=System requirements').first()).toBeVisible();
});
