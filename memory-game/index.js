const cardsField = document.querySelector('.cards-field');
const cards = document.querySelectorAll('.memory-card');
const frontFace = document.querySelectorAll('.front-face');
const backFace = document.querySelectorAll('.back-face');
const newGameBtn = document.querySelector('.new-game-button');
const winMessage = document.querySelector('.win-message');


let movesCount = [];
let twoCardsOpened = [];
let openPairs = 0;
const cardsCount = 12;

backFace.forEach(card => card.addEventListener('click', openCard));

function openCard() {
    this.classList.toggle('open-card');
    movesCount.push(this.id);
    twoCardsOpened.push(this.id);
   
    console.log(movesCount.length);
       
    if (twoCardsOpened.length === 2 && twoCardsOpened[0].slice(0, 5) === twoCardsOpened[1].slice(0, 5)) {
        openPairs += 1;
        twoCardsOpened.length = 0;
        console.log(twoCardsOpened);
        
    } else if (twoCardsOpened.length === 2 && twoCardsOpened[0].slice(0, 5) !== twoCardsOpened[1].slice(0, 5)) {
        const id1 = twoCardsOpened[0];
        const id2 = twoCardsOpened[1];
        const wrongCard1 = document.getElementById(id1);
        const wrongCard2 = document.getElementById(id2);
        wrongCard1.classList.remove('open-card');
        wrongCard2.classList.remove('open-card');
        twoCardsOpened.length = 0;
        
    }
}
    
(function mixCards() {
    cards.forEach( card => card.style.order = Math.floor(Math.random() * cardsCount));
})();