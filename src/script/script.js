$(document).ready(function () {
  $("#minus").on("click", function () {
      $input = $(this).parent().find('input');
      let cnt = parseInt($input.val());
      cnt = cnt < 1 ? 0 : cnt-1;
      $input.val(cnt);
  });
  $("#plus").on("click", function () {
    $input = $(this).parent().find('input');
    let cnt = parseInt($input.val())+1;
    $input.val(cnt);
  });
  $(".about-slider").slick({
    infinite: true,
    fade: true,
    pauseOnFocus: false,
    nextArrow: '<div class="arrow arrow_left"></div>',
    prevArrow: '<div class="arrow arrow_right"></div>',
  });
  $(".list-feedback").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    pauseOnFocus: false,
    prevArrow: '<div class="feedback__arrow arrow_left"></div>',
    nextArrow: '<div class="feedback__arrow arrow_right"></div>',
  });
  $(".content-product__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    pauseOnFocus: false,
    prevArrow: '<div class="content-product__arrow arrow_left"></div>',
    nextArrow: '<div class="content-product__arrow arrow_right"></div>',
  });
});
