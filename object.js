// my pet

// const name = "Travis";
// const age = 2;
// const isMale = true;
// const food = "Fish";
// const color = "white";
// const specis = "Hulo beral";

/*
const objectName = {
    propertyName : propertyValue,
}

*/

// const myPet = {
//   name: "Travis",
//   age: 2,
//   isMale: true,
//   food: "Fish",
//   color: "white",
//   specis: "Hulo beral",
//   "is married": false,
// };

// const x = "name";
// console.log(myPet[x]);

// console.log(myPet["is married"]);

// const catFood = myPet.food;
// const catFood = myPet["food"];
// // console.log(myPet.name);

// console.log(catFood);

// dot notation(object.propertyName)
// bracket notation (object["propertyName"])

// myPet.color = "Black";
// myPet["is married"] = true;

// myPet.sound = "meo meow";
// myPet["sound"] = "hamba hamba";

// delete myPet.age;

// console.log(myPet);

// const myPet = {
//   name: "Travis",
//   age: 2,
//   isMale: true,
//   food: "Fish",
//   color: "white",
//   specis: "Hulo beral",
//   "is married": false,
// };

// for (let key in myPet) {
//   //   let value = myPet[key];
//   console.log(key);
// }

// const student = {
//   name: {
//     firstName: "mehedy",
//     middleName: "hasan",
//     lastName: "Linkon",
//   },
//   subjects: ["bangla", "english"],
//   isMale: true,
//   roll: 34,
// };

// console.log(student.name.middleName);
// console.log(student.subjects[1]);

const name = {
  firstName: "mehedy",
  middleName: "hasan",
  lastName: "Linkon",
};

// let p = [];

// for (let key in name) {
//   p.push(key);
// }

// console.log(p.length);

console.log(Object.keys(name).length);
