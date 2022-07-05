// $(function() { 
//     $('ne ile').nece(function(){
//         $('neyi').etsin;
//     })
//   })

// $(function(){
//     $('button').click(function(){
//         $('h1').hide();
//     });
// });


// $(document).ready(function () {
//     $('button').click(function () {
//         $('h1').hide();
//     });
// });


// $(function(){
//     $('button').click(function(){
//         // $('#test').hide(1000);
//         // $('.one').hide(1000);
//         // $(this).hide(1000);

//     });
// });
// SELECTORS
// $("*")	                Selects all elements	
// $(this)	                Selects the current HTML element	
// $("p.intro")	            Selects all <p> elements with class="intro"	
// $("p:first")	            Selects the first <p> element	
// $("ul li:first")	        Selects the first <li> element of the first <ul>	
// $("ul li:first-child")	Selects the first <li> element of every <ul>	
// $("[href]")	            Selects all elements with an href attribute	
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
// $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
// $(":button")	            Selects all <button> elements and <input> elements of type="button"	
// $("tr:even")	            Selects all even <tr> elements	
// $("tr:odd")	            Selects all odd <tr> elements

// EVENTS
// click	
// keypress	
// submit	
// load
// dblclick	
// keydown	
// change	
// resize
// mouseenter	
// keyup	
// focus	
// scroll
// mouseleave	 	
// blur	
// unload


$(function () {
    $('button').click(function () {
        //   $('.one').toggle(1000);
        //   $('.one').show(1000);
        //   $('.one').fadeIn(1000);
        //   $('.one').fadeOut(1000);
        //   $('.one').fadeToggle(1000);
        //   $('.one').fadeToggle('slow');
        //   $('.one').fadeTo('slow',.1);
        //   $('.one').slideUp(1000);
        //   $('.one').slideDown(1000);
        //   $('.one').slideToggle(1000);
        // $('.one').animate({
        // left: '250px',
        // opacity: '0.5',
        // height: '150px',
        // width: '150px'
        // left: '250px',
        // height: '+=150px',
        // width: 'toggle',
        // width: '+=150px'
        // },1000);

        // $('.one').toggle(1000,()=>{
        // alert('Hadise tamamlandi');
        // document.querySelector('h1').style.color = "red";
        // });
        // $('.one').css("color","red");
        // $('.one').css({"color":"red","fontSize":"40px"});
        // $('.one').addClass('green');
        // $('.one').removeClass('green');
        // $('.one').toggleClass('green');
        // $('.one').css("color", "red").slideUp(2000).slideDown(2000);
        // $('.one').html("<b>Mello</b>");
        // $('.one').text("<b>Mello</b>");

        if ($('.one').html() == 'Hello') {
            $('.one').html("Mello");

        } else {
            $('.one').html("Hello");

        }


    });
});



