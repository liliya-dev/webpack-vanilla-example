
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
