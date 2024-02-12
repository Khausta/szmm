const promoSwiper = new Swiper('.promo__swiper', {
  loop: true,
  autoplay: true,
  // centeredSlides: true,
  // centered: true,
  slidesPerView: 1,
  pagination: {
    el: '.promo__pagination',
    clickable: true
  },

});


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
  pagination: {
    el: '.license__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.license__arrow-next',
    prevEl: '.license__arrow-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});




function init () {
  let map = new ymaps.Map("YMapsID", {
      center: [55.601141569145035,37.170822499999936],
      zoom: 16
  });
}

ymaps.ready(init);


