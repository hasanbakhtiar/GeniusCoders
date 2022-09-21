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



var ol:any = document.createElement('ul');
document.body.appendChild(ol);

var characterList =()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res:any)=>res.json())
    .then((data:any)=>{
            let div = "";
            data.map((fd)=>{
                div +=  `<div>
                <img src="${fd.image}" width="150"/>
                <p>${fd.price}</p>
                </div>`;
            })
            ol.innerHTML = div;
    })
    .catch((err)=>console.log(`something worng:${err}`))
} 
characterList();