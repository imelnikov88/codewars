// 🤔DESCRITION
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

// 😉TEST
// const Test = require('@codewars/test-compat');

// describe("addProperty", function() {
//   var obj = {};
//   before(function() {
//     obj = {};
//     addProperty(obj, "name", "Palle");
//   });
//   it("Should set the value of the property", function() {
//     Test.expect(obj.name === "Palle");
//   });
//   it("Should allow setting the new property to another value", function() {
//     obj.name = "Dylan";
//     Test.expect(obj.name === "Dylan");
//   });
//   it("Should throw an error if the property already exists", function() {
//     Test.expectError("Did not throw expected error", function() {
//       addProperty(obj, "name", "Palle");
//     });
//   });
// });

// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить новое значение для этого свойства. Если свойство уже существует в объекте, должна быть выброшена ошибка.

// 😎SOLUTIN

function addProperty(obj, prop, value) {
  if (prop in obj) {
    throw new Error("Property already exists");
  }

  obj[prop] = value;
}

const obj = {};

addProperty(obj, "name", "Alex");
console.log(obj); // { name: "Alex" }

// function addProperty(obj, prop, value) {
//   if (prop in obj) throw new Error()
//   obj[prop] = value
// }