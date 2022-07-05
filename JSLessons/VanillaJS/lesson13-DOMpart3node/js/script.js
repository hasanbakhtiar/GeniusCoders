const h1 = document.querySelector("h1");
const p = document.querySelector("p");

// p.innerHTML = h1.nodeName;
// p.innerHTML = h1.nodeType;
// p.innerHTML = h1.firstChild.nodeValue;
// p.innerHTML = h1.firstChild.nodeValue;
// p.innerHTML = h1.childNodes[0].nodeValue;

// p.innerHTML = h1.childNodes[0].firstChild.firstChild.nodeValue;
// const h2 = document.createElement('h2');
// const text = document.createTextNode("Salam");
//  h2.appendChild(text);
//  p.appendChild(h2);

const input = document.querySelector("input");
const add = document.querySelector("button");
const ol = document.querySelector("ol");


const todoApp = ()=>{
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);
    input.value = "";
    li.onclick = ()=>{
        li.style.textDecoration = "line-through";
    }
    li.ondblclick = ()=>{
        li.remove();
    }


}

add.onclick = todoApp;
