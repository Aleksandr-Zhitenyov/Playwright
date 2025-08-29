// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
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
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).press('Shift++');
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('+97778899');
  await page.locator('#dateOfBirthInput').click();
  await page.getByText('August 2025').click();
  await page.getByRole('button', { name: 'Next Month' }).click();
  await page.getByRole('button', { name: 'Previous Month' }).click();
  await page.getByRole('button', { name: 'Previous Month' }).click();
  await page.getByText('July 2025').click();
  await page.getByRole('combobox').nth(1).selectOption('1991');
  await page.getByRole('option', { name: 'Choose Wednesday, July 24th,' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('AQA');
  await page.getByText('Music').click();
  await page.getByText('Sports').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Aqa');
  await page.locator('div').filter({ hasText: /^Aqa$/ }).nth(1).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('English');
  await page.locator('#subjectsInput').press('Enter');
  await page.getByText('Reading').click();
  await page.getByText('Reading').click();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Moscow');
  await page.locator('#state path').click();
  await page.getByText('Haryana', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Panipat', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('997778899');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9977788993');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#fixedban div').nth(1).click();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
