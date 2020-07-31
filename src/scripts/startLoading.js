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

const moveText = () => {
  header.addEventListener('mouseover', (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;

    headerCenter.style.transform = `rotateX(${(height - clientY) / 15}deg)
      rotateY(${(width - clientX) / 35}deg)
      rotateZ(${-(height - clientY) / 105}deg)`;
  });
};
