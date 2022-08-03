const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const caracteres = [
  'bete',
  'jerry',
  'Jéssica',
  'morto',
  'pessoa-passaro',
  'picle-rick',
  'rique',
  'verão',
  'meeseeks',
  'escrupuloso',
];

const createElement = (tag, className) => {
  elemento const = document.createElement(tag);
  element.className = className;
  elemento de retorno;
}

deixe primeiroCartão = '';
deixe segundoCartão = '';

const checkFimJogo = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

if (primeiro Caracter === segundo Caractere) {
firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
primeiraCarta = '';
    segundoCartão = '';
checkFimJogo();
  } else {
    setTimeout(() => {


      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      primeiraCarta = '';
      segundoCartão = '';
    }, 500);
  }
}

const revelarCard = ({ target }) => {

if (target.parentNode.className.includes('reveal-card')) {
    Retorna;
  }

  if (primeiroCartão === '') {
target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    SecondCard = target.parentNode;
checkCards();

  }  
}

const createCard = (caractere) => {
const cartão = createElement('div', 'cartão');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

card.appendChild(front);
  cartão.appendChild(voltar);

  card.addEventListener('click', revelaCard);
  card.setAttribute('data-character', caractere)
cartão de retorno;
}

const cargaJogo = () => {
  const duplicataCaracteres = [ ...caracteres, ...caracteres ];
const shuffledArray = duplicataCaracteres.sort(() => Math.random() - 0,5);

  shuffledArray.forEach((caractere) => {
    const cartão = createCard(character);
    grid.appendChild(cartão);
  });
}
const startTimer = () => {
this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
}
window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  carregar jogo();
}