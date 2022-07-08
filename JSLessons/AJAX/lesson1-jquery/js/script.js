// $(function(){
//     $('button').click(function(){
//         $('p').load('../data/text.txt')
//     })
// })


$("button").click(function(){
    $("p").load("../data/text.txt h1", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });