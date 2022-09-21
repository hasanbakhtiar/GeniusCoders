// var ol:any = document.createElement('ul');
// document.body.appendChild(ol);
// var characterList =()=>{
//     fetch('https://rickandmortyapi.com/api/character')
//     .then((res:any)=>res.json())
//     .then((data:any)=>{
//         let li:string="";
//         console.log(data.results);
//         data.results.forEach((fd:any,i:number)=>{
//             return li+= `<li><span>${i+1}</span>${fd.name}</li>`
//         })
//         ol.innerHTML = li;
//     })
//     .catch((err)=>console.log(`something worng:${err}`))
// } 
// characterList();
var ol = document.createElement('ul');
document.body.appendChild(ol);
var characterList = function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var div = "";
        data.map(function (fd) {
            div += "<div>\n                <img src=\"".concat(fd.image, "\" width=\"150\"/>\n                <p>").concat(fd.price, "</p>\n                </div>");
        });
        ol.innerHTML = div;
    })["catch"](function (err) { return console.log("something worng:".concat(err)); });
};
characterList();
