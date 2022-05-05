$(document).ready(function () {

  $('.site__menu').on('click', function() {
    $(this).toggleClass('animate');
    $('.menu-desk').slideToggle();
  }) 
  
/* 
   $('.site__menu').on('click keypress', function() {
    $(this).find('.bar').toggleClass('animate');
    $('.header').toggleClass('active');
    $('.site__menu > span').text(function(i, text){
      return text === "Menu" ? "Close" : "Menu";
    })
  })  */

/* 

  let menuActive = $('.header__menu__nav a.active').data('item');
  $('.header__menu__image img[data-item="'+menuActive+'"]').addClass('js-visible').addClass('active');

  $('.header__menu__nav a').on('mouseenter',function(){
    let menuItem = $(this).data('item');
    $('.header__menu__image img[data-item="'+menuItem+'"]').addClass('js-visible').siblings().removeClass('js-visible').removeClass('active');
  })
 */


});