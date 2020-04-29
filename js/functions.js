const matchIDs = ['12','21','34',,'43','56','65','78','87','910','109','1112','1211','1314','1413','1516','1615','1718','1817','1920','2019','2122','2221','2324','2423','2526','2625','2728','2827','2930','3029','3132','3231','3334','3433','3536','3635']

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
  // const card1 = parseInt(localStorage.getItem('card1'));
  // const card2 = parseInt(localStorage.getItem('card2'));

  const card1 = localStorage.getItem('card1');
  const card2 = localStorage.getItem('card2');

  const currentMatchID = card1 + card2;
  console.log(`matchID = ${currentMatchID}`);

  if (matchIDs.includes(currentMatchID)) {
    return true;
  } else {
    return false;
  }
};


const clearLocalStorage = () => { localStorage.clear(); };

const flipCardsBackOver = () => {
  const cards = [...document.querySelectorAll('.game-board section.visible')];
  cards.forEach((card) => {
    card.classList.remove('visible');
    card.classList.add('hidden');
  });
};

const keepCardsVisible = () => {
  const cards = [...document.querySelectorAll('.game-board section.visible')];
  cards.forEach((card) => {
    card.classList.remove('visible');
    card.classList.add('matched');
  });
};
