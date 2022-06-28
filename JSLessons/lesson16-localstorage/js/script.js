const multiLangItem = document.querySelectorAll('a');
const multiLangBtn = document.querySelector('.multiBtn');
// lang data Array
const az = ['Ana Sehife', 'Haqqimizda', 'Xidmetlerimiz', 'Meqale', 'Elaqe']
const en = ['Home', 'About', 'Services', 'Blog', 'Contact'];
// multi lang function
const multiLang = () => {
    if (multiLangBtn.innerHTML === "AZ") {
        for (let q = 0; q < az.length; q++) {
            multiLangItem[q].innerHTML = az[q];
        }
        multiLangBtn.innerHTML = "EN";
        localStorage.setItem('multilang', az);
        localStorage.setItem('multibtn', "EN");
    } else {
        for (let q = 0; q < en.length; q++) {
            multiLangItem[q].innerHTML = en[q];
        }
        multiLangBtn.innerHTML = "AZ";
        localStorage.setItem('multilang', en);
        localStorage.setItem('multibtn', "AZ");

    }
}


// event
multiLangBtn.onclick = multiLang;


// call localstorage
for (let q = 0; q < az.length; q++) {
    multiLangItem[q].innerHTML = localStorage.getItem('multilang').split(",")[q];
}
multiLangBtn.innerHTML = localStorage.getItem('multibtn');

multiLangBtn.accessKey = "j";

document.querySelector('.a').nextSibling.innerHTML = "Hello";