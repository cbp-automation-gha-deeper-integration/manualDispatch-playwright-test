import { test, expect } from '@playwright/test';

test('Homepage displays course categories', async ({ page }) => {
  await page.goto('https://your-udemy-app.com');

  // Example selectors - update these to match the actual site structure
  const categories = await page.locator('.course-category');
  await expect(categories).toBeVisible();

  const firstCategoryName = await categories.first().textContent();
  expect(firstCategoryName).toBe('Popular Courses'); // Example: check the name of the category

  const featuredCourses = await page.locator('.featured-course');
  await expect(featuredCourses).toHaveCountGreaterThan(0);
});
