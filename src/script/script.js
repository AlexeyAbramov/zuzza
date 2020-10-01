$(document).ready(function () {
  $(".about-slider").slick({
    infinite: true,
    fade: true,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
    nextArrow: '<div class="arrow arrow_left"></div>',
    prevArrow: '<div class="arrow arrow_right"></div>',
  });
});