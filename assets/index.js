//Objects
const player = {
  name: "",
  chips: 1000,
  sum: 0
}

const dealer = {
  name: "",
  chips: 0,
  card2: [],
  sum: 0
}


let deck = [
  { image: "./assets/images/cards/2_of_clubs.png" , value: 2 },
  { image: "./assets/images/cards/2_of_diamonds.png" , value: 2 },
  { image: "./assets/images/cards/2_of_hearts.png" , value: 2 },
  { image: "./assets/images/cards/2_of_spades.png" , value: 2 },
  { image: "./assets/images/cards/3_of_clubs.png" , value: 3 },
  { image: "./assets/images/cards/3_of_diamonds.png" , value: 3 },
  { image: "./assets/images/cards/3_of_hearts.png" , value: 3 },
  { image: "./assets/images/cards/3_of_spades.png" , value: 3 },
  { image: "./assets/images/cards/4_of_clubs.png" , value: 4 },
  { image: "./assets/images/cards/4_of_diamonds.png" , value: 4 },
  { image: "./assets/images/cards/4_of_hearts.png" , value: 4 },
  { image: "./assets/images/cards/4_of_spades.png" , value: 4 },
  { image: "./assets/images/cards/5_of_clubs.png" , value: 5 },
  { image: "./assets/images/cards/5_of_diamonds.png" , value: 5 },
  { image: "./assets/images/cards/5_of_hearts.png" , value: 5 },
  { image: "./assets/images/cards/5_of_spades.png" , value: 5 },
  { image: "./assets/images/cards/6_of_clubs.png" , value: 6 },
  { image: "./assets/images/cards/6_of_diamonds.png" , value: 6 },
  { image: "./assets/images/cards/6_of_hearts.png" , value: 6 },
  { image: "./assets/images/cards/6_of_spades.png" , value: 6 },
  { image: "./assets/images/cards/7_of_clubs.png" , value: 7 },
  { image: "./assets/images/cards/7_of_diamonds.png" , value: 7 },
  { image: "./assets/images/cards/7_of_hearts.png" , value: 7 },
  { image: "./assets/images/cards/7_of_spades.png" , value: 7 },
  { image: "./assets/images/cards/8_of_clubs.png" , value: 8 },
  { image: "./assets/images/cards/8_of_diamonds.png" , value: 8 },
  { image: "./assets/images/cards/8_of_hearts.png" , value: 8 },
  { image: "./assets/images/cards/8_of_spades.png" , value: 8 },
  { image: "./assets/images/cards/9_of_clubs.png" , value: 9 },
  { image: "./assets/images/cards/9_of_diamonds.png" , value: 9 },
  { image: "./assets/images/cards/9_of_hearts.png" , value: 9 },
  { image: "./assets/images/cards/9_of_spades.png" , value: 9 },
  { image: "./assets/images/cards/10_of_clubs.png" , value: 10 },
  { image: "./assets/images/cards/10_of_diamonds.png" , value: 10 },
  { image: "./assets/images/cards/10_of_hearts.png" , value: 10 },
  { image: "./assets/images/cards/10_of_spades.png" , value: 10 },
  { image: "./assets/images/cards/ace_of_clubs.png" , value: 11 },
  { image: "./assets/images/cards/ace_of_diamonds.png" , value: 11 },
  { image: "./assets/images/cards/ace_of_hearts.png" , value: 11 },
  { image: "./assets/images/cards/ace_of_spades.png" , value: 11 },
  { image: "./assets/images/cards/jack_of_clubs.png" , value: 10 },
  { image: "./assets/images/cards/jack_of_diamonds.png" , value: 10 },
  { image: "./assets/images/cards/jack_of_hearts.png" , value: 10 },
  { image: "./assets/images/cards/jack_of_spades.png" , value: 10 },
  { image: "./assets/images/cards/king_of_clubs.png" , value: 10 },
  { image: "./assets/images/cards/king_of_diamonds.png" , value: 10 },
  { image: "./assets/images/cards/king_of_hearts.png" , value: 10 },
  { image: "./assets/images/cards/king_of_spades.png" , value: 10 },
  { image: "./assets/images/cards/queen_of_clubs.png" , value: 10 },
  { image: "./assets/images/cards/queen_of_diamonds.png" , value: 10 },
  { image: "./assets/images/cards/queen_of_hearts.png" , value: 10 },
  { image: "./assets/images/cards/queen_of_spades.png" , value: 10 },
];




//Global Variables
var firstCard
var secondCard
var sum
var gamePot = 0

