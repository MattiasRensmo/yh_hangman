const bodyParts = document.querySelectorAll("#hangman__body-parts > *");
bodyParts.forEach((part) => part.classList.add("hidden"));
let wrongGuesses = 0;
let guesses = 0;

const dictionary = ["children", "roomy", "calculator", "reminiscent", "ubiquitous"];

const word = randomWord(dictionary);
let guessedWord = "";
for (let i = 0; i < word.length; i++) {
  guessedWord += " ";
  console.log(word[i]);
}
console.log("⭕ Rätt svar:", word);

let correctGuesses; // Här lägger vi in alla rätta bokstäver på rätt plats "a--ba"
// Detta kan ju oxå vara en array med de rätta bokstäverna.
// Så kan vi kolla om alla bokstäver i svarsordet finns i arrayn isåfall är det ju kalrt
// Eller så gör vi ett ord med mellanslag så är det lätt att skriva ut det på raden "a a" = "apa"
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
const wordLine = document.querySelector(".word-line");

drawLetterLines(guessedWord);

//Event listener för letter på keyboard (mattias)
document.addEventListener("keydown", (e) => {
  const letter = e.key.toLocaleLowerCase();
  letterGuess(letter, word);
  guess(letter, word);
});

//Event listener for press the letter (mattias)
const letterSection = document.querySelector(".letters"); //Gjorde ändringar i html, de finns 3 nya sections i letters, vet ej om det förstör nåt med denna rad//
letterSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("letters__letter")) {
    const letter = e.target.innerText.toLocaleLowerCase();
    letterGuess(letter, word);
    guess(letter, word);
  }
});

function randomWord(dic) {
  //Tar ett ord ur dictionary
  const random = Math.floor(Math.random() * dic.length);
  const word = dic[random];
  removeFromArray(word, dic);
  return word;
}

function drawLetterLines(word) {
  //Draws as many lines as there are letters in the word
  //Optional variable "Hidden" set to false if we wanna shoa all letters at the end

  hidden = false; // ⭕ for testing purpose only, remove to hide letters"
  wordLine.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    wordLine.innerHTML += `
    <p class="word-line__letter">${word[i].toUpperCase()}</p>
    `; //Show with letters
  }
}

function letterGuess(letter, word) {
  //If its a allowed letter that has't been guessed yet
  if (possibleLetters.includes(letter)) {
    removeFromArray(letter, possibleLetters);
    //todo We should add a class to make the mouse pointer to an arrow when we cant click it anymore
    console.log("Guessed", letter);
  }
  // ✅ Om bokstaven redan är gissad - gör inget
  //Om bokstaven finns i word kör correctGuess
  // Om bokstaven inte finns i word -  kör wrongguess
}

function guess(letter, word) {
  guesses++;
  if (word.includes(letter)) {
    document.getElementById(letter).style.color = "green";
    console.log("Correct letter", letter);
    let newGuessedWord = guessedWord.split("");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newGuessedWord[i] = letter;
      }
    }
    guessedWord = newGuessedWord.join("");
    drawLetterLines(guessedWord);
    if (guessedWord === word) winner();
  } else {
    document.getElementById(letter).style.color = "red";
    drawHangman();
  }
  // rita upp bokstäverna på linjerna, gör val bokstav grön, lägg in i corect Guesses
  //Om corretGuesses == word winner()
}

function drawHangman() {
  bodyParts[wrongGuesses].classList.remove("hidden");
  wrongGuesses++;
  if (wrongGuesses >= 11) {
    bodyParts[wrongGuesses].classList.remove("hidden");
    loser();
  }
}

function winner() {
  //Visar vinnarrutan
  console.log(`Grattis du vann en iPhone med bara ${guesses} gissningar`);
}

function loser() {
  //Visar förlorarrutan
  console.log("Game Over");
}

function resetGame() {
  //Refreshar så vi kan spela igen
}

function removeFromArray(str, arr) {
  return arr.splice(arr.indexOf(str), 1); //Remove str from arr
}
