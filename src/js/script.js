const productsSwiper = new Swiper('.production__swiper', {
  // loop: true,
  centeredSlides: true,
  centered: true,
  slidesPerView: 1,
  pagination: {
    el: '.production__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.production__arrow-next',
    prevEl: '.production__arrow-prev',
  },
});

const licenseSwiper = new Swiper('.license__swiper', {
  // loop: true,
  centeredSlides: true,
  centered: true,
  slidesPerView: 4,
  pagination: {
    el: '.license__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.license__arrow-next',
    prevEl: '.license__arrow-prev',
  },
});