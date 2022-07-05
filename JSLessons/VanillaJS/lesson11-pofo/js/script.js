const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');
const fullMenu = document.querySelector('.full-menu');
// nav selector end
// ===================================================
const navBtn = document.querySelector('#navBtn');
const fmBtn = document.querySelector('#fmBtn');
// button selector end
// ===================================================



const showMenu=()=>{
    nav.attributes[0].value = 'zminus';
    hero.attributes[0].value = 'zminus';
    fullMenu.attributes[0].value = 'zplus';
}

const hideMenu=()=>{
    nav.attributes[0].value = 'zplus';
    hero.attributes[0].value = 'zplus';
    fullMenu.attributes[0].value = 'zminus';
}

// function end
// ===================================================



navBtn.onclick = showMenu;
fmBtn.onclick = hideMenu;
// action end
// ====================================================
