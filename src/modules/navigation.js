export const navigationElements = document.querySelectorAll('.section');
export const burgerNavigation =document.querySelectorAll('.burger-list_navigation-element');
const navigationList = document.querySelectorAll('.list_navigation-element');

export function hideSections() {
  navigationElements.forEach(section => {
    section.classList.add('none');
  });
}

export function navigation() {
  navigationList.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      hideSections();
      navigationElements[i].classList.remove('none');
      navigationList.forEach(tab => {
        tab.classList.remove('bg');
      });

      tab.classList.add('bg');
    });
  });
}

export function burgerNav() {
  burgerNavigation.forEach((el, i) => {
    el.addEventListener('click', () => {
      navigationElements[i].classList.remove('none');
    })
  })
}