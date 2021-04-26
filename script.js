function createSpanLetter(text) {
  const span = document.createElement('span');
  span.innerText = text;

  return span;
}

function setLetter() {
  const error = 'Por favor, digite o conteúdo da carta.';
  const input = document.querySelector('#carta-texto').value.split(' ');
  const letter = document.querySelector('#carta-gerada');
  const inputFiltered = input.filter((text) => text !== '');

  letter.innerText = '';

  if (!inputFiltered.length) return letter.appendChild(createSpanLetter(error));

  inputFiltered.forEach((text, index) => {
    const word = createSpanLetter(text);

    letter.appendChild(word);
    if (inputFiltered.length === index + 1) letter.innerHTML += '.';
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
