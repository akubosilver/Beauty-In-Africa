//swiper section
var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      // device-width >= 280
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // device-width <= 730
      730: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    },
    autoplay: {
      delay: 15500,
      disableOnInteraction: false,
    },
  });
//   scroll background
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});