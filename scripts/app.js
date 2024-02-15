function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

document.addEventListener("keyup", function (e) {
  const playerPressed = e.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;

    setTextElementValueById("current-score", newScore);

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;

    if (newLife <= 0) {
      gameOver();
    }

    setTextElementValueById("current-life", newLife);
  }
});

function continueGame() {
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const alphabet = getARandomAlphabet();

  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  hideElementById("score-board");
  showElementById("playground");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("playground");
  showElementById("score-board");

  const finalScore = getTextElementValueById("current-score");

  setTextElementValueById("find-score", finalScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
