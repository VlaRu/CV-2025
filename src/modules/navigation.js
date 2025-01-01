export const sectionNavigationElements = document.querySelectorAll(".section");
export const burgerNavigation = document.querySelectorAll(
  ".burger-list_navigation-element"
);
const navigationList = document.querySelectorAll(".list_navigation-element");
export let currentSection = 0;


export function hideSections() {
  sectionNavigationElements.forEach((section) => {
    section.classList.add("none");
  });
}

export function navigation() {
  navigationList.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      hideSections();
      sectionNavigationElements[i].classList.remove("none");
      currentSection = i;
      if (sectionNavigationElements[i].classList.contains('section-language') || sectionNavigationElements[i].classList.contains('section-skills')){
        startAnimationRange()
      }
      navigationList.forEach((tab) => {
        tab.classList.remove("bg");
      });

      tab.classList.add("bg");
    });
  });
}

if (document.documentElement.clientWidth < 950){
  startAnimationRange()
}

export function burgerNav() {
  burgerNavigation.forEach((el, i) => {
    el.addEventListener("click", () => {
      sectionNavigationElements[i].classList.remove("none");
      currentSection = i;
      if (sectionNavigationElements[i].classList.contains('section-language') || sectionNavigationElements[i].classList.contains('section-skills')){
        startAnimationRange()
      }
    });
  });
}

export function startAnimationRange(){
  const rangeInputs = document.querySelectorAll(".input-range");

  rangeInputs.forEach((input) => {
    const value = input.value;
    const max = input.max;
    input.style.backgroundSize = `0% 100%`;

    requestAnimationFrame(() => {
      const backgroundSize = (value / max) * 100;
      input.style.backgroundSize = `${backgroundSize}% 100%`;
    });
  });
}