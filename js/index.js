import { characters } from "./characters.js";
function selectorMaker() { 
    characters.forEach((character) => {
        document.querySelector(".selector").insertAdjacentHTML(
            "beforeend",
        `<option value="${character.name}">${character.name}</option>
        `
        )
    });
}
selectorMaker();
