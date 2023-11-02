class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    introduce(): string {
      return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
    }
  
    setAge(age: number): void {
      if (age >= 0) {
        this.age = age;
      } else {
        console.error("Age cannot be negative.");
      }
    }
  
    getName(): string {
      return this.name;
    }
  }

  // class product
  class Product {
    private name: string;
    private price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  
    describe(): string {
      return `${this.name} - Price: $${this.price}`;
    }
  
    setPrice(price: number): void {
      if (price >= 0) {
        this.price = price;
      } else {
        console.error("Price cannot be negative.");
      }
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  //class product
  const person = new Person("Alice", 25);
console.log(person.introduce());



const product = new Product("Smartphone", 499.99);
console.log(product.describe());
