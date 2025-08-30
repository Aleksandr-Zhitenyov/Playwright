import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
/**
 * сделать page object для странице https://realworld.qa.guru/ 
 * локаторы выбирать по проритету: id, placeholder, class 
 * Javascript + playwright с комментариями
 */
test('Регистрация нового пользователя', async ({ page }) => {
  const signUpPage = new SignUpPage(page);

  // Открыть страницу регистрации
  await signUpPage.open();

  // Проверка, что заголовок "Sign up" виден
  await expect(signUpPage.pageTitle).toHaveText('Sign up');

  // Заполнить форму и отправить
  let { username } = await signUpPage.register();

  // Проверка: после регистрации открывается главная страница
  await expect(page.locator('img.user-pic')).toHaveAttribute('alt', username);
});
