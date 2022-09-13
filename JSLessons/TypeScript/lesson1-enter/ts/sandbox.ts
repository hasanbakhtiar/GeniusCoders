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



class Person{
    public iname:string;
    public isurname:string;
    public iage:number;
    constructor(name:string,surname:string,age:number){
        this.iname = name;
        this.isurname = surname;
        this.iage = age;
    }
    sayHi(){
        return `Hello,${this.iname}`
    }
}
var infoPerson = new Person("Jhon","Morgan",30);
console.log(infoPerson.sayHi());
