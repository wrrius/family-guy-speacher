import { characters } from "./characters.js";
function selectorMaker() { 
    characters.forEach((character) => {
        console.log(character)
/*         document.body.insertAdjacentHTML(
            "afterbegin",
        `   <h1>${character}</h1>`
        ) */
    });
}
selectorMaker();
