const modeBtn = document.querySelector('.mode');
const nav = document.querySelector('nav');


const pageMode = ()=>{
    if (modeBtn.innerHTML === "Dark") {
        const darkMode = 'navbar navbar-expand-lg navbar-dark bg-dark'
        nav.className = darkMode;
        localStorage.setItem('mode',darkMode);
        localStorage.setItem('btn','mode btn btn-light');
        localStorage.setItem('btnText','Light')
        modeBtn.innerHTML = 'Light';
        modeBtn.className = 'mode btn btn-light';

    }else{
        const lightMode =  'navbar navbar-expand-lg navbar-light bg-light';
        nav.className = lightMode;
        localStorage.setItem('mode',lightMode);
        localStorage.setItem('btn','mode btn btn-dark');
        localStorage.setItem('btnText','Dark')
        modeBtn.innerHTML = 'Dark';
        modeBtn.className = 'mode btn btn-dark';
    }
}

nav.className = localStorage.getItem('mode');
modeBtn.className = localStorage.getItem('btn');
modeBtn.innerHTML = localStorage.getItem('btnText');
modeBtn.onclick = pageMode;


// localStorage.setItem('name','Elmin');

// document.querySelector('.test').innerHTML = localStorage.getItem('name');

