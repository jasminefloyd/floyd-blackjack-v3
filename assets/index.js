//Objects
const player = {
  name: "",
  chips: 0,
  cards: [],
  sum: 0
}

const dealer = {
  name: "",
  chips: 0,
  cards: [],
  sum: 0
}

let deck = [
  { image: "./assets/images/cards/ace_of_hearts.png", value: 11 },
  { image: "./assets/images/cards/2_of_clubs.png", value: 2 },
  { image: "./assets/images/cards/king_of_spades.png", value: 10 },
  { image: "./assets/images/cards/7_of_clubs.png", value: 7 },
  { image: "./assets/images/cards/10_of_hearts.png", value: 10 },
  { image: "./assets/images/cards/6_of_diamonds.png", value: 6 },
];

//Global Variables
var firstCard
var secondCard
var sum

//DOM Variables
const buttonEl = document.getElementById('rules-btn')
const playAgainBtnEl = document.getElementById('play-again-btn')
const hitBtnEl = document.getElementById('hit-btn')
const stayBtnEl = document.getElementById('stay-btn')

const playMessageEl = document.getElementById('play-message')
const dealtCardsEl = document.getElementById('dealt-cards')
const dealerCardsEl = document.getElementById('dealer-cards')
const tableCard1El = document.getElementById('tCard1')
const tableCard2El = document.getElementById('tCard2')
const tableCard3El = document.getElementById('tCard3')
const tableCard4El = document.getElementById('tCard4')

//Audio Files
const playerWinSound = new Audio('./assets/audio/round-won.wav')
const playerLoseSound = new Audio('./assets/audio/awww.mp3')
const blackjackWinSound = new Audio('./assets/audio/victory.mp3')
const cardShuffleSound = new Audio('./assets/audio/quick_deal.wav')


//Functions

function selectRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length)
  return deck[randomIndex]
}

// New Deal function w/ Card images 
function dealPlayerCards() {
  firstCard = selectRandomCard(deck)
  secondCard = selectRandomCard(deck)
  sum = firstCard.value + secondCard.value
  player.sum = sum
  // player.cards = [firstCard, secondCard]
  dealtCardsEl.innerHTML = "Cards: "
  tableCard1El.src = `${firstCard.image}`
  tableCard2El.src = `${secondCard.image}`
  tableCard3El.style.display = ('none')
  tableCard4El.style.display = ('none')
  playMessageEl.style.display = ('initial')
  playMessageEl.innerHTML = `You have ${player.sum}`
}



// //Deal 2 random Cards (old version)
// function dealPlayerCards() {
//   firstCard = (Math.floor(Math.random() * 11) + 1)
//   secondCard = (Math.floor(Math.random() * 11) + 1)
//   sum = firstCard + secondCard
//   player.sum = sum
//   player.cards = [firstCard, secondCard]
//   dealtCardsEl.innerHTML = `Cards: ${player.cards[0]}, ${player.cards[1]}`
//   playMessageEl.style.display = ('block')
//   playMessageEl.innerHTML = `You have ${player.sum}`
// }

//Deal 2 cards to the dealer, only display the first card
function dealDealerCards() {
  firstCard = (Math.floor(Math.random() * 11) + 1)
  secondCard = (Math.floor(Math.random() * 11) + 1)
  sum = firstCard + secondCard
  dealer.sum = sum
  dealer.cards = [firstCard, secondCard]
  dealerCardsEl.innerHTML = `Card: ${dealer.cards[0]},  🂠 `
}


// update to show the dealer sum during check
function checkWin() {
  if (player.sum > dealer.sum) {
    playMessageEl.innerHTML = `You Win! You have ${player.sum}`
    dealerCardsEl.innerHTML = `Card: ${dealer.cards[0]}, ${dealer.cards[1]}
    <br />
    Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `flex`
    playerWinSound.play()
  } 
  else if (player.sum < dealer.sum) {
    playMessageEl.innerHTML = `You Lose, Dealer Wins!`
    dealerCardsEl.innerHTML = `Card: ${dealer.cards[0]}, ${dealer.cards[1]}
    <br />
    Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `flex`
    playerLoseSound.play()
  }
  else {
    playMessageEl.innerHTML = `Push! Nobody Wins`
    dealerCardsEl.innerHTML = `Card: ${dealer.cards[0]}, ${dealer.cards[1]}
    <br />
    Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `flex`
  }
  
}


//Check for Blackjack
function checkBlackjack() {
  if (player.sum === 21) {
    playMessageEl.innerHTML = `Blackjack!! You Win`
    dealerCardsEl.innerHTML = `Card: ${dealer.cards[0]}, ${dealer.cards[1]}
    <br />
    Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `flex`
    blackjackWinSound.play()
  } 
  else if (player.sum > 21){
    playMessageEl.innerHTML = `BUSTED! You Lose`
    dealerCardsEl.innerHTML = `Card: ${dealer.cards[0]}, ${dealer.cards[1]}
    <br />
    Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `flex`
    playerLoseSound.play()
  } 
  else {
    playMessageEl.innerHTML = `You have ${player.sum}. Hit or Stay?`
    playAgainBtnEl.style.display = `none`
  }
}

function playerHit() {
  let card = (Math.floor(Math.random() * 11) + 1)
  player.cards.push(card)
  player.sum += card
  dealtCardsEl.innerHTML = `Cards: ${player.cards.join(', ')}`
  playMessageEl.innerHTML = `You have ${player.sum}`
  checkBlackjack()
}

function playerStay() {
  checkWin()
}

function playAgain() {
  cardShuffleSound.play()
  hitBtnEl.style.display = `initial`
  stayBtnEl.style.display = `initial`
  playAgainBtnEl.style.display = `initial`
  dealPlayerCards()
  dealDealerCards()
  checkBlackjack()
}


// Write a method for players turn:
// - ask them hit/stay?
// - deal them 1 card if hit
// - if stay, check blackjack
// - if bust or blackjack deliver message

// Once game over, and outcome correctly reported, ask player if they want to play again & loop back through game after shuffling.  






function openPopup() {
    document.getElementById("game-rules").style.display = "block"
  }
  
function closePopup() {
  document.getElementById("game-rules").style.display = "none"
}
  
// Listeners
buttonEl.addEventListener('click', openPopup)
playAgainBtnEl.addEventListener('click', playAgain)
hitBtnEl.addEventListener('click', playerHit)
stayBtnEl.addEventListener('click', playerStay)
