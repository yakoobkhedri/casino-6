// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// swiper
var popular = new Swiper(".popular", {
  slidesPerView: 1.3,
  spaceBetween: 26,
  centeredSlides: true,   // فعال کردن حالت وسط چین
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
});
var testimonials = new Swiper(".testimonials", {
  slidesPerView: 1,
  spaceBetween: 26,
  centeredSlides: true,   // فعال کردن حالت وسط چین
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});