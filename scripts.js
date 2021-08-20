const divContainer = document.querySelector(".container");
const gridArray = Array.from(Array(101).keys());





function createDiv(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
        div = document.createElement("div")
        divContainer.appendChild(div)
        div.classList.add("grid")
    }
}

createDiv(10000)
// Math.sqrt(gridArray[1])

