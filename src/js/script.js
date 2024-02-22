const promoSwiper = new Swiper('.promo__swiper', {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  pagination: {
    el: '.promo__pagination',
    clickable: true
  },

});

const productsSwiper = new Swiper('.production__swiper', {
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



//пример карты
function init () {
  let map = new ymaps.Map("YMapsID", {
      center: [55.601141569145035,37.170822499999936],
      zoom: 16
  });
}
ymaps.ready(init);

//проверка форм и добавление красного бордера невалидным инпутам
const validOptions = {
  
  validateEmail(email) {
    const re = /\S+\.[a-z]{2,4}$/;
    if (!re.test(String(email.value).toLowerCase())) {
      this.addErrorStyle(email);
      return false;
    }
  },

  validatePhone(phone) {
    const re = /\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
    if (!re.test(String(phone.value))) {
      this.addErrorStyle(phone);
      return false;
    }
  },

  validateTextInputs(arr) {
    arr.forEach(input => {
        if (input.value === "") {
          this.addErrorStyle(input);
        } 
    })
  },

  addErrorStyle(element) {
    element.classList.add('js-error');
    setTimeout(() => {
      element.classList.remove('js-error');
    }, 3000);
  },

  addPhoneMask(input) {
    new IMask(input, {
      mask: "+{7} (000) 000-00-00"
    });
  }
}

const allPhoneInputs = document.querySelectorAll('[name="phone"]');
for (let i = 0; i < allPhoneInputs.length; i++) {
  validOptions.addPhoneMask(allPhoneInputs[i])
}


const taskForm = document.querySelector('.js-task-form'),
      taskInputs = taskForm.querySelectorAll('.js-input'),
      taskPhone = taskForm.querySelector('.js-input-phone'),
      taskEmail = taskForm.querySelector('.js-input-email'),
      taskDoc = taskForm.querySelector('#document');

taskForm.onsubmit = function(e) {
  e.preventDefault();
  const docLabel = document.querySelector('.doc-label');
  if(taskDoc.value === "") {
    validOptions.addErrorStyle(docLabel);
  }
  validOptions.validateTextInputs(taskInputs);
  validOptions.validatePhone(taskPhone);
  validOptions.validateEmail(taskEmail);
}

const feedbackForm = document.querySelector('.js-feedback-form'),
      feedbackPhone = feedbackForm.querySelector('.js-input-phone');

feedbackForm.onsubmit = function(e) {
  e.preventDefault();
  validOptions.validatePhone(feedbackPhone);
}

const cooperationForm = document.querySelector('.js-cooperation-form'),
      cooperationInputs = cooperationForm.querySelectorAll('.js-input'),
      cooperationPhone = cooperationForm.querySelector('.js-input-phone');
      
cooperationForm.onsubmit = function(e) {
  e.preventDefault();
  validOptions.validateTextInputs(cooperationInputs);
  validOptions.validatePhone(cooperationPhone);
}

const popup = document.querySelector('.overlay'),
      popupForm = popup.querySelector('.js-popup'),
      popupInputs = popup.querySelectorAll('.js-input'),
      popupPhone = popup.querySelector('.js-input-phone'),
      popupEmail = popup.querySelector('.js-input-email'),
      closePopup = popup.querySelector('.popup__close');
const benefitsButton = document.querySelector('.benefits__button');
const productionButtons = document.querySelectorAll('.production__button');

[benefitsButton, ...productionButtons].forEach(button => {
  button.addEventListener('click', () => {
    popup.classList.add('_active');
    document.querySelector('body').style.overflow = "hidden";

    handler = (e) => {
      if(e.currentTarget === e.target || e.target === closePopup) {
        popup.classList.remove('_active'); 
        popup.removeEventListener('click', handler);
        document.querySelector('body').style.overflow = "auto";
      }
    }
    popup.addEventListener('click', handler)

    popupForm.onsubmit = function(e) {
      e.preventDefault();
      validOptions.validateTextInputs(popupInputs);
      validOptions.validatePhone(popupPhone); 
      validOptions.validateEmail(popupEmail);  
    }
  })
})


