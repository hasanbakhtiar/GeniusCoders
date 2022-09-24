// var ol: any = document.querySelector<HTMLOListElement>("ul");
// var btn: any = document.querySelectorAll<HTMLButtonElement>("button");
// var listStart: number = 0;
// var listEnd: number = 50;
// var countryList = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res: any) => res.json())
//     .then((data: any) => {
//       let li = "";
//       for (let x: number = listStart; x < listEnd; x++) {
//         li += `<li><span>${x + 1}-</span>${data[x].name.common}</li>`;
//       }
//       ol.innerHTML = li;
//     });
// };
// btn[0].onclick = () => {
//   listStart = 0;
//   listEnd = 50;
//   countryList();
// };
// btn[1].onclick = () => {
//   listStart = 50;
//   listEnd = 100;
//   countryList();
// };
// btn[2].onclick = () => {
//   listStart = 100;
//   listEnd = 150;
//   countryList();
// };
// btn[3].onclick = () => {
//   listStart = 150;
//   listEnd = 200;
//   countryList();
// };
// btn[4].onclick = () => {
//   listStart = 200;
//   listEnd = 250;
//   countryList();
// };
// countryList();
// cd ts
// tsc script.ts -w
fetch('https://rickandmortyapi.com/api/character')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    console.log(data);
    data.results.map(function (a) {
        console.log(a.name);
    });
})["catch"](function (err) { return console.log("this is wrong:".concat(err)); });
