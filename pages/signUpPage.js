const { faker } = require('@faker-js/faker');

// Класс Page Object для страницы регистрации
export class SignUpPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Заголовок страницы (Sign up)
    this.pageTitle = page.locator('h1.text-xs-center');

    // Поле ввода имени (по placeholder)
    this.usernameInput = page.locator('input[placeholder="Your Name"]');

    // Поле ввода email (по placeholder)
    this.emailInput = page.locator('input[placeholder="Email"]');

    // Поле ввода пароля (по placeholder)
    this.passwordInput = page.locator('input[placeholder="Password"]');

    // Кнопка регистрации (по классу)
    this.signUpButton = page.locator('button.btn.btn-lg.btn-primary.pull-xs-right');

    // Ссылка на страницу входа (по тексту внутри <a>)
    this.signInLink = page.locator('a[href="#/login"]');
  }

  // Открыть страницу регистрации
  open = async () => await this.page.goto('https://realworld.qa.guru/#/ ');

  // Заполнить форму регистрации
  async fillSignUpForm(username, email, password) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  // Нажать кнопку Sign up
  submit = async () => await this.signUpButton.click();

  // Быстрый метод для регистрации
  register = async (
    username = faker.person.firstName(),
    email = faker.internet.email(),
    password = faker.helpers.fromRegExp('[0-9]{10}')
  ) => {
    await this.fillSignUpForm(username, email, password);
    await this.submit();

    return {
      username, email, password
    }
  }
}