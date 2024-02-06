let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");


let player = {
    name: "Hemat",
    chips: 185
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Card: ";
    cards.forEach(card => {
        cardsEl.textContent += card + " ";
    })
    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        randomCard = 11
    } else if (randomCard > 10) {
        randomCard = 10;
    }
    return randomCard;
}

