$(document).ready(function () {

  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
  })
  

  /* $('.site__menu').on('click keypress', function() {
    $(this).find('.bar').toggleClass('animate');
    $('.header').toggleClass('active');
    $('.site__menu > span').text(function(i, text){
      return text === "Menu" ? "Close" : "Menu";
    })
  }) */


});