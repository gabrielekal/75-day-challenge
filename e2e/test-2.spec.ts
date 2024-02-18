import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Navigate to About Page').click();
  await expect(page.getByRole('heading', { name: 'Self-Improvement Journey' })).toBeVisible();
  await page.getByRole('button', { name: '←' }).click();
});