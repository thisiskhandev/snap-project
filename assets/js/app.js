document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    indicators: true,
  });
});

$(document).ready(function () {
  $(".beforeAfter").beforeAfter({
    movable: true,
    clickMove: true,
    position: 60,
    separatorColor: "#fafafa",
    bulletColor: "#fafafa",

    // onMoveStart: function (e) {
    //   console.log(event.target);
    // },
    // onMoving: function () {
    //   console.log(event.target);
    // },
    // onMoveEnd: function () {
    //   console.log(event.target);
    // },
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
