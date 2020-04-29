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

  startingCardOrder = buildCardArray(numberOfCards);
  shuffledCardOrder = buildShuffledCardArray(startingCardOrder, numberOfCards);

  for (i = 0; i < numberOfCards; i++) {
    const newCardTile = document.createElement('section');
    newCardTile.setAttribute('data-id', `${shuffledCardOrder[i]}`);
    newCardTile.classList.add(`tiles-${numberOfCards}`);
    newCardTile.classList.add('hidden');

    const newCardTileImage = document.createElement('img');
    newCardTileImage.setAttribute('src', `images/${imageChoice}/${imageChoice}${shuffledCardOrder[i]}.svg`);
    newCardTile.appendChild(newCardTileImage);
    gameBoard.appendChild(newCardTile);
  }

  const generatedCards = [...document.querySelectorAll('.game-board section')];
  return generatedCards;
};


const checkForMatch = () => {
  const card1 = parseInt(localStorage.getItem('card1'));
  const card2 = parseInt(localStorage.getItem('card2'));

  if (card2 === (card1 + 1) || card2 === (card1 - 1)) {
    return true;
  } else {
    return false;
  }
};
