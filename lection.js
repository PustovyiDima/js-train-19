// // const Animal = {
// //    name: "Тварина",
// //    voice: "Звук",
// //    say() {
// //       console.log(`${this.name} каже ${this.voice}`);
// //    },
// // };

// // // const dog = { ...Animal };

// // // dog.name = "Бобік";
// // // dog.voice = "Woof";
// // // dog.say();

// // const dog = Object.create(Animal); //СТВОРЕННЯ ПРОТОТИПУ
// // dog.name = "Бобік";
// // dog.voice = "Woof";
// // // dog.say();
// // // dog.age = 10;
// // // dog.age = 15;
// // // delete dog.age;

// // Object.defineProperty(dog, "age", {
// //    //    value: 10, //необовязково
// //    set(value) {
// //       this._age = value; // "._" приватна властивість
// //    }, //ф-я при заданні нових значень
// //    get() {
// //       return `${this._age || 0} років`;
// //    }, //ф-я при отриманні значення
// //    //    writable: true,
// //    //    enumerable: true,
// //    //    configurable: true,
// // }); //третій елемент це обєкт налаштувань
// // // console.log(dog.age);

// // dog.age = 15;

// // // console.log(dog.age);

// // Object.defineProperty(dog, "location", {
// //    //    value: 10, //необовязково
// //    //    set(value) {
// //    //       this._age = value; // "._" приватна властивість
// //    //    }, //ф-я при заданні нових значень
// //    //    get() {
// //    //       return `${this._age || 0} років`;
// //    //    }, //ф-я при отриманні значення
// //    value: "Ukraine",
// //    writable: true, //читати
// //    enumerable: true, //ітерувати
// //    //    configurable: true, //видаляти
// // }); //третій елемент це обєкт налаштувань

// // console.log(dog.location);
// // console.log(dog);
// // // delete dog.location; // працює якщо configurable: true
// // console.log(dog.location);
// // console.log(dog);

// // console.log(Object.getOwnPropertyDescriptors(dog));
// // console.log(dog.hasOwnProperty("voice")); //truе якщо обєкт має влястивість НЕ з прототипу
// // // //Зміни прототипу
// // // Animal.go = function go() {
// // //    console.log("Змфни в прототипі");
// // // };
// // // //виклик значення
// // // dog.go();

// // // console.log(dog.__proto__); //отримуємо обєкт прототипу але це технічна властивість краще використовувати Object.getPrototypeOf()
// // // console.log(Object.getPrototypeOf(dog));

// // // console.log(Animal.isPrototypeOf(dog)); //Чи є прототипом

// // // //Зміна прототипу обєкта на інший setPrototypeOf(obj,prototype)
// // // Object.setPrototypeOf(dog, null); //для видалення прототипу АБО ОБЄКТ {} ДЛЯ ЗАДАННЯ ПРОТОТИПУ

// // // console.log(dog);

// // =============================
// // =============================

// const Tag = {
//    render(value) {
//       return `<>${value}<>`;
//    },
//    className: "",
// };
// // =============================
// const Button = Object.create(Tag);

// Button.render = function (value = "") {
//    return `<button class="${this.className}" style = "${this.style}">${value}<button>`;
// };

// const mainButton = Object.create(Button, {
//    style: { value: "background: blue; color:white;", writable: true },
//    className: { value: "mainButton" },
// });

// console.log(mainButton.render("Click"));
// // =============================
// const Input = Object.create(Tag);

// Input.render = function () {
//    return `<input placeholder = "${this.placeholder}" type = "${this.type}" style="${this.style}"/>`;
// };
// const loginInput = Object.create(Input, {
//    type: { value: "text" },
//    placeholder: { value: "Login..." },
//    style: { value: "border:1px solid green; padding:15px;", writable: true },
// });
// console.log(loginInput.render());
// // =============================
// const ServerRequest = {
//    date: new Date(),
//    data: null,
//    sendData() {
//       /////.......відправка на сервер
//    },
//    getData() {
//       /////.......отримання з сервера
//    },
//    render() {
//       /////.......вивід данних
//       this.data = this.getData();
//       return `${this.data}`;
//    },
// };
// console.log(ServerRequest);
