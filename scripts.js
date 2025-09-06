let max = 1500;
let min = 5;
let generateBtn = document.getElementById("generateBtn");
let resetBtn = document.getElementById("resetBtn")
let output = document.getElementById("display");
let mainArray = [];
let container = document.getElementById("container")
numberofElements = 5;
function generateRandomArray(min, max) {
    for (let i = 0; i < 5; i++) {
        mainArray.push(randomNumberGenerator(min, max))
    }
};
// you don't need to have function declared before running the above function? 
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBars(mainArray) {
    container.innerHTML = "";
    let containerHeight = container.clientHeight;
    mainArray.forEach(num=> {
        let number_bar = document.createElement("div");
        number_bar.classList.add("bars");
        let barHeight = (num / max) * 100;
        number_bar.style.height = barHeight + "%";
        container.appendChild(number_bar);
    });

}

let sleep =(ms) => new Promise(resolve => setTimeout(resolve, ms))
generateBtn.addEventListener("click", function () {
    mainArray = [];
    generateRandomArray(min, max);
    output.innerText = "Before sort:  " + mainArray.join(", ");
    createBars(mainArray);
});
resetBtn.addEventListener("click", function () {
    mainArray = [];
    container.innerHTML = "";
    output.innerText = "";
    testing.innerText = "";
});
let debugging = document.getElementById("debugging")
async function bubbleSort(numberofElements, mainArray) {
    let temp;
    for (let passes = 0; passes < numberofElements - 1; passes++) {
        for (let i = 0; i < numberofElements - 1; i++) {
            if (mainArray[i] > mainArray[i + 1]) {
                temp = mainArray[i]
                mainArray[i] = mainArray[i + 1]
                mainArray[i + 1] = temp;
                createBars(mainArray);
                await sleep(500);
            };
        };
    };
}
let bubbleSort3 = document.getElementById("bubbleSort")
let testing = document.getElementById("testing");
bubbleSort3.addEventListener("click", function () {
    bubbleSort(numberofElements, mainArray)
    testing.innerText = "After sort:        " + mainArray.join(", ");
});