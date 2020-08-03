//* Creates the deck
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit,
      });
    }
  }
  return deck;
}

//* Draws a card from deck
function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

//* Draws multiple cards from deck
function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

//* Shuffles the deck
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const firstDeck = initializeDeck();
const drawnCards = [];

shuffle(firstDeck);

const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);

console.log(hand1); // [ { value: '3', suit: 'hearts' }, { value: 'A', suit: 'clubs' } ]
console.log(hand2); // [ { value: 'J', suit: 'diamonds' }, { value: 'A', suit: 'hearts' }
console.log(pokerHand);

// Result
// [
//     { value: '2', suit: 'clubs' },
//     { value: 'A', suit: 'spades' },
//     { value: '7', suit: 'diamonds' },
//     { value: '6', suit: 'diamonds' },
//     { value: 'Q', suit: 'diamonds' }
//   ]
