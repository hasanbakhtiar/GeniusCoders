// var infoOne : number;
// infoOne = 5;
// console.log(infoOne);
// var selectData : boolean = true;
// if (selectData) {
//     const laptopName : string = "Acer";
//     console.log(laptopName);
// }
// var infoArr : Array<number> = [1,2,3,4,5];
// var infoArr : number[] = [1,2,3,4,5];
// console.log(infoArr);
// var infoFunc = (a:number,b?:number):void=>{
//     console.log(a);
// }
// console.log(infoFunc(10));
// infoFunc(11)
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }
    Person.prototype.sayHi = function () {
        return "Hello,".concat(this.iname);
    };
    return Person;
}());
var infoPerson = new Person("Jhon", "Morgan", 30);
console.log(infoPerson.sayHi());
