const { test, expect } = require('@playwright/test');
const { StudentFormPage } = require('../pom//studentForm.page');

/**
 * сделать Page Object для страницы demoqa, где поиск элементов будет через Playwright,
 * локаторы выбирать по приоритету: id, name, class, text / css 
 * пример на Javascript+ Playwright с комментариями
 */
test('Заполнение полной формы Student Registration', async ({ page }) => {
  const form = new StudentFormPage(page);

  await page.goto('https://demoqa.com/automation-practice-form');

  // Заполнение текстовых полей
  await form.fillFirstName('Иван');
  await form.fillLastName('Иванов');
  await form.fillEmail('ivanov@test.com');
  await form.fillMobile('9876543210');
  await form.fillSubject('Maths');
  await form.fillAddress('Москва, Красная площадь 1');

  // Случайный выбор gender + hobbies
  await form.selectRandomGender();
  await form.selectRandomHobbies();

  // Загрузка файла
  // await form.uploadFile('test.jpg'); // положи test.jpg рядом с тестом

  // State / City
  await form.selectRandomState();
  // const chosenCity = await form.selectRandomCity();


  // Сабмит
  await form.submit();

  // Проверки модалки
  await form.expectModalContains(expect, 'Иван');
  await form.expectModalContains(expect, 'Иванов');
  await form.expectModalContains(expect, 'ivanov@test.com');
  await form.expectModalContains(expect, '9876543210');
  await form.expectModalContains(expect, 'Maths');
  await form.expectModalContains(expect, 'Москва');
});