//DOM Variables
const buttonEl = document.getElementById('rules-btn')
const playAgainBtnEl = document.getElementById('play-again-btn')
const hitBtnEl = document.getElementById('hit-btn')
const stayBtnEl = document.getElementById('stay-btn')
const startGameBtn = document.getElementById('start-game-btn')
const twentyFiveBtnEl = document.getElementById('twenty-five-btn')
const fiftyBtnEl = document.getElementById('fifty-btn')
const allInBtnEl = document.getElementById('all-in-btn')
const hundredBtnEl = document.getElementById('hundred-btn')

const gameRulesMessageEl = document.getElementById(`game-rules-message`)
const gameRulesEl = document.getElementById(`game-rules`)
const playMessageEl = document.getElementById('play-message')
const dcCardsAreaEl = document.getElementById('dc-cards-area')
const tableCard1El = document.getElementById('tCard1')
const tableCard2El = document.getElementById('tCard2')
const tableCard3El = document.getElementById('tCard3')
const tableCard4El = document.getElementById('tCard4')
const dealerCard1El = document.getElementById('dCard1')
const dealerCard2El = document.getElementById('dCard2')
const dealerMessageEl = document.getElementById('dealerMessage')
const potAmountMessageEl = document.getElementById('pot-amount-message')
const betMessageEl = document.getElementById('bet-message')
const playerWalletMessageEl = document.getElementById('player-wallet-message')
const betButtonAreaEl = document.getElementById('bet-button-area')

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
  tableCard1El.src = `${firstCard.image}`
  tableCard2El.src = `${secondCard.image}`
  tableCard3El.style.display = ('none')
  tableCard4El.style.display = ('none')
  playMessageEl.style.display = ('initial')
  playMessageEl.innerHTML = `You have ${player.sum}`
}



//Deal 2 cards to the dealer, only display the first card
function dealDealerCards() {
  firstCard = selectRandomCard(deck)
  secondCard = selectRandomCard(deck)
  sum = firstCard.value + secondCard.value
  dealer.sum = sum
  dealer.card2 = secondCard.image
  dealerCard1El.src = `${firstCard.image}`
  dealerCard2El.src = `./assets/images/cards/card_red_back.png`
}

function playerHit() {
  let card = selectRandomCard(deck)
  player.sum += card.value
  if (tableCard3El.style.display == `none`) {
    tableCard3El.style.display = `initial`
    tableCard3El.src = `${card.image}`
    playMessageEl.innerHTML = `You have ${player.sum}`
    checkBusted()
  } 
  else {
  tableCard4El.style.display = `initial`
  tableCard4El.src = `${card.image}`
  playMessageEl.innerHTML = `You have ${player.sum}`
  checkBusted()
}

}


// update to show the dealer sum during check
function checkWin() {
  if (player.sum > dealer.sum) {
    playMessageEl.innerHTML = `You have ${player.sum}. You Win ${gamePot * 2}`
    dealerCard2El.src = `${dealer.card2}`
    dealerMessageEl.style.display = ('block')
    dealerMessageEl.innerHTML = `Dealer has ${dealer.sum}`
    player.chips += (gamePot * 2)
    playerWalletMessageEl.innerHTML = `Player: ${player.chips}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `initial`
    playerWinSound.play()
  } 
  else if (player.sum < dealer.sum) {
    playMessageEl.innerHTML = `You lose! Dealer Wins!`
    dealerCard2El.src = `${dealer.card2}`
    dealerMessageEl.style.display = ('block')
    dealerMessageEl.innerHTML = `Dealer has ${dealer.sum}`
    player.chips -= gamePot
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `initial`
    playerLoseSound.play()
  }
  else {
    playMessageEl.innerHTML = `Push! Nobody Wins`
    dealerCard2El.src = `${dealer.card2}`
    dealerMessageEl.style.display = ('block')
    dealerMessageEl.innerHTML = `Dealer has ${dealer.sum}`
    player.chips += gamePot
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `flex`
  }
}


//Check for Blackjack
function checkBlackjack() {
  if (player.sum === 21) {
    playMessageEl.innerHTML = `Blackjack!! You Win`
    dealerCard2El.src = `${dealer.card2}`
    dealerMessageEl.style.display = ('block')
    dealerMessageEl.innerHTML = `Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `initial`
    blackjackWinSound.play()
  } 
}

function checkBusted() {
  if (player.sum > 21){
    playMessageEl.innerHTML = `BUSTED! You Lose`
    dealerCard2El.src = `${dealer.card2}`
    dealerMessageEl.style.display = `block`
    dealerMessageEl.innerHTML = `Dealer has ${dealer.sum}`
    hitBtnEl.style.display = `none`
    stayBtnEl.style.display = `none`
    playAgainBtnEl.style.display = `initial`
    playerLoseSound.play()
  } 
}



