// TypeScript
// git init
// wget -O .gitignore https://www.gitignore.io/api/linux,macos,windows,intellij+all,webstorm+all,visualstudiocode
// npm init -y
// npm install -DE typescript
// npx tsc --init
//      "lib": ["DOM", ESNext]
//      "outDir": "./dist/",
//      touch main.ts

/*
    Zwei der bedeutendsten Eigenschaften von TypeScript sind zum einen die Typisierung und die damit einhergehende
    Code Intellisense sowie die Verwendung der neusten JavaScript Funktionen ohne Berücksichtigung des Browser-Supports.
*/

/*
Interfaces & Types
*/

// enum Role {
//     'admin',
//     'moderator',
//     'user'
// }
type Role = 'admin' | 'moderator' | 'user';

interface Author {
    id: number;
    nickname: string;
    fullName?: string;
    role: Role;
    hobbies: string[];
    phoneNumbers: Array<number>;
}

interface Post {
    id: number;
    message: string;
    created: Date;
    author: Author;
}

interface Loggable {
    log: (message: string) => void;
    error(message: string): void;
}

/*
    Generics
*/

function map<T1, T2> (arr: Array<T1>, fn: (item: T1) => T2): Array<T2> {
    const newArray = [];
    for(const i of arr) {
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

abstract class Animal {
    public readonly weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }

    public abstract speak(): void;

    public abstract getWeight(): void;
}

abstract class Pet extends Animal {
    protected name: string | undefined;
    // protected name?: string;

    constructor(weight: number) {
        super(weight);
    }

    public giveName(name: string) {
        this.name = name;
    }
}

class Dog extends Pet {
    static dogs = 0;
    constructor(weight: number) {
        super(weight);
        Dog.dogs++;
    }

    public static getAmountOfDogs() {
        console.log('There are ' + Dog.dogs + ' dogs in town.');
    }

    public speak() {
        console.log(`${this.name || 'Unnamed Dog'}: Wuff!`);
    }

    public getWeight(): void {
        console.log(`${this.name || 'Unnamed Dog'} weighs ${this.weight} kg.`)
    }
}

const bobby = new Dog(8.4);
bobby.giveName('Bobby');
bobby.speak();
bobby.getWeight();
// bobby.weight = 3.4;
Dog.getAmountOfDogs();

class Robot {
    constructor(private cpu: string) {

    }
    getCpu() {
        console.log('\nRobot\'s cpu is ' + this.cpu);
    }
}
const r2d2 = new Robot('Intel Core i30');
r2d2.getCpu();

/*
    Export/Import
*/

import { config } from './config';
console.log(`
Config loaded!
Language is "${config.language}".
Format is "${config.format}".
`);

/*
    Type Definition Files
*/

// "declaration": true,                   /* Generates corresponding '.d.ts' file. */
// "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
// "sourceMap": true,