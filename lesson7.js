// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }
//
//   hide() {
//     this.$el.style.display = "none";
//   }
//
//   show() {
//     this.$el.style.display = "block";
//   }
// }
//
// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$el.width = options.size + "px";
//     this.$el.style.height = options.size + "px";
//     this.$el.style.borderRadius = "50%";
//     this.$el.style.background = options.color;
//   }
// }
//
// const CircleRed = new CircleItem({
//   selector: "#circleRed",
//   color: "red",
//   size: 50,
// });
// const CircleGreen = new CircleItem({
//   selector: "#circleGreen",
//   color: "green",
//   size: 80,
// });
//
// const CircleBlack = new CircleItem({
//   selector: "#circleBlack",
//   color: "black",
//   size: 30,
// });

///////

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }
//
// Car.prototype.message = function () {
//   console.log(`${this.name} is ${this.color} color`);
// };
//
// Car.prototype.start = function () {
//   console.log(`${this.name} is start!!!`);
// };
//
// const BMW = new Car("bmw", "red");
// const opel = new Car("opel", "green");

///////

// let message = {
//   messageHello() {
//     console.log(`Hello, ${this.name}`);
//   },
//
//   messageBye() {
//     console.log(`Bye, ${this.name}`);
//   },
// };
//
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(User.prototype, message);
//
// new User("Іван").messageHello();

///

// function Calculator() {
//
//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }
//   this.mul = function() {
//     return this.a * this.b;
//   }
//   let calculator = new Calculator();
//   calculator.read();
//
//   console.log( "Sum=" + calculator.sum() );
//   console.log( "Mul=" + calculator.mul() );
// }

///
//  value – це сума всіх введених користувачем значень разом із початковим значенням startingValue
// Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
// function Accumulator(startingValue) {
//   this.value = startingValue;
//
//   this.read = function() {
//     this.value += +prompt('How much to add', 0);
//   };
// }
// let accumulator = new Accumulator(0);
// accumulator.read(); // додає введене користувачем значення
// accumulator.read();
// console.log(accumulator.value); // показує суму цих значень