const { faker } = require('@faker-js/faker');
// Генерация случайной темы/слова
const randomSubject = faker.location.streetAddress(); // случайное существительное
console.log(randomSubject);