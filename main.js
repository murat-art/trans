
/*dlya burgera s klikom */

$(document).ready(function () {
$('.menu-toggler').on('click', function() {
$(this).toggleClass('open');
$('.top-nav').toggleClass('open');
});


/*pri klike menu perenapravlyaet v nujnoe mesto*/

$('.top-nav .nav-link').on('click', function() {
$('.menu-toggler').removeClass('open');
$('.top-nav').removeClass('open');
});

/*pri klike menu sklorlit*/


$('nav a[href*="#"]').on('click', function() {
$('html, body').animate({
scrollTop: $($(this).attr('href')).offset().top - 100
}, 2000);
});

/*pri klike v nizu knopki sklorlit nazad k menu*/


$('#up').on('click', function() {
$('html, body').animate({
scrollTop: 0
}, 2000);
});

/*Viezjayut kartinki s leva ipravo*/

AOS.init({
	easing:'ease',
	duration:1000,
	once:true
});

});