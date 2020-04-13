const text = document.querySelector('.title');
const input = document.getElementById('text');
const btn = document.getElementById('animationBtn');
const btnClass = btn.classList;

const SHOW = 'show';
const HIDE = 'hide';

let char = 0;
let timer;

const animateBtn = type => {
  const btnAnimationObj = {
    show() {
      btnClass.replace(SHOW, HIDE);
    },
    hide() {
      btnClass.replace(HIDE, SHOW);
    },
  };
  return btnAnimationObj[type]();
};

const complete = () => {
  clearInterval(timer);
  timer = null;
  input.value = '';
};

const animation = splitText => {
  const wordLetter = text.querySelectorAll('span')[char];
  wordLetter.classList.add('fade');
  char += 1;
  if (char === splitText.length) {
    complete();
    animateBtn(SHOW);
  }
};

const showValue = () => {
  const word = input.value;
  if (!word) return;
  if (text.innerHTML) {
    char = 0;
    text.innerHTML = '';
  }
  const splitText = word.split('');
  splitText.map(letter => (text.innerHTML += `<span>${letter}</span>`));
  timer = setInterval(() => animation(splitText), 50);
};

if (!input.value) {
  animateBtn(SHOW);
}

input.addEventListener('input', () => {
  if (input.value.length <= 0) {
    animateBtn(SHOW);
  } else {
    animateBtn(HIDE);
  }
});
