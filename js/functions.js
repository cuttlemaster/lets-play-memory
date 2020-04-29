// receive the number of desired cards for the game and return
// an array of numbers from 1 to the number desired for the game board
// const createTotalCards = (numberOfCards) => {
//   let totalCards = [];
//   for (i = 1; i < (numberOfCards + 1); i++) { totalCards.push(i); }
//   return totalCards;
// };

const getRandomCard = (startingArray) => {
  return Math.floor(Math.random() * Math.floor(startingArray.length));
};

const buildCardArray = (cardsNeeded) => {
  let cards = [];

  for (i = 1; i < (cardsNeeded + 1); i++) {
    cards.push(i);
  }

  return cards;
};

const buildShuffledCardArray = (startingCardOrder, numberOfCards) => {
  let shuffledCards = [];

  for (i = 0; i < numberOfCards; i++) {
    const randomNumber = getRandomCard(startingCardOrder);
    shuffledCards.push(startingCardOrder.splice(randomNumber, 1));
  }

  return shuffledCards;
};

const buildGameBoard = (numberOfCards, imageChoice) => {
  const gameBoard = document.querySelector('.game-board');

  console.log(`Board Size: ${numberOfCards}`);
  console.log(`Image: ${imageChoice}`)

  startingCardOrder = buildCardArray(numberOfCards);
  console.log(`Starting Order: ${startingCardOrder}`);

  shuffledCardOrder = buildShuffledCardArray(startingCardOrder, numberOfCards);
  console.log(`Shuffled Order: ${shuffledCardOrder}`);

  for (i = 0; i < numberOfCards; i++) {
    const newCardTile = document.createElement('section');
    const newCardTileImage = document.createElement('img');
    newCardTileImage.setAttribute('src', 'http://placehold.it/140x140?text=IMAGE');
    newCardTile.appendChild(newCardTileImage);
    gameBoard.appendChild(newCardTile);
  }
};
