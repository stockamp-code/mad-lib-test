window.onload = function() {
  let form = document.getElementById("madlibForm")
  
  form.onsubmit = function (event){
    event.preventDefault()

    console.log(event)

    const person1a = document.querySelector("span#person1a")
    const person1b = document.querySelector("span#person1b")
    const person1c = document.querySelector("span#person1c")
    const person2a = document.querySelector("span#person2a")
    const person2b = document.querySelector("span#person2b")
    const animal = document.querySelector("span#animal")
    const verb = document.querySelector("span#verb")
    const noun = document.querySelector("span#noun")
    const exclamation = document.querySelector("span#exclamation")

    const person1Input = document.getElementById("person1Input").value
    const person2Input = document.getElementById("person2Input").value
    const animalInput = document.getElementById("animalInput").value
    const verbInput = document.getElementById("verbInput").value
    const nounInput = document.getElementById("nounInput").value
    const exclamationInput = document.getElementById("exclamationInput").value

    person1a.innerText = person1Input;
    person1b.innerText = person1Input;
    person1c.innerText = person1Input;
    person2a.innerText = person2Input;
    person2b.innerText = person2Input;
    animal.innerText = animalInput;
    verb.innerText = verbInput;
    noun.innerText = nounInput;
    exclamation.innerText = exclamationInput;


    document.getElementById("story").toggleAttribute("class");


  }
}