<?php include_once "./components/header.php" ?>

<div class="swiper-container" id="swiperContent">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><?php include_once  "./components/heroSec.php" ?></div>
    <div class="swiper-slide"><?php include_once  "./components/msg-from-owner-sec.php" ?></div>
    <div class="swiper-slide">
      <main class="what_we_do_sec">
        <section class="container">
          <section class="row text-center">
            <div class="col-12">
              <h4 class="sub_title">What We Do</h4>
              <h2 class="title">Services</h2>
          </section>
        </section>
      </main>
    </div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
    <div class="swiper-slide">Slide 6</div>
    <div class="swiper-slide">Slide 7</div>
    <div class="swiper-slide">Slide 8</div>
    <div class="swiper-slide">Slide 9</div>
    <div class="swiper-slide">Slide 10</div>
  </div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
</div>

<?php include_once "./components/footer.php" ?>