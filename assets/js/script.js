console.log(1);

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  speed: 500,
  loop: true,
  loopPreventsSlide: true,
  preloadImages: true,
  loopFillGroupWithBlank: true,
  disableOnInteraction: false,
  grabCursor: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  autoplay: { delay: 2000 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  preloadImages: true,
  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true
  },
});
