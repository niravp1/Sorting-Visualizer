// generate random numbers and display them
let max = 1500;
let min = 5;

function generateRandom() {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};
let button = document.getElementById("randomBtn");
let output = document.getElementById("display");

let arrayofRandom = [];

button.addEventListener("click",function(){
    arrayofRandom = [];
    for(let i=0; i < 100; i++)
    {
        arrayofRandom.push(generateRandom(min,max))
    }
output.innerText = arrayofRandom.join(", ");
});

