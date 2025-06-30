import { test, expect } from '@playwright/test';

test('Homepage displays course categories', async ({ page }) => {
  await page.goto("https://www.udemy.com");

  // await page.waitForTimeout(5000)
  // const categories = await page.locator(`//span[text()="Log in"]`);
  // await expect(categories).toBeVisible();

  // const firstCategoryName = await categories.first().textContent();
  // expect(firstCategoryName).toBe('Log in'); 
});
