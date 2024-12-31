const carouselSlide = document.querySelector(".project_card-wrapper");
const sliderRange = document.getElementById("range-slider");
let currentSlide = 0;
const totalSlides = 6;

export function moveRightSlide() {
  const lastImage = carouselSlide.lastElementChild;
  carouselSlide.removeChild(lastImage);
  carouselSlide.insertBefore(lastImage, carouselSlide.firstChild);
  currentSlide = (currentSlide + 1) % (totalSlides + 1);
  updateSliderRange();
}

export function moveLeftSlide() {
  const firstImage = carouselSlide.firstElementChild;
  carouselSlide.removeChild(firstImage);
  carouselSlide.appendChild(firstImage);
  currentSlide = (currentSlide - 1 + totalSlides + 1) % (totalSlides + 1);
  updateSliderRange();
}

function updateSliderRange() {
  sliderRange.value = currentSlide;
  const backgroundSize = ((currentSlide / totalSlides) * 100).toFixed(2);
  sliderRange.style.backgroundSize = `${backgroundSize}% 100%`;
}

function updateSlider(e){

  const rect = sliderRange.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const value = Math.round((offsetX / rect.width) * (sliderRange.max - sliderRange.min)) + parseInt(sliderRange.min);

  if (value > currentSlide) {
    for (let i = currentSlide; i < value; i++) {
      moveLeftSlide();
    }
  } else if (value < currentSlide) {
    for (let i = currentSlide; i > value; i--) {
      moveRightSlide();
    }
  }
  const backgroundSize = ((value / totalSlides) * 100).toFixed(2);
  sliderRange.style.backgroundSize = `${backgroundSize}% 100%`;

  currentSlide = value;
}

export function rangeSlide() {

  //sliderRange.addEventListener( "mousemove", updateSlider);
  if (document.documentElement.clientWidth < 950) {
    sliderRange.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      updateSlider(touch.clientX);
    });
  } else {
    sliderRange.addEventListener("mousemove", (e) => {
      updateSlider(e);
    });
  }

  window.addEventListener("resize", () => {
    sliderRange.removeEventListener("mousemove", updateSlider);
    sliderRange.removeEventListener("touchmove", updateSlider);
    rangeSlide();
  });
}

rangeSlide()