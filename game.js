const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characthers = [
  'barbie1',
  'barbie2',
  'barbie3',
  'barbie4',
  'barbie5',

  
]


const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard= ''
let secondCard = ''

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

if (disabledCards.length === 10) {
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

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    

    checkCards();

  }  
}
  

  const createCard = (character) => {
    const card = document.createElement('div' , 'card');
      const front = document.createElement('div', 'face front');
      const back = document.createElement('div', 'face back');
      let temp = character + ".jfif"
    
      front.style.backgroundImage = `url(${temp})`;

      
    
      card.appendChild(front);
      card.appendChild(back);
     
    
      card.addEventListener('click', revealCard);
      card.setAttribute('data-character', character)
      card.setAttribute('class', "card")
    return card;
    }
    
    const loadGame = () => {
      const duplicateCharacters = [ ...characthers, ... characthers ];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
      shuffledArray.forEach((character) => {
        const card = createCard(character);
        // console.log(card);
        document.querySelector('.grid').appendChild(card);
      });
    }
    const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = Number(document.querySelector('.timer').innerHTML);
        ;
        document.querySelector('.timer').innerHTML = (currentTime + 1);
      }, 1000);
    }
    window.onload = () => {
      document.querySelector('.player').innerHTML= localStorage.getItem('player');
      // spanPlayer.innerHTML= localStorage.getItem('player');
      startTimer();
      loadGame();
    }

    function flipCard() {
      this.classList.toggle('flip');
    }
    grid.forEach(card => card.addEventListener('click', flipCard));