

// GLOBAL VARIABLES
var navwrap = $("#navwrap");
var buyButton = $("#buyButton");



function fixBuy() {
  if ( $(window).scrollTop() > buyButton.data("top")) {
    buyButton.removeClass("buy_static").addClass("buy_fixed");
  }else{
    buyButton.removeClass("buy_fixed").addClass("buy_static");
  }
}

navwrap.data("top", navwrap.offset().top); // set original position on load
buyButton.data("top", buyButton.offset().top); // set original position on load

$(window).scroll(function(){
  fixBuy();
  fixNav();
});


$("#hide").click(function(){
    $("#buyButton").hide();

});

$("#show").click(function(){
    $("p").show();

});




var vid = document.getElementById("myVideo");



if (!vid.paused) {$('.play').show();} else {
            $('.play').hide();
            $('.pause').show();
        }

function playVid() {
    vid.play();
  $('.play').hide();
  $('.pause').show();


}

function pauseVid() {
    vid.pause();
   $('.pause').hide();
  $('.play').show();

}

$(".buyButton").hover(function(){
        $('.pause-svg').toggleClass('hidden');
});