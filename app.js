const text = document.querySelector('.title');
const inputValue = document.getElementById('text');

let char = 0;
let timer;

function complete() {
  clearInterval(timer);
  timer = null;
}

function animation(splitText) {
  const wordLetter = text.querySelectorAll('span')[char];
  wordLetter.classList.add('fade');
  char += 1;
  if (char === splitText.length) {
    complete();
  }
}

function reset() {
  text.textContent = '';
  inputValue.value = '';
  char = 0;
}

function showValue() {
  const word = inputValue.value;
  if (!word) return;
  const splitText = word.split('');
  splitText.map(letter => (text.innerHTML += `<span>${letter}</span>`));
  timer = setInterval(() => animation(splitText), 50);
}
