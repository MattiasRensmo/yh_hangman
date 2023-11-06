// TEST AREA BEGIN

const bodyParts = document.querySelectorAll("#hangman__body-parts > *");
bodyParts.forEach((part) => part.classList.add("hidden"));
let part = 0;

document.addEventListener("click", (e) => {
 // console.log(e.target.innerText);

 if (part == bodyParts.length) return;
 bodyParts[part].classList.remove("hidden");
 part++;
});

// TEST AREA END

const dictionary = ["children", "roomy", "calculator", "reminiscent", "ubiquitous"];

const word = randomWord(dictionary);
let correctGuesses; // Här lägger vi in alla rätta bokstäver på rätt plats "a--ba"
let possibleLetters = [
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z",
 "å",
 "ä",
 "ö",
];
drawLetterLines(word);

//Event listener för letter på keyboard (mattias)
document.addEventListener("keydown", (e) => {
 const letter = e.key.toLocaleLowerCase();

 letterGuess(letter, word);
});

//Event listener for press the letter (mattias)
const letterSection = document.querySelector(".letters");
letterSection.addEventListener("click", (e) => {
 if (e.target.classList.contains("letters__letter")) {
  const letter = e.target.innerText.toLocaleLowerCase();
  letterGuess(letter, word);
 }
});

function randomWord(dictionary) {
 //Tar ett ord ur dictionary
}

function drawLetterLines(word) {
 //Ritar ut så många linjer som ordet är långt
}

function letterGuess(letter, word) {
 //If its a allowed letter that has't been guessed yet
 if (possibleLetters.includes(letter)) {
  possibleLetters.splice(possibleLetters.indexOf(letter), 1); //Remove from allowed guesses
  //todo We should add a class to make the mouse pointer to an arrow when we cant click it anymore
  console.log("Guessed", letter);
 }
 //Om bokstaven redan är gissad - gör inget
 //Om bokstaven finns i word kör correctGuess
 // Om bokstaven inte finns i word -  kör wrongguess
}

function correctGuess(letter) {
 // rita upp bokstäverna på linjerna, gör val bokstav grön, lägg in i corect Guesses
 //Om corretGuesses == word winner()
}
function wrongGuess(letter) {
 // gör vald bokstav röd, lägg in i wrong Guesses
 //Om hela gubben är ritad loser()
}

function winner() {
 //Visar vinnarrutan
}

function loser() {
 //Visar förlorarrutan
}

function resetGame() {
 //Refreshar så vi kan spela igen
}
