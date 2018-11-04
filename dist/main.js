"use strict";
// TypeScript
// git init
// wget -O .gitignore https://www.gitignore.io/api/linux,macos,windows,intellij+all,webstorm+all,visualstudiocode
// npm init -y
// npm install -DE typescript
// npx tsc --init
//      "lib": ["DOM", ESNext]
//      "outDir": "./dist/",
//      touch main.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Generics
*/
function map(arr, fn) {
    var newArray = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        newArray.push(fn(i));
    }
    return newArray;
}
/*
    Classes
    - Alternative zu Interfaces
    - Vererbung
    - Abstract
    - Statische Attribute und Methoden
    - Access Modifier
*/
var Animal = /** @class */ (function () {
    function Animal(weight) {
        this.weight = weight;
    }
    return Animal;
}());
var Pet = /** @class */ (function (_super) {
    __extends(Pet, _super);
    // protected name?: string;
    function Pet(weight) {
        return _super.call(this, weight) || this;
    }
    Pet.prototype.giveName = function (name) {
        this.name = name;
    };
    return Pet;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(weight) {
        var _this = _super.call(this, weight) || this;
        Dog.dogs++;
        return _this;
    }
    Dog.getAmountOfDogs = function () {
        console.log('There are ' + Dog.dogs + ' dogs in town.');
    };
    Dog.prototype.speak = function () {
        console.log((this.name || 'Unnamed Dog') + ": Wuff!");
    };
    Dog.prototype.getWeight = function () {
        console.log((this.name || 'Unnamed Dog') + " weighs " + this.weight + " kg.");
    };
    Dog.dogs = 0;
    return Dog;
}(Pet));
var bobby = new Dog(8.4);
bobby.giveName('Bobby');
bobby.speak();
bobby.getWeight();
// bobby.weight = 3.4;
Dog.getAmountOfDogs();
var Robot = /** @class */ (function () {
    function Robot(cpu) {
        this.cpu = cpu;
    }
    Robot.prototype.getCpu = function () {
        console.log('\nRobot\'s cpu is ' + this.cpu);
    };
    return Robot;
}());
var r2d2 = new Robot('Intel Core i30');
r2d2.getCpu();
/*
    Export/Import
*/
var config_1 = require("./config");
console.log("\nConfig loaded!\nLanguage is \"" + config_1.config.language + "\".\nFormat is \"" + config_1.config.format + "\".\n");
/*
    Type Definition Files
*/
// "declaration": true,                   /* Generates corresponding '.d.ts' file. */
// "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
// "sourceMap": true,
//# sourceMappingURL=main.js.map