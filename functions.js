// animal is parameter
function favouriteAnimal(animal){
    return animal + " is my favourite animal"
}
n = prompt("Animal in your mind? : ")

console.log(favouriteAnimal(n))
// n is argument 


const myText = "I am a string";
const newText = myText.replace("string", "tamatar");

console.log(newText);

const myArray = ["I", "Love", "Burgers"];
const joinArrayToString = myArray.join(" ");
// This converts myArray into a string

console.log(joinArrayToString)


const MyNumber = Math.random()
// This generates a random number


//Anonymous function example 

function KeyDetect(event){
    alert(`You pressed ${event.key}`);
}

textBox.addEventListener("keydown", KeyDetect);

//js_06.html me jo box h usme koi bhi key dabao usko detect krleta hai 

const original = [1,2,3];
const doubled = original.map(item => item*2);

console.log(doubled)
