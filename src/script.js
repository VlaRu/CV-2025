import {navigation, burgerNav, navigationElements } from "./modules/navigation.js";
import {moveRightSlide, moveLeftSlide} from "./modules/sliderProject.js";
import {burgerMenu, toggleBurgerMenu} from "./modules/burger.js";

const prevButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");


function handleResize(){
  if (window.innerWidth > 768) {
    navigationElements.forEach(section => {
      section.classList.add('none');
    });
  }else{
    navigationElements.forEach(section => {
      section.classList.remove('none');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  navigation();
  burgerNav()
  window.addEventListener('resize', handleResize);

  nextButton.addEventListener('click', () => {
    moveRightSlide();
  });

  prevButton.addEventListener('click', () => {
    moveLeftSlide();
  });
});

burgerMenu.addEventListener('click', toggleBurgerMenu);
