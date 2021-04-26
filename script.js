function createSpanLetter(text) {
  const span = document.createElement('span');
  span.innerText = text;

  return span;
}

function setLetter() {
  const input = document.querySelector('#carta-texto').value.split(' ');
  const letter = document.querySelector('#carta-gerada');

  letter.innerText = '';

  input.forEach((text, index) => {
    const word = createSpanLetter(text);

    letter.appendChild(word);
    if (input.length === index + 1) letter.innerHTML += '.';
    else letter.innerHTML += ' ';
  });
}

function getEvents() {
  const button = document.querySelector('#criar-carta');

  button.addEventListener('click', setLetter);
}

window.onload = () => {
  getEvents();
};