function playerStay() {
  checkBusted()
  checkWin()
}

function betTwentyFive() {
  gamePot += 25
  player.chips -= 25
  potAmountMessageEl.innerHTML = `Bet Amount: ${gamePot}`
  playerWalletMessageEl.innerHTML = `Player: $${player.chips}`
  buttonChecker()
  minBetChecker()
}

function betFifty() {
  gamePot += 50
  player.chips -= 50
  potAmountMessageEl.innerHTML = `Bet Amount: ${gamePot}`
  playerWalletMessageEl.innerHTML = `Player: $${player.chips}`
  buttonChecker()
  minBetChecker()
}

function betHundred() {
  gamePot += 100
  player.chips -= 100
  potAmountMessageEl.innerHTML = `Bet Amount: ${gamePot}`
  playerWalletMessageEl.innerHTML = `Player: $${player.chips}`
  buttonChecker()
  minBetChecker()
}

function betAllIn() {
  gamePot += player.chips
  player.chips = 0
  potAmountMessageEl.innerHTML = `Bet Amount: ${gamePot}`
  playerWalletMessageEl.innerHTML = `Player: $${player.chips}`
  buttonChecker()
  minBetChecker()
}


function buttonChecker() {
  if (player.chips <= 99) {
    hundredBtnEl.disabled = true
    
  }
  if (player.chips <= 49) {
    fiftyBtnEl.disabled = true
    
  }
  if (player.chips <= 24) {
    twentyFiveBtnEl.disabled = true
    
  }
  if (player.chips === 0) {
    allInBtnEl.disabled = true;
    hundredBtnEl.disabled = true;
    fiftyBtnEl.disabled = true;
    twentyFiveBtnEl.disabled = true;
    betMessageEl.innerHTML = `You're out of chips!`
    
  }
}

function minBetChecker() {
  if (gamePot >= 25) {
    startGameBtn.style.display = `flex`
  }
  
}

function playGame() {
  cardShuffleSound.play()
  startGame()
  dealPlayerCards()
  dealDealerCards()
  checkBlackjack()
  checkBusted()
}

function resetGame() {
  setRules()
  gamePot = 0
  betButtonAreaEl.style.visibility = `initial`
  hitBtnEl.style.display = `none`
  stayBtnEl.style.display = `none`
  playAgainBtnEl.style.display = `none`
  dealerMessageEl.style.display = `none`
  potAmountMessageEl.innerHTML = ` `
  playMessageEl.style.display = `none`
  playerWalletMessageEl.innerHTML = `Player: ${player.chips}`
  dcCardsAreaEl.style.visibility = `hidden`
  dealerCard1El.style.visibility = `hidden`
  dealerCard2El.style.visibility = `hidden`
  }

function playGameAgain () {
  resetGame()
}

function startGame() {
  hitBtnEl.style.display = `flex`
  stayBtnEl.style.display = `flex`
  startGameBtn.style.display = `none`
  dealerMessageEl.style.display = `none`
  potAmountMessageEl.innerHTML = ` `
  betButtonAreaEl.style.visibility = `hidden`
  dcCardsAreaEl.style.visibility = `initial`
  dealerCard1El.style.visibility = `initial`
  dealerCard2El.style.visibility = `initial`
}


function openPopup() {
    document.getElementById("game-rules").style.display = "block"
  }

function setRules() {
  gameRulesMessageEl.innerText = `
  🎯 | Goal: Get 21 or higher than the dealer without going over 21. 

  🃏 | Cards: Numbers are their value, face cards = 10, Ace = 11

  💵 | Chips: Each player will start at $1000 chips. Minimum bet is $50. Game is 1:1

  🎰 | Player's Turn: Tap "Hit" for another card or "Stay" to keep your total
  
  🏆 | To Win: If you're dealt 21, BLACKJACK!! - you instantly win (3:2 odds)! ~ OR ~ If you're closer to 21 than the dealer, you win!`
}
  
function closePopup() {
  document.getElementById("game-rules").style.display = "none"
}
  
// Listeners
buttonEl.addEventListener('click', openPopup)
playAgainBtnEl.addEventListener('click', playGameAgain)
hitBtnEl.addEventListener('click', playerHit)
stayBtnEl.addEventListener('click', playerStay)
twentyFiveBtnEl.addEventListener('click', betTwentyFive)
fiftyBtnEl.addEventListener('click', betFifty)
allInBtnEl.addEventListener('click', betAllIn)
hundredBtnEl.addEventListener('click', betHundred)
startGameBtn.addEventListener('click', playGame)
window.addEventListener("load", resetGame)



