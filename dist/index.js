"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
    }
    setAge(age) {
        if (age >= 0) {
            this.age = age;
        }
        else {
            console.error("Age cannot be negative.");
        }
    }
    getName() {
        return this.name;
    }
}
// class product
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    describe() {
        return `${this.name} - Price: $${this.price}`;
    }
    setPrice(price) {
        if (price >= 0) {
            this.price = price;
        }
        else {
            console.error("Price cannot be negative.");
        }
    }
    getName() {
        return this.name;
    }
}
//class product
const person = new Person("Alice", 25);
console.log(person.introduce());
const product = new Product("Smartphone", 499.99);
console.log(product.describe());
