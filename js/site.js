document.addEventListener("DOMContentLoaded", () => {

  // store various elements into arrays and consts for use
  const boardSize = [...document.querySelectorAll('header button')];
  const imageType = [...document.querySelectorAll('.image-selection section button')];

  const imageSelection = document.querySelector('.image-selection');
  const startGame = document.querySelector('.start-game');
  const gameBoard = document.querySelector('.game-board');

  // initialize the default size of the game
  let numberOfCards = 16;

  // whenever a game size button is clicked, remove the active state
  // from all buttons and then add the active state back to the once clicked
  boardSize.forEach( (button) => {
    button.addEventListener('click', (e) => {
      boardSize.forEach( (activeButton) => {
        activeButton.classList.remove('active');
      });

      if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }

      // update the size of the game based on which button is clicked
      numberOfCards = parseInt(e.target.getAttribute('data-size'));
    });
  });

  // whenever an image type button is clicked, remove the active state
  // from all buttons and then add the active state back to the once clicked
  imageType.forEach( (button) => {
    button.addEventListener('click', (e) => {
      imageType.forEach( (activeButton) => {
        activeButton.classList.remove('active');
      });

      if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }

      // store the image choice the user makes for board creation
      imageChoice = e.target.getAttribute('data-image');

      // show the start game button after image type selection
      startGame.classList.remove('hide');
    });
  });


  // when the "start game" text is clicked, hide the image type selection
  // and reveal the game board tiles to the user so the game can begin
  startGame.addEventListener('click', (e) => {
    e.target.classList.add('hide');
    imageSelection.classList.add('hide');
    gameBoard.classList.remove('hide');

    buildGameBoard(numberOfCards, imageChoice);
  });

});
