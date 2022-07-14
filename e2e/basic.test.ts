import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const title = page.locator('.hello');
  const button = page.locator('Button');
  await expect(title).toHaveText('Hello Vite + React!');

  await expect(button).toHaveText('count is: 0');
  await button.click();
  await expect(button).toHaveText('count is: 1');
});
