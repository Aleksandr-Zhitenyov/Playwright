// @ts-check
import { test, expect } from '@playwright/test';

test('demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Forms$/ }).first().click();
  await page.getByText('Practice Form').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Firstname');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Lastname');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9977788993');
  await page.locator('#dateOfBirthInput').click();
  await page.getByText('August 2025').click();
  await page.getByRole('combobox').nth(1).selectOption('1991');
  await page.getByRole('option', { name: 'Choose Tuesday, August 13th,' }).click();
  await page.getByText('Music').click();
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.locator('#subjectsInput').fill('English');
  await page.locator('#subjectsInput').press('Enter');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Moscow');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});