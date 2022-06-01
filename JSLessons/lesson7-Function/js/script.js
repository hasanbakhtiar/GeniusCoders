// const infoObc = {};
// const infoObc1= new Object();

// const infoCar = {
//    data: [
//        {
//         brand: "Mercedes",
//         model: "s600",
//         year: 2000,
//         color: "red",
//         new: true,
//        },
//        {
//         brand: "BMW",
//         model: "X5",
//         year: 1995,
//         color: "white",
//         new: false,
//         otherModel:['X1','X3','X7']
//        }
//    ]
// };

// console.log(infoCar.new);
// console.log(infoCar.otherModel[2]);
// console.log(infoCar.data[1].brand);

// ==========================================================================
// Function START

// function info () {
//     console.log("Hello");
// }
// info();

// function info(){
//      return "Hello1";
// }

// console.log(info());

// function info(a=10,b=30) {
//     return a+b;
// }

// console.log(info(5,10));

// const info = function(text,name){
//         return text+name;
// }

// console.log("Hello"," Elmin");

// const info = function(name){
//     return `Hello, ${name}`
// }
// console.log(info("Elmin"));

// (function info(name="Shamil"){
//     console.log("Hello "+name);
// })("Elmin")

// function info (name){
//     console.log("Hello "+name);
// }

// info("Elmin");

// ARROW FUNC

// const info =(name)=>{
//     return `Hello, how a u ? ${name}`;
// }
// console.log(info("Arash"));

const time = 5;
const cash = time * 3+2;
var c = 10;
console.log(`my cash ${cash}$`);
const product1 = ["apple,", "banana,", "rice,", "bread,", "milk"];
const product2 = ["bread", "milk"];
const product3 = ["bread", "oil"];
const product4 = ["apple,", "banana,", "rice,", "bread,", "milk","oil"];

if (cash < 10) {
    let a= 5;
    switch (a) {
        case 4:
          if ((cash >= 3) && (cash < 5)) {
              console.log(...product3);
          }else if((cash > 4) && (cash <= 6)){
              console.log(...product2);
      
          }
          break;

          case 5:
          if ((cash > 3) && (cash <= 5)) {
              console.log(...product2);
          }else if((cash > 4) && (cash <= 7)){
              console.log(...product1);
      
          }
          break;

          case 9:
            if ((cash > 3) && (cash < 5)) {
                console.log(...product2);
            }else if((cash > 4) && (cash <= 9)){
                console.log(...product4);
        
            }
            break;
        default:
          console.log("havnt money");
      }
}else if(cash > 10){
    let b = c
    switch (b) {
        case 10:
            console.log("Hello");
            break;
            case 20:
                console.log("Salam");
                break;
        default:
            break;
    }
}

// Function END
// ==========================================================================
