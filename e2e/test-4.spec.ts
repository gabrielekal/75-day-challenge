import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Navigate to Challenge Page').click();
  await page.getByText('1', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'DAY 1' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^BALANCED EATINGMaintaining a healthy diet\.$/ }).locator('label').click();
  await page.locator('div').filter({ hasText: /^SINGLE DAY WORKOUTCompleting a 45-minute workout\.$/ }).locator('label').click();
  await page.locator('div').filter({ hasText: /^READING FOR GROWTHReading 10 pages\.$/ }).locator('label').click();
  await page.locator('div').filter({ hasText: /^HYDRATION GOALDrinking 3 liters of water\.$/ }).locator('label').click();
  await page.getByPlaceholder('Enter weight').click();
  await page.getByPlaceholder('Enter weight').fill('12');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: '←' }).click();
  await page.getByLabel('Navigate to Progress Page').click();
  await page.getByRole('button', { name: 'YOUR WEIGHT TRACKER ➜' }).click();
  await expect(page.getByRole('heading', { name: 'WEIGHT TRACKER' })).toBeVisible();
  await page.locator('#weightsChart').click({
    position: {
      x: 62,
      y: 177
    }
  });
  await page.getByRole('button', { name: '←' }).click();
});