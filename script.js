let inkColor = '#111111'; // default black
let gridItems = document.querySelectorAll('grid-item');
const grid = document.getElementById('grid');

// buttons
const clearButton = document.querySelector('#clear-button');
const blackButton = document.querySelector('#black-button');
const eraserButton = document.querySelector('#eraser-button');
const randomButton = document.querySelector('#random-button');

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    // create cells, rows * cols = amount of cells
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', changeColor);
    }
}
// default grid
makeGrid(16, 16);

// event listeners
clearButton.addEventListener('click', clearGrid);
blackButton.addEventListener('click', blackInk);
eraserButton.addEventListener('click', eraserInk);
randomButton.addEventListener('click', randomInk);

// set up hover effects, div changes color when mouse passes over them
function changeColor(event) {
    if (event.type === 'mouseover') {
        event.target.style.backgroundColor = inkColor;
    }
}

// inks
function blackInk() {
    inkColor = '#111111';
}

function eraserInk() {
    inkColor = '#ffffff';
}

function randomInk() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    inkColor = `#${randomColor}`;
    randomButton.style.backgroundColor = `#${randomColor}`;
}

function clearGrid() {
    let cells = document.getElementsByClassName("grid-item");
    for (i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = '#ffffff';
    }
}