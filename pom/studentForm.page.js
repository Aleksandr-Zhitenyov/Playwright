// studentForm.page.js
const path = require('path');

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
        this.dobInput = page.locator('#dateOfBirthInput');
        this.subjectInput = page.locator('#subjectsInput');
        this.addressInput = page.locator('#currentAddress');

        // --- Gender (radio) ---
        this.genderOptions = page.locator('input[name="gender"]');

        // --- Hobbies (checkboxes) ---
        this.hobbiesOptions = page.locator('input[type="checkbox"][id^="hobbies-checkbox"]');

        // --- File upload ---
        this.uploadInput = page.locator('#uploadPicture');

        // --- State / City ---
        this.stateInput = page.locator('#react-select-3-input');
        this.cityInput = page.locator('#react-select-4-input');

        // --- Submit ---
        this.submitBtn = page.locator('#submit');

        // --- Modal ---
        this.modal = page.locator('.modal-content');
    }

    async fillFirstName(name) {
        await this.firstNameInput.fill(name);
    }

    async fillLastName(name) {
        await this.lastNameInput.fill(name);
    }

    async fillEmail(email) {
        await this.emailInput.fill(email);
    }

    async fillMobile(number) {
        await this.mobileInput.fill(number);
    }

    async selectRandomGender() {
        // Все label для gender
        const labels = this.page.locator('#genterWrapper label');
        const count = await labels.count();
        const randomIndex = Math.floor(Math.random() * count);
        await labels.nth(randomIndex).click();
    }

    async selectRandomHobbies() {
        const labels = this.page.locator('#hobbiesWrapper label.custom-control-label');
        const count = await labels.count();
        const randomIndex = Math.floor(Math.random() * count);
        await labels.nth(randomIndex).click();
    }

    async fillDOB(dateStr) {
        await this.dobInput.fill('');
        await this.dobInput.type(dateStr); // формат: "30 Aug 2025"
        await this.dobInput.press('Enter');
    }

    async fillSubject(subject) {
        await this.subjectInput.type(subject);
        await this.page.keyboard.press('Enter');
    }

    async fillAddress(address) {
        await this.addressInput.fill(address);
    }

    async uploadFile(fileName) {
        const filePath = path.join(__dirname, fileName);
        await this.uploadInput.setInputFiles(filePath);
    }

    async selectRandomState() {
        await this.page.locator('#state').click(); // открыть список
        const options = this.page.locator('div.css-26l3qy-menu div');
        const count = await options.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomOption = options.nth(randomIndex);
        const stateText = await randomOption.textContent();
        await randomOption.click();

        // Проверка, что выбрано нужное
        const selected = await this.page.locator('#state .css-1uccc91-singleValue').textContent();
        if (selected !== stateText) {
            throw new Error(`Ожидали state=${stateText}, но выбрано=${selected}`);
        }

        return stateText;
    }


    async selectRandomCity() {
        await this.page.locator('#city').click(); // открыть список
        const options = this.page.locator('div.css-26l3qy-menu div');
        const count = await options.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomOption = options.nth(randomIndex);
        const cityText = await randomOption.textContent();
        await randomOption.click();

        // Проверка выбранного значения
        const selected = await this.page.locator('#city .css-1uccc91-singleValue').textContent();
        if (selected !== cityText) {
            throw new Error(`Ожидали city=${cityText}, но выбрано=${selected}`);
        }

        return cityText;
    }

    async submit() {
        await this.submitBtn.click();
    }

    async expectModalContains(expect, text) {
        await expect(this.modal).toContainText(text);
    }
}

module.exports = { StudentFormPage };
