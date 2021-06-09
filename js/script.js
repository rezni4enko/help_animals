"use strict"

let menuActive = document.querySelectorAll('.menu');

const burgerActive = document.querySelector('.header__burger');
burgerActive.addEventListener('click', function (e) {
   burgerActive.classList.toggle('_active');
   if (menuActive.length > 0) {
      for (let index = 0; index < menuActive.length; index++) {
         menuActive[index].classList.toggle('_active');
      };
   }
}
);