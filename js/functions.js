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
  gameBoard.classList.add(`tiles-${numberOfCards}`);

  // console.log(`Board Size: ${numberOfCards}`);
  // console.log(`Image: ${imageChoice}`)

  startingCardOrder = buildCardArray(numberOfCards);
  // console.log(`Starting Order: ${startingCardOrder}`);

  shuffledCardOrder = buildShuffledCardArray(startingCardOrder, numberOfCards);
  // console.log(`Shuffled Order: ${shuffledCardOrder}`);

  for (i = 0; i < numberOfCards; i++) {
    const newCardTile = document.createElement('section');
    newCardTile.classList.add(`tiles-${numberOfCards}`);

    const newCardTileImage = document.createElement('img');
    newCardTileImage.setAttribute('src', `images/${imageChoice}/${imageChoice}${shuffledCardOrder[i]}.svg`);
    newCardTile.appendChild(newCardTileImage);
    gameBoard.appendChild(newCardTile);
  }
};
