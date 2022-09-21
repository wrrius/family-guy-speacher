import { characters } from "./characters.js";
function selectorMaker() {
  characters.forEach((character) => {
    document.querySelector(".selector").insertAdjacentHTML(
      "beforeend",
      `<option value="${character.name}">${character.name}</option>
        `
    );
  });
}
selectorMaker();
document.querySelector(".selector").addEventListener("change", function () {
  document.querySelectorAll(".button").forEach((e) => e.remove());
  const selectedCharacter = characters.find(
    (character) => character.name === this.value
  );
  selectedCharacter.words.forEach((word) => {
    document.querySelector(".selector").insertAdjacentHTML(
      "afterend",
      `<button class=button id=${word.word}>${word.word}</button>
          `
    );
  });
  document.querySelectorAll(".button").forEach((button) =>
  button.addEventListener("click", function () {
    const usedWord = selectedCharacter.words.find((word) => word.word === this.textContent)
    const audio = new Audio(usedWord.audio);
    audio.play();
  })
);
});
