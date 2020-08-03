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
import './scripts/wedoActions';
import './scripts/cursorActions';

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
    duration: '200%',
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
