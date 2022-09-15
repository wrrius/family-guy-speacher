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
document.querySelector(".selector").addEventListener("click", function () {
    document.querySelectorAll(".button").forEach((e) => e.remove());
    document.body.insertAdjacentHTML(
        "beforeend",
        `<button class=button>${document.querySelector(".selector").value}</button>`
    )
});
