class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
      }

  }

let myCar1 = new Car("Ford", 2014);

console.log(myCar1.name + " "+myCar1.year);
console.log(myCar1.age() +" years old");