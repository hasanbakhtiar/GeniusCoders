const textOne = document.querySelector('#one');
const textTwo = document.querySelector('#two');

// textOne.innerHTML = window.innerWidth+"px";
// textTwo.innerHTML = window.innerHeight+"px";

// textOne.innerHTML = screen.availWidth+"px";
// textTwo.innerHTML = screen.availHeight+"px";

// textOne.innerHTML = screen.width+"px";
// textTwo.innerHTML = screen.height+"px";

// textOne.innerHTML = screen.colorDepth;
// textTwo.innerHTML = screen.pixelDepth;

// textOne.innerHTML = window.location.hostname;
// textOne.innerHTML = window.location.pathname;
// textOne.innerHTML = window.location.href;
textOne.innerHTML = window.location.protocol;
document.querySelector('button').onclick = ()=>{
    history.forward()
}