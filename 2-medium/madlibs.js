// Make a variable for the animal
const animalSpan = document.querySelector(".animal");
const animalInput = document.querySelector("#animal");

// Country
const countrySpan = document.querySelector(".country");

const form = document.getElementById("madLibForm");
let story = document.getElementById("madLibStory");


// Submit form
form.addEventListener("submit",function(event){
    let countryInput = document.getElementById("country").value;
    console.log(countryInput);

    event.preventDefault();
    
    // Set inner text of span to input value
    animalSpan.innerText = animalInput.value;

    // Set inner text of country to the input value
    countrySpan.innerText = countryInput;

    // display the whole story
    story.style.display = "block";
})