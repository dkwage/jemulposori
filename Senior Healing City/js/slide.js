let pages = 0; // 현재 인덱스 번호
let positionValue = 0; // images 위치값
const IMAGE_WIDTH_PERCENTAGE = 100; // 한 번 이동 시 100% 이동

// DOM
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");
const imageElements = images.children; // Get all image elements
const totalImages = imageElements.length; // Total number of images

function calculateImageWidth() {
  // Get the width of the container (images) element
  const containerWidth = images.offsetWidth;

  // Calculate the equivalent pixel value of the percentage
  return (containerWidth * IMAGE_WIDTH_PERCENTAGE) / 100;
}

function next() {
  if (pages < totalImages - 1) {
    // Limit the slider to the total number of images
    backBtn.removeAttribute("disabled");
    positionValue -= calculateImageWidth();
    images.style.transform = `translateX(${positionValue}px)`;
    pages += 1;
  }
  if (pages === totalImages - 1) {
    nextBtn.setAttribute("disabled", "true");
  }
}

function back() {
  if (pages > 0) {
    nextBtn.removeAttribute("disabled");
    positionValue += calculateImageWidth();
    images.style.transform = `translateX(${positionValue}px)`;
    pages -= 1;
  }
  if (pages === 0) {
    backBtn.setAttribute("disabled", "true");
  }
}

function init() {
  // 초기 화면 상태
  backBtn.setAttribute("disabled", "true");
  if (totalImages <= 1) {
    nextBtn.setAttribute("disabled", "true");
  }
  backBtn.addEventListener("click", back);
  nextBtn.addEventListener("click", next);
}
init();
