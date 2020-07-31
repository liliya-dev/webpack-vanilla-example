import './styles/style.scss';
import loading1Img from './images/loading/loading1.png';
import loading2Img from './images/loading/loading4.png';
import loading3Img from './images/loading/loading3.png';
import loading4Img from './images/loading/loading5.png';
import img from './images/wedo/wedoBig1.png';
import img2 from './images/wedo/wedoBig2.png';
import img3 from './images/wedo/wedoBig3.png';
import img4 from './images/wedo/wedoBig4.png';
import img5 from './images/wedo/wedoBig5.png';
import img6 from './images/wedo/wedoBig6.png';
import { startLoadingListener } from './scripts/startLoading';
import './scripts/carousel';

gsap.registerPlugin(MotionPathPlugin);

for (let i = 1; i < 7; i = i + 2) {
  const tween = gsap.timeline();

  tween.to(`.header-img${i}`, {
    repeat: -1,
    yoyo: true,
    duration: 5,
    delay: 1,
    ease: 'power1.ease-in-out',
    motionPath: {
      path: [{
        x: -20, y: -10,
      }],
      curviness: 2,
    },
  });
}

for (let i = 2; i < 7; i = i + 2) {
  const tween = gsap.timeline();

  tween.to(`.header-img${i}`, {
    repeat: -1,
    yoyo: true,
    duration: 5,
    delay: 1,
    ease: 'power1.ease-in-out',
    motionPath: {
      path: [{
        x: 30, y: 20,
      }],
      curviness: 2,
    },
  });
}

const headerCenter = document.querySelector('.header__center');

headerCenter.addEventListener('click', startLoadingListener, false);

const controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
    // duration: '100%',
  },
});

const slides = document.querySelectorAll('.slider');

for (let i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
    .setPin(slides[i], { pushFollowers: false })
    .addTo(controller);
}

const wedo = document.querySelector('.wedo__list');
const wedoMainImg = document.querySelector('.wedo__main-img');
const wedoItems = document.querySelectorAll('.wedo__item');
const mainText = document.querySelector('.wedo__name');

const texts = {
  1: 'Channel Operation and Management',
  2: 'Creative Services  \n for Infuencers',
  3: 'Graphic Design \n & Photography',
  4: 'Lyric Videos \n & Animation',
  5: 'Business \n Development',
  6: 'Business \n Development',
};

wedo.addEventListener('click', (event) => {
  const newSrc = event.target.src;
  const index = Array.from(wedoItems)
    .findIndex(el => el.children[0].src === newSrc) + 1;

  mainText.textContent = texts[index];

  const srcBig = newSrc.split('Small').join('Big');
  const previousActive = Array.from(wedoItems)
    .find(item => Array.from(item.classList).includes('wedo__item--active'));

  previousActive.classList.remove('wedo__item--active');
  event.target.closest('li').classList.add('wedo__item--active');

  wedoMainImg.src = srcBig;

  const obj = {
    1: {
      x: 80,
      y: 60,
    },
    2: {
      x: -70,
      y: 10,
    },
    3: {
      x: 120,
      y: -80,
    },
  };

  for (let i = 1; i < 4; i = i + 1) {
    const tween = gsap.timeline();
    // const smallImg = document.querySelector(`.wedo__small-img--${i}`);

    tween.to(`.wedo__small-img--${i}`, {
      repeat: 1,
      yoyo: true,
      duration: 0.5,
      ease: 'power1.ease-in-out',
      motionPath: {
        path: [obj[i]],
        curviness: 2,
      },
    });
  }
});

wedo.addEventListener('mouseover', () => {
  const obj = {
    1: {
      x: 10,
      y: 20,
    },
    2: {
      x: -30,
      y: -10,
    },
    3: {
      x: 40,
      y: -30,
    },
  };

  for (let i = 1; i < 4; i = i + 1) {
    const tween = gsap.timeline();

    tween.to(`.wedo__small-img--${i}`, {
      repeat: 1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.ease-in-out',
      motionPath: {
        path: [obj[i]],
        curviness: 2,
      },
    });
  }
});

const headerNumber = document.querySelector('.header__number');

function increaseNumber() {
  const currentTextContent = headerNumber.textContent;
  const currentNumber = Number(currentTextContent.split(' ').join(''));
  const nextNumber = currentNumber + 1;
  const nextNumberString = nextNumber + '';
  let nextTextContent = '';
  let space = 0;

  for (let i = nextNumberString.length - 1; i >= 0; i--) {
    if (space === 3) {
      nextTextContent = ' ' + nextTextContent;
      space = 0;
    }

    nextTextContent = nextNumberString.charAt(i) + nextTextContent;
    space++;
  };

  headerNumber.textContent = nextTextContent;
}

setInterval(increaseNumber, 30);

const mainDoc = document.querySelector('html');
const cursor = document.querySelector('.cursor');

mainDoc.addEventListener('mousemove', (event) => {
  cursor.style.left = event.pageX + 'px';
  cursor.style.top = event.pageY + 'px';
});
