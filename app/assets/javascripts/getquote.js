//= require footable/footable.all.min.js
//= require slick/slick.min.js
$(".travel-destination").on("change", function() {
  var destination = $(this).val();
  if (destination != '-') {
    var item='<li class="newdest">' + destination + '<button class="libtn liicon icon-tick"></button></li>';
    $(".destinations").append(item);
    $(this).val('-');
  }
})

$(document).on('mouseover', ".destinations li", function(e) {
    // code from mouseover hover function goes here
    $(this).addClass('hover');
  $(this).find('button').removeClass('icon-tick');
  $(this).find('button').addClass('icon-cross');
});

$(document).on('mouseout', ".destinations li", function(e) {
     // code from mouseout hover function goes here
  $(this).removeClass('hover');
  $(this).find('button').addClass('icon-tick');
  $(this).find('button').removeClass('icon-cross');
});

$(document).on("click", ".destinations li", function() {
  $(this).remove();
});

$(function () {
    $('.input-daterange').datepicker({
        autoclose: true,
        startDate: new Date()
    });

    // $('.quoteform').validator();
});
