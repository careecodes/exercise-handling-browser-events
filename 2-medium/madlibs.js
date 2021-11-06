// Variables for span elements
const animalSpan = document.querySelector(".animal");
const countrySpan = document.querySelector(".country");
const pluralNounSpan = document.querySelector(".pluralNoun");
const foodSpan = document.querySelector(".food");
const deviceSpan = document.querySelector(".device");

const form = document.getElementById("madLibForm");
const story = document.getElementById("madLibStory");


// Submit form
form.addEventListener("submit",function(event){
    event.preventDefault();

    // Input variables
    let animalInput = document.querySelector("#animal").value;
    let countryInput = document.querySelector("#country").value;
    let pluralNounInput = document.querySelector("#pluralNoun").value;
    let foodInput = document.querySelector("#food").value;
    let deviceInput = document.querySelector("#device").value;
    
    // Set inner text of span to input value
    animalSpan.innerText = animalInput;
    countrySpan.innerText = countryInput;
    pluralNounSpan.innerText = pluralNounInput;
    foodSpan.innerText = foodInput;
    deviceSpan.innerText = deviceInput;

    // display the whole story
    story.style.display = "block";
})