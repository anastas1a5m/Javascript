
///// процедурнне програмування
// const sum = 20000;
// const month = 12;
// const p = 1000;
//
// const credit  = (sum, date, p) => {
//     return sum + p * date;
// };
//
// console.log(credit(sum, month, p));

/////// об'єктно орієнтовне програмування

// const credit = {
//     sum: 20000,
//     month:  12,
//     p: 1000,
//     result () {
//         return this.sum +  this.p * this.month;
//     },
// };
//
// console.log(credit.result());


/////класи

// class Bank {
//     static type = "bank";
//     constructor(options) {
//         this.sum = options.sum;
//         this.month = options.month;
//         this.p = options.p;
//     }
//     credit() {
//         return console.log(this.sum + this.p * this.month);
//     }
// }
//
// const userBank = new Bank({
//     sum: 30000,
//     month: 5,
//     p: 500,
// });
//
// userBank.credit();


// get - використовуються коли ми зчитуємо інформацію;
// set - коли ми змінюємо інформацію.

// class User {
//     constructor(props){
//         this.name = props.name;
//     }
//     firstName = "";
//     lastName = "";
//     age = "";
//     city = "";
//
//     set name(newName) {
//         const nameRow = newName.split("");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }
//     get name (){
//         return `First name: ${this.firstName} lastName : ${this.lastName}`
//     }
// }
// const Dasha = new User({
//     name: "Dasha Happy",
// });
//
// console.log(Dasha);

//приклад для user.name, що реалізований за допомогою get/set

// class User {
//     constructor(name) {
//         // calls the setter
//         this.name = name;
//     }
//     get name() {
//         return this.name;
//     }
//     set name (value) {
//         if (value.length < 4) {
//             alert("Name is too short");
//             return;
//         }
//         this._name = value;
//      }
// }
// let user = new User("Nastya");
// user = new User("");//Name is too short


//Основний синтаксис класу виглядає так:
// class MyClass {
//     prop = value; // властивість
//
//     constructor(...) { // конструктор
//         // ...
//     }
//
//     method(...) {} // метод
//
//     get something(...) {} // геттер метод
//     set something(...) {} // сеттер метод
//
//     [Symbol.iterator]() {} // метод з обчисленим ім’ям (символом в цьому випадку)
//     // ...
// }

//Coffee machine

class CoffeeMachine {
    waterAmount = 0; //the amount of water in the middle

    constructor(power) {
        this.power = power;
        console.log(`A coffee machine has been created, power: ${power}`);
    }
}
//a coffee machine has been created
let coffeeMachine = new CoffeeMachine(100);

//add water
coffeeMachine.waterAmount = 200;

//Функції гетери/сетери
//class CoffeeMachine {
//   _waterAmount = 0;
//
//   setWaterAmount(value) {
//     if (value < 0) value = 0;
//     this._waterAmount = value;
//   }
//
//   getWaterAmount() {
//     return this._waterAmount;
//   }
// }
//
// new CoffeeMachine().setWaterAmount(100);


//homework
// class Abonent {
//     static type = "abonent";
//     constructor(options){
//         this.name = options.name;
//         this.number = options.number;
//     }
//     name = "";
//     number = "";
//
//     set telephone(newTelephone) {
//         this.number = newTelephone;
//     }
//     get name(){
//         return `Name : ${this.name} number : ${this.number}`
//     }
// }
// const Bart = new Abonent({
//     name: "Bart S",
//     number: "007",
// });
// console.log(Bart);
//
// const Megi = new Abonent({
//     name: "Megi S",
//     number: "008",
// });
// console.log(Megi);
//
// const Lisa = new Abonent({
//     name: "Lisa S",
//     number: "009",
// });
// console.log(Lisa);






