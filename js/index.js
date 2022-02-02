"use strict";

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

//1.1 Прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

//1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).

const fullNamesUsersWomens = users
  .filter((user) => !user.isMale && user.age >= 6 && user.age <= 18)
  .map((user) => user.getFullName());

//1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com

console.log(
  "useremail99@gmail.com :>> ",
  users.some((user) => user.email === "useremail99@gmail.com")
);

//1.4 Проверить, все ли пользователи подписаны (subscribed).

console.log(
  "subscribed :>> ",
  users.every((user) => user.isSubscribed)
);
