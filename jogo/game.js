const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characthers = [
  'barbie1',
  'barbie2',
  'barbie3',
  'barbie4',
  'barbie5',
  'barbie1',
  'barbie2',
  'barbie3',
  'barbie4',
  'barbie5',
  
]

let firstCard= ''
let secondCard = ''


const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
  }
}
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

if ( firstCharacter ===  secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    firstCard= '';
    secondCard = '';
checkEndGame();
  } else {
    setTimeout(() => {


      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';
    }, 500);
  }
}

const revelarCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
      return
    }
  
    if (firstCard === '') {
  target.parentNode.classList.add('reveal-card');
      firstCard = target.parentNode;
  
    } else if (secondCard === '') {
  
      target.parentNode.classList.add('reveal-card');
      SecondCard = target.parentNode;
  checkCards();
  
    }  
  }
  

  const createCard = (character) => {
    const card = document.createElement('div');
      const front = document.createElement('div', 'face front');
      const back = document.createElement('div', 'face back');
    
      front.style.backgroundImage = `url('${character}.jfif')`;
    
    card.appendChild(front);
      card.appendChild(back);
    
      card.addEventListener('click', revelarCard);
      card.setAttribute('data-character', character)
    return card;
    }
    
    const loadGame = () => {
      const duplicateCharacters = [ ...characthers, ... characthers ];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0,5);
    
      shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
      });
    }
    const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
      }, 1000);
    }
    window.onload = () => {
      document.querySelector('.player').innerHTML= localStorage.getItem('player');
      // spanPlayer.innerHTML= localStorage.getItem('player');
      startTimer();
      loadGame();
    }