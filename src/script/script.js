$(document).ready(function () {
  $(".about-slider").slick({
    infinite: true,
    fade: true,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
    nextArrow: '<div class="arrow arrow_left"></div>',
    prevArrow: '<div class="arrow arrow_right"></div>',
  });
  $(".list-feedback").slick({
    slidesToShow: 3,
    infinite: true,
    pauseOnFocus: false,   
    prevArrow: '<div class="feedback__arrow arrow_left"></div>',
    nextArrow: '<div class="feedback__arrow arrow_right"></div>',
  });
});