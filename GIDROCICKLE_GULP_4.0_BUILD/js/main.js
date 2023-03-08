$(function () {
  $('.banner__section-slider').slick({
    dots: true,
    prevArrow: '<button class="banner__section-slider-btn banner__section-slider-btnprev"><img src="../img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner__section-slider-btn banner__section-slider-btnnext"><img src="../img/arrow-right.svg" alt=""></button>',
  });


  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab__active');
    $($(this).parent().siblings().find('div')).removeClass('tab__content-active');

    $(this).addClass('tab__active');
    $($(this).attr('href')).addClass('tab__content-active');
  });

  $('.product__item-favorite').on('click', function () {

    $(this).toggleClass('product__item-favorite-active')

  });

  $('.products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="../img/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="../img/arrow-black-right.svg" alt=""></button>',
  // });
  });

  $('filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
      $(this).toggleClass('filter__item-drop-active');
      $(this).next().slideToggle('100');
  });

  $(".js-range-slider").ionRangeSlider({
    grid: false,
    type: "double",
    min: 100000,
    max: 500000,
    from: 150000,
    to: 275000

  });

  $('.catalog__filter-btn-grid').on('click', function () {
    $(this).addClass('catalog__filter-button-active');
    $('.catalog__filter-btn-line').removeClass('catalog__filter-button-active');
    $('.product__item_wrapper').removeClass('product__item_wrapper-line')
  });

  $('.catalog__filter-btn-line').on('click', function () {
    $(this).addClass('catalog__filter-button-active');
    $('.catalog__filter-btn-grid').removeClass('catalog__filter-button-active');
    $('.product__item_wrapper').addClass('product__item_wrapper-line')
  });

  $(".rate-Yo").rateYo({
    ratedFill: "#1c62cd",
    spacing: "7px",
    normalFill: "#c4c4c4"
  });

  $('.menu__btn').on('click', function () {
    $('.menu__mobile-list').toggleClass('menu__mobile-list-active')
  });

});




