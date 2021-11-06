
// I want to be able to put "dog" in the input field and have my story appear
// after I press the submit button with "dog" in the animal blank.

// Make a variable for the animal
const animalSpan = document.querySelector(".animal");
const animalInput = document.querySelector("#animal");
const form = document.getElementById("madLibForm");
let story = document.getElementById("madLibStory");

// EventListener listens for click
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    // Set inner text of span to input value
    animalSpan.innerText = animalInput.value;

    // display the whole story
    story.style.display = "block";
})