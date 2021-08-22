const divContainer = document.querySelector(".container");
const rowsColumnsButton = document.getElementById("rowsColumnsButton");
const input = document.querySelector('input');
const reset = document.getElementById("resetButton")

let RGB = 'rgb(0, 0, 0)';

createDiv(256)

function queryDiv() {
    gridSquares = document.querySelectorAll(".null");
}

function createDiv(gridNumber) {         //Adds the correct amount of divs that 
    for (let i = 0; i < gridNumber; i++) {    //will fill the grid container
        div = document.createElement("div")
        divContainer.appendChild(div)
        div.classList.add("grid")
        div.classList.add("null")
        queryDiv();
    }
}



function deleteDiv() {     //Deletes all the divs in the container when the user sets a new value
    document.querySelectorAll('.grid').forEach(e => e.remove());
}

function setGrid(number) {     //Sets the amount of rows/columns 
    document.documentElement.style.setProperty('--grids', number);
    createDiv(Math.pow(number, 2))
}

function chooseRowsColumns() {
    queryDiv();
    gridSquares.forEach(function(gridSquare) {
        gridSquare.style.backgroundColor = "white";
      });
    selection = prompt("Please chose the amount of rows/columns between 1 and 100");
    if (isNaN(selection)) {
        chooseRowsColumns();
    }
    if (selection < 0 || selection > 100) {
        chooseRowsColumns();
    }
    if (selection === "" || !selection) {
        chooseRowsColumns();
    };
    deleteDiv();
    setGrid(selection);
    queryDiv();
    gridSquares.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', function() {
        gridSquare.style.backgroundColor = RGB;
        });
    });
}

function resetGrid() {
    gridSquares.forEach(function(gridSquare) {
        gridSquare.style.backgroundColor = "white";
})
}


input.onchange = function() {
    RGB = this.value;
  }


  gridSquares.forEach(function(gridSquare) {
    gridSquare.addEventListener('mouseover', function() {
    gridSquare.style.backgroundColor = RGB;
    });
});

rowsColumnsButton.addEventListener("click", chooseRowsColumns);
reset.addEventListener("click", resetGrid)






