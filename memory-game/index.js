const playingField = document.querySelector('.playing-field');
const cardsField = document.querySelector('.cards-field');
const cards = document.querySelectorAll('.memory-card');
const frontFace = document.querySelectorAll('.front-face');
const backFace = document.querySelectorAll('.back-face');
const backFaceOpened = document.querySelectorAll('.back-face open-card');
const newGameBtn = document.querySelector('.new-game-button');
const winMessage = document.querySelector('.win-message');
const totalMoves = document.querySelector('.moves');
const winField = document.querySelector('.win-field');
const lastResults = document.querySelector('.last-results');
localStorage.length = 10;
let movesCount = [];
let twoCardsOpened = [];
let openedCards = [];
const cardsCount = 12;

// function getResults() {
    
//     for(let i=0; i < 10; i++) {
//         let key = localStorage.key(i);
//         let res = document.createElement('p');
//         res.innerHTML = localStorage.getItem(key);
//         lastResults.append(res.innerHTML);
//     } 

// };



function mixCards() {
    cards.forEach( card => card.style.order = Math.floor(Math.random() * cardsCount));
};
document.addEventListener("DOMContentLoaded", mixCards);
//alert('Добрый день! Мне немного не хватило времени на реализацию функции извлечения последних результатов из Local storage. Если есть такая возможность, проверь мою работу завтра. Буду очень благодарна)');

backFace.forEach(card => card.addEventListener('click', openCard));

function openCard() {

    if (this.classList.contains('open-card')) {
        return;
    } else {
    this.classList.toggle('open-card');
    movesCount.push(this.id);
    twoCardsOpened.push(this.id);
    
    totalMoves.innerHTML = movesCount.length;
    
           
    if (twoCardsOpened.length === 2 && twoCardsOpened[0].slice(0, 5) !== twoCardsOpened[1].slice(0, 5)) {
            const id1 = twoCardsOpened[0];
            const id2 = twoCardsOpened[1];
            const wrongCard1 = document.getElementById(id1);
            const wrongCard2 = document.getElementById(id2);
            setTimeout(() => {
                wrongCard1.classList.remove('open-card');
                wrongCard2.classList.remove('open-card');
            }, 500);
            twoCardsOpened.length = 0;
        } else if (twoCardsOpened.length === 2 && twoCardsOpened[0].slice(0, 5) === twoCardsOpened[1].slice(0, 5)) {
            openedCards.push(twoCardsOpened);
            twoCardsOpened.length = 0;
          
        } 
        const allOpenedCards = document.querySelectorAll('.open-card')
        if (allOpenedCards.length === 12) {
            
            playingField.classList.toggle('ifWin');
            newGameBtn.classList.toggle('ifWin');
            winField.classList.toggle('ifWin');
            winMessage.classList.toggle('ifWin');
            localStorage.setItem('moves', totalMoves.innerHTML);
        }
    }
};

newGameBtn.addEventListener('click', newGame);

function newGame() {
    movesCount.length = 0;
    twoCardsOpened.length = 0;
    openedCards.length = 0; 
    totalMoves.innerHTML = 0;
    playingField.classList.remove('ifWin');
    newGameBtn.classList.remove('ifWin');
    winField.classList.remove('ifWin');
    winMessage.classList.remove('ifWin');
    backFace.forEach((el) => {
        el.classList.remove('open-card');
    });
    mixCards();
    
    
    };

