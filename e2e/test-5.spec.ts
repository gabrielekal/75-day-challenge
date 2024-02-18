import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByLabel('Navigate to Rules of the').click();
  await page.getByRole('button', { name: '←' }).click();
});