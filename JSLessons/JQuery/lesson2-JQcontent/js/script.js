// $(function(){
//     $('button').click(function(){
//         $('input').val(document.querySelector('h1').innerHTML)
//     })
// })

$(function(){
    $('button').click(function(){
        var txt = "";
        txt += "Width of div: " + $("h1").width() + "</br>";
        txt += "Height of div: " + $("h1").height();
        $('h1').text(txt);
    })
})
