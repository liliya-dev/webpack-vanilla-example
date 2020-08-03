const cursor = document.querySelector('.cursor');
const headerCenter = document.querySelector('.header__center');
const loading = document.querySelector('.loading-page');
const loadingText = document.querySelector('.loading__text');
const loadingImg = document.querySelector('.loading__img');
const images = document.querySelectorAll('.header-img');
const header = document.querySelector('.header');

function hidePictures() {
  for (const img of images) {
    img.style.display = 'none';
  }
}

export const startLoadingListener = function() {
  const html = document.querySelector('html');

  html.style.cursor = 'none';
  hidePictures();
  changeNumbers();
};

const remover = () => {
  headerCenter.removeEventListener('click', startLoadingListener, false);
};

function changeNumbers() {
  loading.style.display = 'block';
  remover();

  let number = 1;

  const timerNumber = setInterval(() => {
    if (number % 20 === 0) {
      const i = number / 20 % 6;

      loadingImg.src = `images/loading${i === 0 ? 1 : i}.png`;
    }

    if (number > 220) {
      loading.style.transform = `translateY(-200vh)`;

      for (const img of images) {
        img.style.display = 'block';
      }
      cursor.style.display = 'flex';

      moveText();
      clearInterval(timerNumber);
    }

    if (number <= 100) {
      loadingText.textContent = number;
    }

    number++;
  }, 10);
}

const width = header.clientWidth / 2;
const height = header.clientHeight / 2;

const getCoordinates = (x, y) => {
  const cathetusX = Math.abs(width - x);
  const cathetusY = Math.abs(height - y);

  const hypotenuse = Math.sqrt(Math.pow(cathetusX, 2) + Math.pow(cathetusY, 2));

  const shadowWidth = 120 / Math.sqrt(hypotenuse);

  return shadowWidth > 25 ? 15 : shadowWidth;
};

const moveText = () => {
  header.addEventListener('mousemove', (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;

    headerCenter.style.transform = `rotateX(${(height - clientY) / 10}deg)
      rotateY(${(width - clientX) / 145}deg)
      rotateZ(${(width - clientX) / 115}deg)
      skewX(${(height - clientY) / 20}deg)`;

    cursor.style.boxShadow = `10px 10px 30vw
      ${getCoordinates(clientX, clientY)}vw rgba(243,81,139,0.7)`;
  });
};
