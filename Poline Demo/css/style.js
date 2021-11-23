$(function() {
  $('#open').click(function() {
    $('.sp-menu').css('display', 'block');
    $('#open').css('display', 'none');
  });

  $('#close').click(function() {
    $('.sp-menu').css('display', 'none');
    $('#open').css('display', 'block');
  });

  var $amount = 122;
  $('.page-top').hide();

  $(window).scroll(function() {
    var scrollPoint = $(this).scrollTop();
    (scrollPoint > $amount)?$('.page-top').fadeIn():(scrollPoint < $amount)?$('.page-top').fadeOut():$('.page-top').show();
  });

  $('.page-top').click(function() {
    var $position = 0;
    $('html,body').animate({scrollTop:$position}, 400);
  });
});