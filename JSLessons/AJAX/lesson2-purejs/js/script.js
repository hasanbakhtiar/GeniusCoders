const btn = document.querySelector('button');

const loadData = ()=>{


  if (document.querySelector('p').className == 'active') {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.querySelector('p').innerHTML = this.responseText;
      }
    xhttp.open("GET", "../data/text.txt", true);
    xhttp.send();
    document.querySelector('p').className = '';
  }else{
    document.querySelector('p').innerHTML = '';
    document.querySelector('p').className = 'active';

  }




//     const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.querySelector('p').innerHTML = this.responseText;
//   }
//   xhttp.open("GET", "../data/text.txt");
//   xhttp.send();
}

btn.onclick = loadData;