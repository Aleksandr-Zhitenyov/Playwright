// studentForm.page.js
const path = require('path');
const { faker } = require('@faker-js/faker');

class StudentFormPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        // --- Inputs ---
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.mobileInput = page.locator('#userNumber');
        this.subjectInput = page.locator('#subjectsInput');
        this.addressInput = page.locator('#currentAddress');
        // --- Gender (radio) ---
        this.genderOptions = page.locator('#genterWrapper label');
        // --- Modal ---
        this.modal = page.locator('.modal-content');
        // --- Submit ---
        this.submitBtn = page.locator('#submit');
    }
    // this.dobInput = page.locator('#dateOfBirthInput');

    // --- Hobbies (checkboxes) ---
    // this.hobbiesOptions = page.locator('input[type="checkbox"][id^="hobbies-checkbox"]');

    // --- File upload ---
    // this.uploadInput = page.locator('#uploadPicture');

    // --- State / City ---
    // this.stateInput = page.locator('#react-select-3-input');
    // this.cityInput = page.locator('#react-select-4-input');

    async fillFirstName(name = faker.person.firstName()) {
        await this.firstNameInput.fill(name);
        return name;
    }

    async fillLastName(name = faker.person.lastName()) {
        await this.lastNameInput.fill(name);
        return name;
    }

    async fillEmail(email = faker.internet.email()) {
        await this.emailInput.fill(email);
        return email;
    }

    async fillMobile(mobile = faker.helpers.fromRegExp('[0-9]{10}')) {
        await this.mobileInput.fill(mobile);
        return mobile;
    }

    async fillSubject(subject = faker.word.noun()) {
        await this.subjectInput.click();
        await this.subjectInput.fill(subject);
        await this.page.keyboard.press('Enter');
        return subject;
    }

    async fillAddress(address = faker.location.streetAddress()) {
        await this.addressInput.fill(address);
        return address;
    }

    async selectRandomGender() {
        // находим все лейблы внутри блока gender
        const count = await this.genderOptions.count();
        // выбираем случайный индекс
        const randomIndex = Math.floor(Math.random() * count);
        // кликаем именно по label (он видимый)
        await this.genderOptions.nth(randomIndex).click();
        // берем value выбранного инпута (Male / Female / Other)
        return await this.genderOptions.nth(randomIndex).inputValue();
    }

    // Получить значение по названию Label (например "Student Name", "Gender")
    async getModalCell(label) {
        return this.modal.locator(`//td[text()="${label}"]/following-sibling::td`);
    }

    async submit() {
        await this.submitBtn.click();
    }

    // async selectRandomHobbies() {
    //     const labels = this.page.locator('#hobbiesWrapper label.custom-control-label');
    //     const count = await labels.count();
    //     const randomIndex = Math.floor(Math.random() * count);
    //     await labels.nth(randomIndex).click();
    // }

    // async fillDOB(dateStr) {
    //     await this.dobInput.fill('');
    //     await this.dobInput.type(dateStr); // формат: "30 Aug 2025"
    //     await this.dobInput.press('Enter');
    // }


    // async uploadFile(fileName) {
    //     const filePath = path.join(__dirname, fileName);
    //     await this.uploadInput.setInputFiles(filePath);
    // }

    // async selectRandomState() {
    //     await this.page.locator('#state').click(); // открыть список
    //     const options = this.page.locator('div.css-26l3qy-menu div');
    //     const count = await options.count();
    //     const randomIndex = Math.floor(Math.random() * count);
    //     const randomOption = options.nth(randomIndex);
    //     const stateText = await randomOption.textContent();
    //     await randomOption.click();

    //     // Проверка, что выбрано нужное
    //     const selected = await this.page.locator('#state .css-1uccc91-singleValue').textContent();
    //     if (selected !== stateText) {
    //         throw new Error(`Ожидали state=${stateText}, но выбрано=${selected}`);
    //     }

    //     return stateText;
    // }


    // async selectRandomCity() {
    //     await this.page.locator('#city').click(); // открыть список
    //     const options = this.page.locator('div.css-26l3qy-menu div');
    //     const count = await options.count();
    //     const randomIndex = Math.floor(Math.random() * count);
    //     const randomOption = options.nth(randomIndex);
    //     const cityText = await randomOption.textContent();
    //     await randomOption.click();

    //     // Проверка выбранного значения
    //     const selected = await this.page.locator('#city .css-1uccc91-singleValue').textContent();
    //     if (selected !== cityText) {
    //         throw new Error(`Ожидали city=${cityText}, но выбрано=${selected}`);
    //     }

    //     return cityText;
    // } 
}

module.exports = { StudentFormPage };
