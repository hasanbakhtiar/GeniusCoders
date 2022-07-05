const modeBtn = document.querySelector('.mode');
const nav = document.querySelector('nav');


const pageMode = ()=>{
    if (nav.className == 'navbar navbar-expand-lg navbar-light bg-light' ) {
        nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
        modeBtn.innerHTML = '☀️';
        modeBtn.className = 'mode btn btn-light' 
    }else{
        nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
        modeBtn.innerHTML = '🌙';
        modeBtn.className = 'mode btn btn-dark' 
    }

    // document.querySelector('p').classList.toggle('btn-success');
    // document.querySelector('p').attributes[0].value='btn btn-success';
}

modeBtn.onclick = pageMode;