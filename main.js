/*
 * All dom objects
 */
const modal = document.querySelector("#modal");
const bodyParts = document.querySelectorAll("#hangman__body-parts > *");
const wordLine = document.querySelector(".word-line");
//Philip
const loserModal = document.getElementById("loser__modal");
const tryAgainButton = loserModal.querySelector(".loser__button");
<<<<<<< HEAD
let winnerModal = document.getElementById("winner__modal");
let playAgainButton = document.querySelector(".winner__button");
=======
const allLetters = document.querySelectorAll(".letters__letter");
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7

/*
 * Game tracking variables
 */
let wrongGuesses;
let guesses;
let guessedWord;
let lang = "sv";

<<<<<<< HEAD
const dictionary = [
  "children",
  "roomy",
  "calculator",
  "reminiscent",
  "ubiquitous",
=======
/*
 * Game setup variables
 */
const sweWords = [
  "alfahona",
  "alibi",
  "arrende",
  "atypisk",
  "avbön",
  "baneman",
  "bedrift",
  "blusärm",
  "blygdben",
  "blyghet",
  "blåsrör",
  "bris",
  "buktala",
  "bärbar",
  "bärfis",
  "cykel",
  "dagg",
  "dallring",
  "disk",
  "dödstal",
  "enträgen",
  "fabulös",
  "fall",
  "fasthet",
  "festyra",
  "fjättrar",
  "flankera",
  "fradga",
  "freongas",
  "fridans",
  "fristat",
  "fusklapp",
  "gallsten",
  "gata",
  "genetisk",
  "glädje",
  "golvdrag",
  "gråt",
  "gyllene",
  "gänglig",
  "hallgolv",
  "halvklot",
  "hemmabio",
  "hundår",
  "huslänga",
  "huvudlös",
  "höfthöjd",
  "högerarm",
  "höstvete",
  "inåtböjd",
  "kansli",
  "klädstil",
  "kota",
  "lakrits",
  "latmask",
  "livskris",
  "lusttur",
  "magasin",
  "mala",
  "minera",
  "mintgrön",
  "mistlur",
  "nagla",
  "nedför",
  "nervsjuk",
  "njuta",
  "nydöpt",
  "nätthet",
  "oknuten",
  "okristen",
  "outhyrd",
  "paradis",
  "pilot",
  "plogning",
  "plåtdörr",
  "popgrupp",
  "portlås",
  "puffbyxa",
  "raplåt",
  "relegera",
  "rovfågel",
  "salami",
  "saldo",
  "sidoläge",
  "skavsår",
  "skohylla",
  "skåning",
  "sojakorv",
  "spariver",
  "spela",
  "sugkopp",
  "särbo",
  "tablå",
  "tjockis",
  "trubadur",
  "träna",
  "tyngdlag",
  "tändkula",
  "undgå",
  "urna",
  "utdöma",
  "utpumpad",
  "vanmakt",
  "vapen",
  "vedpinne",
  "wiki",
  "yttersta",
  "zoolog",
  "årsbarn",
  "ökensand",
  "öppnare",
  "övre",
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
];
const engWords = ["children", "roomy", "calculator", "reminiscent", "ubiquitous"];
let dictionary = sweWords;
let word;
let possibleLetters;
/*
 * Setup
 */
showModal(
  "Hangman",
  `
<p>Välj en bokstav att gissa på med tangentbordet eller genom att klicka på bokstäverna på skärmen. </p>
<h2>Välj språk på orden</h2>
<div class="modal__flag-container">
<img class="modal__image modal__image-selected" id="swe"src="./img/flag_swe.png" alt="Swedish flag" title="Spela med svenska ord" />
<img class="modal__image" id="uk" src="img/flag_uk.svg" alt="UK flag" title="Play with english words" />
</div>
`,
  "Spela"
);

<<<<<<< HEAD
const word = randomWord(dictionary);
let guessedWord = "";
for (let i = 0; i < word.length; i++) {
  guessedWord += " ";
  console.log(word[i]);
=======
function setup() {
  bodyParts.forEach((part) => part.classList.add("hidden"));
  possibleLetters = [
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

  wrongGuesses = 0;
  guesses = 0;

  word = randomWord(dictionary);
  guessedWord = createGuessWord(word);
  drawLetterLines(guessedWord);
  allLetters.forEach((letter) => (letter.style.color = "white"));
  console.log("⭕  setup  allLetters:", allLetters);

  console.log("⭕ Rätt svar:", word);
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
}

<<<<<<< HEAD
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

showModal("Spela Hangman", "Vilket språk vill du ha?", "Spela");

drawLetterLines(guessedWord);

//Event listener för letter på keyboard (mattias)
document.addEventListener("keydown", (e) => {
  const letter = e.key.toLocaleLowerCase();
  letterGuess(letter, word);
  guess(letter, word);
});

modal.querySelector(".modal__button").addEventListener("click", () => {
  console.log("Spela");
  modal.classList.add("hidden");
=======
/*
 * Event listners
 */

// Event listner for everything in modal
modal.addEventListener("click", (e) => {
  console.log(e);
  const id = e.target.id;
  if (id === "swe") {
    lang = "sv";
    setLang(lang);
    console.log("Swedish");
  } else if (id === "uk") {
    lang = "en";
    setLang(lang);
    console.log("Eng");
  } else if (id === "play-button") {
    console.log("spela SPELA spela ");
    if (dictionary.length > 0) {
      setup();
      modal.close();
    }
  }
});

function setLang(lang) {
  let sel = lang === "en" ? "#uk" : "#swe";
  let unsel = lang === "en" ? "#swe" : "#uk";

  modal.querySelector(sel).classList.add("modal__image-selected");
  modal.querySelector(unsel).classList = "modal__image";

  dictionary = lang === "sv" ? sweWords : engWords;
}

//Event listener för letter på keyboard (mattias)
let fired = false; //To stop key smashing
document.addEventListener("keydown", (e) => {
  if (!fired) {
    fired = true;
    if (e.repeat) return;
    const letter = e.key.toLocaleLowerCase();
    letterGuess(letter, word);
  }
});

document.addEventListener("keyup", (e) => {
  fired = false;
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
});

//Event listener for press the letter (mattias)
const letterSection = document.querySelector(".letters");
letterSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("letters__letter")) {
    const letter = e.target.innerText.toLocaleLowerCase();
    letterGuess(letter, word);
<<<<<<< HEAD
    guess(letter, word);
=======
    // guess(letter, word);
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
  }
});

function randomWord(dic) {
  //Tar ett ord ur dictionary
  const random = Math.floor(Math.random() * dic.length);
  const word = dic[random];
  removeFromArray(word, dic);
  return word;
<<<<<<< HEAD
=======
}

function createGuessWord(word) {
  let w = "";
  for (let i = 0; i < word.length; i++) {
    w += " ";
  }
  return w;
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
}

function drawLetterLines(word) {
  //Draws as many lines as there are letters in the word
<<<<<<< HEAD
  //Optional variable "Hidden" set to false if we wanna shoa all letters at the end

  hidden = false; // ⭕ for testing purpose only, remove to hide letters"
=======
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
  wordLine.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    wordLine.innerHTML += `
    <p class="word-line__letter">${word[i].toUpperCase()}</p>
<<<<<<< HEAD
    `; //Show with letters
=======
    `;
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
  }
}

function letterGuess(letter, word) {
  //If its a allowed letter that has't been guessed yet
  if (possibleLetters.includes(letter)) {
    removeFromArray(letter, possibleLetters);
<<<<<<< HEAD
    //todo We should add a class to make the mouse pointer to an arrow when we cant click it anymore
    console.log("Guessed", letter);
  }
  // ✅ Om bokstaven redan är gissad - gör inget
  //Om bokstaven finns i word kör correctGuess
  // Om bokstaven inte finns i word -  kör wrongguess
=======
    guess(letter, word);
    // sleep(2000);
    //todo We should add a class to make the mouse pointer to an arrow when we cant click it anymore
    console.log("Guessed", letter);
  }
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
}

function guess(letter, word) {
  guesses++;
  if (word.includes(letter)) {
    document.getElementById(letter).style.color = "green";
<<<<<<< HEAD
=======
    document.getElementById(letter).style.cursor = "default";
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
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
<<<<<<< HEAD
    document.getElementById(letter).style.color = "red";
    drawHangman();
  }
  // rita upp bokstäverna på linjerna, gör val bokstav grön, lägg in i corect Guesses
  //Om corretGuesses == word winner()
=======
    document.getElementById(letter).style.cursor = "default";
    document.getElementById(letter).style.color = "red";
    drawHangman();
  }
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
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
<<<<<<< HEAD
  showModal("Vinst", "Grattis du har vunnit", "Spela Igen");
=======

  showModal(
    "Hangman",
    `
  <p>Grattis du hittade ordet -${word.toUpperCase()}- på ${guesses} gissningar. Du vinner en iPhone!</p>
  <h2>Du kan byta språk på orden</h2>
  <div class="modal__flag-container">
  <img class="modal__image ${
    lang == "sv" ? "modal__image-selected" : ""
  }" id="swe"src="./img/flag_swe.png" alt="Swedish flag" title="Spela med svenska ord" />

  <img class="modal__image ${
    lang == "en" ? "modal__image-selected" : ""
  }"" id="uk" src="img/flag_uk.svg" alt="UK flag" title="Play with english words" />
  </div>
  <p>${
    dictionary.length <= 0
      ? "Alla ord är slut, byt språk eller testa att gå ut lite"
      : ""
  }</p>
  `,
    "Spela igen"
  );

>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
  console.log(`Grattis du vann en iPhone med bara ${guesses} gissningar`);
}

function displayLoserModal() {
  //Visar förlorarrutan - Philip
  console.log("Game Over");
  loserModal.showModal();
}

function loser() {
  //Refreshar så vi kan spela igen - Philip
  displayLoserModal();
  tryAgainButton.addEventListener("click", () => {
    location.reload();
  });
}

function removeFromArray(str, arr) {
  return arr.splice(arr.indexOf(str), 1); //Remove str from arr
}

<<<<<<< HEAD
function showModal(heading, text, button) {
=======
function showModal(heading, content, button) {
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
  const modalContent = modal.querySelector(".modal__content");
  html = `
  <h1 class="modal__title">${heading}</h1>
  <section class="modal__content">${content}</section>
  <button id="play-button" class="modal__button">${button}</button>
  `;
  modalContent.innerHTML = html;
<<<<<<< HEAD
  modal.classList.remove("hidden");
=======
  modal.showModal();
>>>>>>> acffe982fe756a5cbdaf8745ec93fa8648ef6bc7
}
