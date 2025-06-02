import './style.scss';
import {
  navigation,
  burgerNav,
  sectionNavigationElements,
  currentSection,
  startAnimationRange
} from "./modules/navigation.js";
import { moveRightSlide, moveLeftSlide } from "./modules/sliderProject.js";
import { burgerMenu, toggleBurgerMenu } from "./modules/burger.js";
import { generateProjectCards } from "./modules/projectGenerator.js";

const prevButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");

function showCurrentSection() {
  sectionNavigationElements[currentSection].classList.remove('none')
}

function handleResize() {
  if (window.innerWidth > 950) {
    sectionNavigationElements.forEach((section) => {
      section.classList.add("none");
    });
    navigation();
    showCurrentSection()
  } else {
    sectionNavigationElements.forEach((section) => {
      section.classList.remove("none");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generateProjectCards();
  handleResize();
  showCurrentSection();
  burgerNav();
  window.addEventListener("resize", handleResize, startAnimationRange);

  nextButton.addEventListener("click", () => {
    moveRightSlide();
  });

  prevButton.addEventListener("click", () => {
    moveLeftSlide();
  });

});

burgerMenu.addEventListener("click", toggleBurgerMenu);

