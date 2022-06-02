// function Car (name,model,year,color){
//     this.ad = name;
//     this.madel= model;
//     this.il= year;
//     this.reng = color;
// }

// Car.prototype.teze = false;
// const myCarData  = new Car("BMW","X5",2002,"black");

// console.log(myCarData.ad);
// console.log(myCarData.teze);

// const Car = (name, model, year, color) => {
//   this.ad = name;
//   this.madel = model;
//   this.il = year;
//   this.reng = color;
// };

// Car.prototype.teze = false;
// const myCarData = new Car("BMW", "X5", 2002, "black");

// console.log(myCarData.ad);
// console.log(myCarData.teze);

class Car {
  constructor(name, model, year, color) {
    this.ad = name;
    this.madel = model;
    this.il = year;
    this.reng = color;
  }
  calcualteAge(text){
    return `${text} : ${this.ad}, is ${new Date().getFullYear()-this.il} `
  }
}

Car.prototype.teze = false;
const myCarData = new Car("BMW", "X5", 2002, "black");


console.log(myCarData.ad);
console.log(myCarData.teze);
console.log(myCarData.calcualteAge('Car Age'));