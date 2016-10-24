$(document).ready(function(){

  $('.home').click(function() {
// fade out anything
    $(".top-img").fadeOut(400);
    $(".bottom-left").fadeOut(400);
    $(".bottom-right").fadeOut(400);

// fade in specific
    $(".home-top-img").fadeToggle(500);
    $(".home-bottom-right").fadeToggle(500);
    $(".home-bottom-left").fadeToggle(500);

  });

  $('.menu').click(function() {
    $(".home-bottom-left").fadeToggle();
    $(".home-bottom-right").fadeToggle();
    $(".home-top-img").fadeToggle();
  });

  $('.hours').click(function() {
    $(".top-img").fadeOut(400);
    $(".bottom-left").fadeOut(400);
    $(".bottom-right").fadeOut(400);

    $(".hours-top-img").fadeToggle(500);
    $(".hours-left-img").fadeToggle(500);
    $(".hours-right-img").fadeToggle(500);
    $(".hours-bottom-left").fadeToggle(500);
    $(".hours-bottom-right").fadeToggle(500);
  });

  $('.mission').click(function() {
    $(".top-img").fadeOut(400);
    $(".bottom-left").fadeOut(400);
    $(".bottom-right").fadeOut(400);

    $(".mission-top-img").fadeToggle(500);
    $(".mission-bottom-left").fadeToggle(500);
    $(".mission-bottom-right").fadeToggle(500);

  });

});
