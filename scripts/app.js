function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function continueGame() {
  const currentAlphabet = document.getElementById("current-alphabet");
  const alphabet = getARandomAlphabet();

  currentAlphabet.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("playground");

  continueGame();
}
