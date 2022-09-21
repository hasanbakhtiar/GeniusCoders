// interface IDatabase {
//     add();
//     get();
//     update();
//     delete();
// }
// class MySql implements IDatabase {
//     add(){
//         console.log("MySql add");
//     }
//     get(){
//         console.log("MySql get");
//     }
//     update(){
//         console.log("MySql update");
//     }
//     delete(){
//         console.log("MySql delete");
//     }
// }
// class MongoDB implements IDatabase {
//     add(){
//         console.log("MongoDB add");
//     }
//     get(){
//         console.log("MongoDB get");
//     }
//     update(){
//         console.log("MongoDB update");
//     }
//     delete(){
//         console.log("MongoDB delete");
//     }
// }
// function AddDataBase(dt:IDatabase){
//     dt.add();
// }
// function DeleteDatabase(dt:IDatabase){
//     dt.delete();
// }
// AddDataBase(new MySql);
// DeleteDatabase(new MongoDB);
var car = "red";
var colorCar = function (color) {
    car = color;
};
colorCar("grey");
console.log(car);
