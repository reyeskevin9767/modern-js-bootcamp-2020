//* Using Object and Methods
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    //* Create a deck
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
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
};

//* First Deck
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();

const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

console.log(h1); // [ { value: '8', suit: 'diamonds' }, { value: '7', suit: 'clubs' } ]
console.log(h2); // [ { value: '4', suit: 'diamonds' }, { value: 'J', suit: 'diamonds' } ]
console.log(h3);

// Results
// [
//     { value: 'A', suit: 'clubs' },
//     { value: 'K', suit: 'clubs' },
//     { value: 'Q', suit: 'diamonds' },
//     { value: '9', suit: 'clubs' },
//     { value: '6', suit: 'spades' }
//   ]

//* Second Deck
const deckTwo = makeDeck();
deckTwo.initializeDeck();

const h4 = deckTwo.drawMultiple(2);
const h5 = deckTwo.drawMultiple(2);
const h6 = deckTwo.drawMultiple(5);

console.log(h4); // [ { value: 'A', suit: 'clubs' }, { value: 'A', suit: 'spades' } ]
console.log(h5); // [ { value: 'A', suit: 'diamonds' }, { value: 'A', suit: 'hearts' } ]
console.log(h6);

// Results
// [
//     { value: 'K', suit: 'clubs' },
//     { value: 'K', suit: 'spades' },
//     { value: 'K', suit: 'diamonds' },
//     { value: 'K', suit: 'hearts' },
//     { value: 'Q', suit: 'clubs' }
//   ]
