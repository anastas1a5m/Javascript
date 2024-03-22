// const userInfo = {
//     name:  "name",
//     age: 15,
//     logInfo: function (job) {
//         console.group(`${name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Job is : ${job}`);
//         console.groupEnd();
//     },
// };
//
// const Nastya = {
//  name: "Anastasiia",
//  age: 25,
// };
//
// userInfo.logInfo.call(Nastya, "developer");



// const showUserInfo = {
//     name: name,
//     age: 87,
//     logInfo: function (job, city) {
//         console.group(`${name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Job is : ${job}`);
//         console.log(`City is : ${city}`);
//         console.groupEnd();
//     },
// };
//
// const Nastya = {
//     name: "Anastasiia",
//     age: 25,
// };
//
//  showUserInfo.logInfo.apply(Nastya, ["developer", "Netishyn"]);


// const message= function(name, stars){
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };
//
// const Bukovel = {hotel: "Bukovel" };
// const Turist = {hotel: "Turist"};
//
// // message.call(Bukovel, "Vlad", "5");
// // message.call(Turist, "Vlad", "3");
//
// // message.apply(Bukovel, ["Vlad", "5"]);
// // message.apply(Turist, ["Vlad", "3"]);
//
// message.bind(Bukovel, "Vlad", "5")();
// message.bind(Bukovel, "Vlad", "3")();
//


// const cart = {
//     showItems(){
//         console.log("In the basket: ", this.items);
//     },
// };
//
// const woman = {
//     items: ["Dress, shoes"],
// };
//
// const man = {
//     items: ["Sweatshirt, sneakers"],
// };
//
// const child = {
//     items: ["T-shirt, shorts"],
// };
//
// document.
// querySelector("#wom").
// addEventListener("click", cart.showItems.bind(woman));
//
// document.
// querySelector("#man").
// addEventListener("click", cart.showItems.bind(man));
//
// document.
// querySelector("#kid").
// addEventListener("click", cart.showItems.bind(child));


const infoCar = {
    name: "Opel",
    model: "Insignia",
    color: "black",
    showInfo: function () {
        console.log(
            "Car  " + this.name +  "  model  " + this.model +  "  color  " + this.color
        );
    },
};

infoCar.showInfo.bind(infoCar)();
infoCar.showInfo.call(infoCar);
infoCar.showInfo.apply(infoCar);
