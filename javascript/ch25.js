class Person {
  constructor(name) {
    this.name = name;
    return 100;
    //return {};
  }
  sayHi() {
    console.log(`hi ${this.name}`);
  }
  static myName() {
    console.log(`my name is ${this.name}`);
  }
}

const PersonFunction = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    console.log(`hi ${this.name}`);
  };
  Person.myName = function () {
    console.log(`my name is ${this.name}`);
  };

  return Person;
})();
const personTest = new Person("minsu");
personTest.sayHi();
Person.myName();
const personTest2 = new PersonFunction("minsu");
personTest2.sayHi();
PersonFunction.myName();

console.log(typeof Person);

class PersonClass {
  name = "lee";
  static #lastName = "kim";
  getName = function () {
    console.log(`name is ${this.name}`);
  };
  getLastName() {
    console.log(`last name is ${this.#lastName}`);
  }
  static getTest() {
    console.log(`last name is ${this.#lastName}`);
  }
}

const newPerson = new PersonClass();
console.log(newPerson);
newPerson.getName();
PersonClass.getTest();

let arr = [];
arr["a"] = 1;
arr[0] = 1;
console.log(arr);
console.log(typeof arr);
console.log(arr["a".charCodeAt(0)]);
