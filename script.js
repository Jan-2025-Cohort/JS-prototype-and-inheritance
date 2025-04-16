// JS Prototypes & Inheritance Practice

/*
Exercise 1: Object.create() Inheritance
---------------------------------------
Example:
const vehicle = {
  hasWheels: true,
  move() {
    console.log("The vehicle is moving");
  }
};

const car = Object.create(vehicle);
car.doors = 4;

car.move();
console.log(car.hasWheels); // true
console.log(car.doors);     // 4

Task:
Create an object called `wizard` with a method `castSpell()`. Then create a new object `apprentice` that inherits from `wizard` and has a property `hatColor`. Call both methods and log both properties.
*/


/*
Exercise 2: Constructor Function Inheritance
--------------------------------------------
Example:
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Rex", "Labrador");
myDog.speak();
myDog.bark();

Task:
Create a constructor function `Gadget` with a method `powerOn()`. Then create a constructor function `Smartphone` that inherits from `Gadget` and has an additional method `takePhoto()`.
*/


/*
Exercise 3: Factory Function with Prototypes
--------------------------------------------
Example:
const userMethods = {
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

function createUser(name, age) {
  const user = Object.create(userMethods);
  user.name = name;
  user.age = age;
  return user;
}

const user1 = createUser("Alice", 25);
user1.sayHello();

Task:
Create a factory function `createRobot(model, functionType)` that returns a robot object with access to a shared method `performTask()` from `robotMethods`.
*/


/*
Exercise 4: Exploring Built-in Prototypes
------------------------------------------
Example:
const str = "hello";
const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(str));
console.log(Object.getPrototypeOf(arr));

Task:
Create a date object and a function. Use the console to log their prototypes. Try calling one method from each prototype.
*/


/*
Challenge Exercise 5: Custom Prototype Chain
---------------------------------------------
Example:
const baseCharacter = {
  health: 100,
  attack() {
    console.log("Base attack!");
  }
};

const warrior = Object.create(baseCharacter);
warrior.weapon = "sword";

const knight = Object.create(warrior);
knight.armor = "plate";

knight.attack();
console.log(knight.weapon); // sword
console.log(knight.health); // 100

Task:
Create a 3-level prototype chain with `baseMonster`, `zombie`, and `bossZombie`. Add unique properties (like `moan()`, `infectionLevel`) and one shared method `lurch()` that each level can access. Log the properties and call the shared method on `bossZombie`.
*/
