// request - sorgu 
// response - cavab


// const comeData = new Promise((success,reject)=>{
//     const resData = true;
//     if (resData) {
//         success("this response is successfully");
//     }else{
//         reject("this response is wrong");

//     }
// })
// comeData.then((res)=>console.log('Data:',res))
//         .catch(err=>console.log("Error:",err))


// const axios = require('axios');

// function comeCountry(){
//     axios.get('https://restcountries.com/v3.1/all')
//     .then((res)=>console.log(res))
//     .catch(err=>console.log(err))
// }
// comeCountry();

const  axios  = require("axios");

async function comeCountry(){
    const contryList = await axios.get("https://restcountries.com/v3.1/all");
    // console.log(contryList);
    let li ;
    contryList.map((fd)=>{
        return li += `<li>${fd.name}</li>` 
    })
    document.querySelector('ul').innerHTML = li;
}
comeCountry();


