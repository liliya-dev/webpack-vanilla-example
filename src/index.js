/* eslint-disable no-console */
/* eslint-disable no-undef */

// // const controller = new ScrollMagic.Controller();
// const tween = new TimelineLite();
// const flightPath = {
//   curviness: 1.25,
//   autoRotate: true,
//   values: [
//     {
//       x: 600, y: -20,
//     },
//     {
//       x: 100, y: -200,
//     },
//     {
//       x: -100, y: -300,
//     },

//   ],
// };

// tween.addTo(
//   TweenLite.to('.fly', {
//     duration: 1,
//     Bezier: flightPath,
//   }),
// );

// console.log(tween);
// new ScrollMagic.Scene({
//   duration: 100, // the scene should last for a scroll distance of 100px
//   offset: 50, // start this scene after scrolling for 50px
// })
//   .setPin('#header') // pins the element for the the scene's duration
//   .addTo(controller);

import './styles/style.scss';
import loading1Img from './images/loading/loading1.png';
import loading2Img from './images/loading/loading4.png';
import loading3Img from './images/loading/loading3.png';
import loading4Img from './images/loading/loading5.png';
import {hidePictures} from './scripts/hideHeader';

// console.log(loading2Img)

gsap.registerPlugin(MotionPathPlugin);

for (let i = 1; i < 7; i = i + 2) {
  const tween = gsap.timeline();

  tween.to(`.header-img${i}`, {
    repeat: -1,
    yoyo: true,
    // animationDirection: 'power1.alternate',
    duration: 5,
    delay: 1,
    ease: 'power1.ease-in-out',
    motionPath: {
      path: [{
        x: -20, y: -10,
      }],
      curviness: 2,
      // autoRotate: true,
    },
  });
}

for (let i = 2; i < 7; i = i + 2) {
  const tween = gsap.timeline();

  tween.to(`.header-img${i}`, {
    repeat: -1,
    yoyo: true,
    // animationDirection: 'power1.alternate',
    duration: 5,
    delay: 1,
    ease: 'power1.ease-in-out',
    motionPath: {
      path: [{
        x: 30, y: 20,
      }],
      curviness: 2,
      // autoRotate: true,
    },
  });
}

const headerCenter = document.querySelector('.header__center');
const loading = document.querySelector('.loading-page');
const loadingText = document.querySelector('.loading__text');
const loadingImg = document.querySelector('.loading__img');
const images = document.querySelectorAll('.header-img');

headerCenter.addEventListener('click', function() {
  hidePictures();
  changeNumbers();
});



loadingImg.addEventListener('click', function() {
  loadingImg.src = 'images/loading3.png';
  // console.log(loading1Img)
});

// let i = 1;
// function changePagesAfterFinish() {
//   const v = setInterval(() => {
//     if(i === 6) {
//       console.log(i)
//       loading.style.transform = `translateY(-200vh)`
//       clearInterval(v);
//     }

//     loadingImg.src = `images/loading${i}.png`;
//     i++


//   }, 100)

// }

function changeNumbers() {
  loading.style.display = 'block';

  let number = 1;

  const timerNumber = setInterval(() => {
    if(number % 20 === 0) {
      let i=number/20 % 6
      console.log(i)
      loadingImg.src = `images/loading${i===0 ? 1 : i}.png`;
    }

    if (number > 220) {
      loading.style.transform = `translateY(-200vh)`
      for (const img of images) {
        img.style.display = 'block';
      }
      clearInterval(timerNumber);
    }

    if (number <= 100) {
      loadingText.textContent = number;
    }
    number++;
  }, 10);
}


