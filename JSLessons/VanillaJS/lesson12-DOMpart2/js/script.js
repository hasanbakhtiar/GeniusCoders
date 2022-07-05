// const btn= document.querySelector('button');
// const text = document.querySelector('p');

// const hide=()=>{
//     document.querySelector('h1').innerHTML = text.className;
// text.className ="hide";
// text.classList.toggle("hide");
// }

// btn.onclick = hide;

// multilang Start
const langBtn = document.querySelector("#langBtn");
const langItems = document.querySelectorAll(".multilangItems");
// selector end

const az = ["Ana Sehife", "Haqqimizda", "Xidmetlerimiz", "Meqale", "Elaqe"];
const en = ["Home", "About", "Service", "Blog", "Contact"];
const multiLang = () => {
  if (langBtn.innerHTML === "EN") {
    for (let x = 0; x < en.length; x++) {
      langItems[x].innerHTML = en[x];
    }
    langBtn.innerHTML = "AZ";
  } else {
    for (let x = 0; x < az.length; x++) {
      langItems[x].innerHTML = az[x];
    }
    langBtn.innerHTML = "EN";
  }
};
// console.log(az.length);

// function end

langBtn.onclick = multiLang;

// event end
// multilang End
