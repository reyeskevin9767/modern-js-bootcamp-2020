//* Using Object and Methods
const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  //* Create a deck
  initializeDeck() {
    for (let value of this.values.split(',')) {
      for (let suit of this.suits) {
        this.deck.push({
          value,
          suit,
        });
      }
    }
    // return deck;
  },
  //* Draw a card from deck
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  //* Draws multiple cards from deck
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  //* Shuffle the deck
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

myDeck.initializeDeck();
myDeck.shuffle();
const hand1 = myDeck.drawMultiple(2);
const hand2 = myDeck.drawMultiple(2);
const hand3 = myDeck.drawMultiple(5);

console.log(hand1); // [ { value: '5', suit: 'diamonds' }, { value: 'J', suit: 'diamonds' } ]
console.log(hand2); // [ { value: 'Q', suit: 'spades' }, { value: '9', suit: 'clubs' } ]
console.log(hand3);

// Results
// [
//     { value: '3', suit: 'hearts' },
//     { value: 'Q', suit: 'hearts' },
//     { value: '9', suit: 'diamonds' },
//     { value: '8', suit: 'clubs' },
//     { value: '8', suit: 'hearts' }
// ]
