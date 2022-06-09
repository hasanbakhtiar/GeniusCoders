// ES5
// document.getElementsByTagName('p')[0].innerHTML = "Jale";
// document.getElementsByTagName('p')[0].innerText = "<b>Jale</b>";
// for(let x = 0; x<2;x++){

//     document.getElementsByClassName('test')[x].innerHTML = "Jale";
// }
// document.getElementById('beta').innerHTML = "Jale";


// ES6
// document.querySelector('p').innerHTML = "Jale";
// for(let x = 0; x<2;x++){
// document.querySelectorAll('p')[x].innerHTML = "Jale";
// }

// function dinamicText(){
//     document.querySelector('p').innerHTML = "Jale";
// }
// document.querySelector('button').addEventListener('click',dinamicText);


// const text = document.querySelector('h1');
// const btn = document.querySelector('button');

// const infoFunc =()=>{
    // text.innerHTML = "Jale";
    // text.style.color = "red";
    // text.style.backgroundColor = "green";
    // text.attributes[0].value = "dark";

// }

// btn.addEventListener('click',infoFunc);
// btn.onclick = infoFunc;




const btn = document.querySelector('button');
const nav = document.querySelector('nav');

const toggleNav = ()=>{
    if (nav.attributes[0].value === "show") {
        nav.attributes[0].value = "hide";
        btn.innerHTML = ">";
    }else{
        nav.attributes[0].value = "show";
        btn.innerHTML = "X";
    }
}

btn.onclick = toggleNav;