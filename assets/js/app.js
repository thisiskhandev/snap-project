console.log("test");

AOS.init({
  once: false,
  duration: 600,
});

var bodySwiper = new Swiper("#swiperContent", {
  direction: "vertical",
  mousewheel: true,
  slidesPerView: 1,
  speed: 800,
  loop: true,
});
var TrandingSlider = new Swiper(".coverflow2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "3",
  centeredSlides: true,
  centeredSlidesBounds: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {});

$(document).ready(function () {
  $(".js-img-compare").imagesCompare({
    // visible ratio of front element on init
    initVisibleRatio: 0.5,
    // "drag", "mousemove", "click"
    interactionMode: "drag",
    // default animation duration in ms
    animationDuration: 400,
    animationEasing: "swing",
    // add a html element on the separation
    addSeparator: true,
    // add a html drag handle element on the separation
    addDragHandle: true,
    // ratio precision, numbers after the decimal point
    precision: 4,
  });

  $(".slick_the_slides").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    lazyLoad: "ondemand",
  });
});
