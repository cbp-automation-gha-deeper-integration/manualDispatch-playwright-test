import { test, expect } from '@playwright/test';

test('Homepage displays course categories', async ({ page }) => {
  await page.goto('https://your-udemy-app.com');

  const categories = await page.locator('.course-category');
  await expect(categories).toBeVisible();

  const firstCategoryName = await categories.first().textContent();
  expect(firstCategoryName).toBe('Popular Courses'); // Example content to match

  const featuredCourses = await page.locator('.featured-course');
  const courseCount = await featuredCourses.count();
  expect(courseCount).toBeGreaterThan(0);
});
