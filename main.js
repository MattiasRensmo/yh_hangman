const dictionary = ["children", "roomy", "calculator", "reminiscent", "ubiquitous"];

const word = randomWord(dictionary);
let correctGuesses; // Här lägger vi in alla rätta bokstäver på rätt plats "a--ba"

drawLetterLines(word);

//Event listner för bokstav på tangentbord eller klick på själva bokstäverna (mattias) letterGuess(letter, word)

function randomWord(dictionary) {
 //Tar ett ord ur dictionary
}

function drawLetterLines(word) {
 //Ritar ut så många linjer som ordet är långt
}

function letterGuess(letter, word) {
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
