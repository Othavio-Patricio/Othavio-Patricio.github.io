const hero = document.querySelector('.hero');
const leftHeroPicture = document.querySelector('.hero-picture-left');
const rightHeroPicture = document.querySelector('.hero-picture-right');
const frontEndTexts = document.querySelector('.front-end-texts');
const backEndTexts = document.querySelector('.back-end-texts');
const leftTitle = document.querySelector('.hero-top-title');
const rightTitle = document.querySelector('.hero-bottom-title');

hero.addEventListener('mousemove', () => {
  action();
});

hero.addEventListener('mouseleave', () => {
  reset();
})

function action() {
  const pageSize = getPageSize();
  const posX = mousePosition();
  const percentage = posX / pageSize;
  changeFaceColor(percentage);
  moveFace(percentage);
  moveTextImage(percentage);
  textFade(percentage);
}

function reset() {
  leftHeroPicture.style.clipPath = 'inset(0 15.5vw 0 0 )';
  leftHeroPicture.style.left = '50%';
  rightHeroPicture.style.left = '50%';
  frontEndTexts.style.right = '55%';
  backEndTexts.style.left = '55%';
  frontEndTexts.style.opacity = '100%';
  leftTitle.style.opacity = '100%';
  backEndTexts.style.opacity = '100%';
  rightTitle.style.opacity = '100%';
}

function getPageSize() {
  return window.innerWidth;
}

function mousePosition() {
  const e = window.event;

  return e.clientX;
}

function changeFaceColor(percentage) {
  leftHeroPicture.style.clipPath = `inset(0 ${percentage * 32}vw 0 0 )`;
}

function moveFace(percentage) {
  const MAX = 60;
  const MIN = 40;
  const newPercentage = percentage * (MAX - MIN) + MIN;
  const newValue =  `${invertNumber(newPercentage, MIN, MAX)}%`;
  leftHeroPicture.style.left = newValue;
  rightHeroPicture.style.left = newValue;
}

function moveTextImage(percentage) {
  const MAX = 60;
  const MIN = 50;
  const newPercentage = percentage * (MAX - MIN) + MIN;
  const value = `${percentage * (MAX - MIN) + MIN}%`
  const newValue = `${invertNumber(newPercentage, MIN, MAX)}%`;
  frontEndTexts.style.right = value;
  backEndTexts.style.left = newValue;
}

function invertNumber(newPercentage, MIN, MAX) {
  return MIN + MAX - newPercentage;
}

function textFade(percentage) {
  if (percentage < 0.5) {
    backEndTexts.style.opacity = `${percentage * 200}%`
    rightTitle.style.opacity = `${percentage * 200}%`
  } else {
    const value = invertNumber(percentage - 0.5, 0, 0.5);
    console.log(value)
    frontEndTexts.style.opacity = `${value * 200}%`
    leftTitle.style.opacity = `${value * 200}%`
  }
}

//Math.floor(Math.random() * (max - min) ) + min