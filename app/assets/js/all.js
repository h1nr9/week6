const swiper = new Swiper(".programming-language-Swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 1500,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 9,
    },
  },
});

const share_swiper = new Swiper(".shareSwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

//aos
AOS.init();
