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



//пример карты
function init () {
  let map = new ymaps.Map("YMapsID", {
      center: [55.601141569145035,37.170822499999936],
      zoom: 16
  });
}
ymaps.ready(init);


//проверка форм и добавление красного бордера невалидным инпутам
function validateEmail(email) {
  const re = /\S+\.[a-z]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/;
  return re.test(String(phone));
}

const taskForm = document.querySelector('.js-task-form'),
      taskInputs = taskForm.querySelectorAll('.js-input'),
      taskPhone = taskForm.querySelector('.js-input-phone'),
      taskEmail = taskForm.querySelector('.js-input-email'),
      taskDoc = taskForm.querySelector('#document');

      const taskPhoneMask = new IMask(taskPhone, {
  mask: "+{7} (000) 000-00-00"
});


function addErrorStyle(element) {
  element.classList.add('js-error');
  setTimeout(() => {
    element.classList.remove('js-error');
  }, 3000);
}


taskForm.onsubmit = function(e) {
  e.preventDefault();
  const emailValue = taskEmail.value;
  const phoneValue = taskPhone.value;
  const docLabel = document.querySelector('.doc-label');
  if(taskDoc.value === "") {
    addErrorStyle(docLabel);
  }
  taskInputs.forEach(input => {
    if (input.value === "") {
      addErrorStyle(input);
    } 
  })
  if (!validatePhone(phoneValue)) {
    addErrorStyle(taskPhone);
    return false;
  } 
  if (!validateEmail(emailValue)) {
    addErrorStyle(taskEmail);
    return false;
  }  
}

const feedbackForm = document.querySelector('.js-feedback-form'),
      feedbackPhone = feedbackForm.querySelector('.js-input-phone');

const feedbackPhoneMask = new IMask(feedbackPhone, {
  mask: "+{7} (000) 000-00-00"
});

feedbackForm.onsubmit = function(e) {
  e.preventDefault();
  const phoneValue = feedbackPhone.value;
  if (!validatePhone(phoneValue)) {
    addErrorStyle(feedbackPhone);
    return false;
  }   
}


const cooperationForm = document.querySelector('.js-cooperation-form'),
      cooperationInputs = cooperationForm.querySelectorAll('.js-input'),
      cooperationPhone = cooperationForm.querySelector('.js-input-phone');
      
const cooperationPhoneMask = new IMask(cooperationPhone, {
    mask: "+{7} (000) 000-00-00"
  });
    

cooperationForm.onsubmit = function(e) {
  e.preventDefault();
  const phoneValue = cooperationPhone.value;
  cooperationInputs.forEach(input => {
    if (input.value === "") {
      addErrorStyle(input);
    } 
  })
  if (!validatePhone(phoneValue)) {
    addErrorStyle(cooperationPhone);
    return false;
  }   
}





