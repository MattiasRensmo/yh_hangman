const bodyparts = document.querySelectorAll("#hangman__bodyparts > *");
console.log(bodyparts);

bodyparts.forEach((part) => part.classList.add("hidden"));

let part = 0;

document.addEventListener("click", () => {
 if (part == bodyparts.length) return;
 bodyparts[part].classList.remove("hidden");
 part++;
});
