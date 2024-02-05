const incrementBtn = document.querySelector(".increment");
const saveBtn = document.querySelector(".save");
const people = document.querySelector(".people");
const entries = document.querySelector(".entries");

let numberOfPeople = 0;

incrementBtn.addEventListener("click", function () {
    numberOfPeople++;
    people.textContent = numberOfPeople
})

saveBtn.addEventListener("click", function () {
    let entryString = numberOfPeople + " - ";
    entries.textContent += entryString;
    people.textContent = 0;
    numberOfPeople = 0;
})
