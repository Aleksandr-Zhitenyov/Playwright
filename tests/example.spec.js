const { test, expect } = require('@playwright/test');
const { StudentFormPage } = require('../pages/studentForm.page');

/**
 * сделать Page Object для страницы demoqa
 * локаторы выбирать по приоритету: id, name, class, text / css 
 * пример на Javascript + Playwright с комментариями
 */
test('Заполнение полной формы Student Registration', async ({ page }) => {
  const form = new StudentFormPage(page);

  await page.goto('https://demoqa.com/automation-practice-form');

  // Заполнение текстовых полей
  const firstName = await form.fillFirstName();
  const lastName = await form.fillLastName();
  const email = await form.fillEmail();
  const mobile = await form.fillMobile();
  const subject = await form.fillSubject('Maths');
  const address = await form.fillAddress();
  // Случайный выбор gender
  const gender = await form.selectRandomGender();

  console.log('firstName ' + firstName);
  console.log('lastName ' + lastName);
  console.log('email ' + email);
  console.log('mobile ' + mobile);
  console.log('adress ' + address);
  console.log('subject ' + subject);
  console.log('gender ' + gender);

  // Случайный выбор hobbies
  // await form.selectRandomHobbies();

  // Загрузка файла
  // await form.uploadFile('test.jpg'); // положи test.jpg рядом с тестом

  // State / City
  // await form.selectRandomState();
  // const chosenCity = await form.selectRandomCity();

  // Сабмит
  await form.submit();

  // --- Проверки модалки ---
  expect(await form.getModalCell('Student Name')).toHaveText(`${firstName} ${lastName}`);
  expect(await form.getModalCell('Student Email')).toHaveText(email);
  expect(await form.getModalCell('Gender')).toHaveText(gender);
  expect(await form.getModalCell('Mobile')).toHaveText(mobile);
  // expect(await form.getModalCell('Address')).toBe(address);
  // expect(await form.getModalCell('Subjects')).toBe(subject);
  // await expect(await form.getModalValue('Date of Birth')).toBe('30 August,2025');
  // await expect(await form.getModalValue('Hobbies')).toBe(hobbies.join(', '));
  // await expect(await form.getModalValue('State and City')).toBe(`${state} ${city}`);
});
