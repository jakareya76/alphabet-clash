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
    console.log("yohohohoho");
    continueGame();
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
  showElementById("playground");

  continueGame();
}
