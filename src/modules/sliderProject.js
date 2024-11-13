const carouselSlide = document.querySelector(".project_card-wrapper");

export function handleSlider() {
  console.log('Slider handled');
}

export function moveRightSlide() {
  const lastImage = carouselSlide.lastElementChild;
  carouselSlide.removeChild(lastImage);
  carouselSlide.insertBefore(lastImage, carouselSlide.firstChild);
}

export function moveLeftSlide() {
  const firstImage = carouselSlide.firstElementChild;
  carouselSlide.removeChild(firstImage);
  carouselSlide.appendChild(firstImage);
}