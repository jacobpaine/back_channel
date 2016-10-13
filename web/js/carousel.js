$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('.carousel-item').click(function() {
    // $('.'+this.id).fadeToggle();
    $(".first").fadeToggle();

  });

});
