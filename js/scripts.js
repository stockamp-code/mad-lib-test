window.onload = function() {
  let form = document.getElementById("madlibForm")
  console.log(form)
  
  form.onsubmit = function (event){
    event.preventDefault()
    console.log("hello")

    // console.log(document.querySelector("span#person2b"))

    // document.querySelector("span#person1a").innerText  = "person1Input";
    // document.querySelector("span#person1b").innerText  = "person1Input";
    // document.querySelector("span#person1c").innerText  = "person1Input";
    // document.querySelector("span#person2a").innerText  = "person2Input";
    // document.querySelector("span#person2b").innerText  = "person2Input";
    // document.querySelector("span#animal").innerText  = "animalInput";
    // document.querySelector("span#verb").innerText  = "verbInput";
    // document.querySelector("span#noun").innerText  = "nounInput";
    // document.querySelector("span#exclamation").innerText  = "exclamation";

    let person1a = document.querySelector("span#person1a")
    let person1b = document.querySelector("span#person1b")
    let person1c = document.querySelector("span#person1c")
    let person2a = document.querySelector("span#person2a")
    let person2b = document.querySelector("span#person2b")
    let animal = document.querySelector("span#animal")
    let verb = document.querySelector("span#verb")
    let noun = document.querySelector("span#noun")
    let exclamation = document.querySelector("span#exclamation")

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

    console.log(person1Input)

    // person1a.innerText = "person1Input";
    // person1b.innerText = "person1Input";
    // person1c.innerText = "person1Input";
    // person2a.innerText = "person2Input";
    // person2b.innerText = "person2Input";
    // animal.innerText = "animalInput";
    // verb.innerText = "verbInput";
    // noun.innerText = "nounInput";
    // exclamation.innerText = "exclamationInput";

    document.getElementById("story").toggleAttribute("class");


  }
}