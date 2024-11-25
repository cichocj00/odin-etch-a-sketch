const container = document.querySelector(".container");
const blackButton = document.querySelector('.black-button');
const randomColorsButton = document.querySelector('.random-colors-button');
const squaresQuantityButton = document.querySelector('.squares-quantity-button');
let gridSize = 16;
const CONTAINER_SIZE = 600;

let colorMode = 'black';

container.style.height = `${CONTAINER_SIZE}px`;
container.style.width = `${CONTAINER_SIZE}px`;

blackButton.addEventListener('click', () => setColorMode('black'));
randomColorsButton.addEventListener('click', () => setColorMode('random'));

squaresQuantityButton.addEventListener('click', () => {
    gridSize = +prompt("How many squares do you need?");
    generateGrid(gridSize);
})

function generateGrid(size) {
    container.innerHTML = '';
    const squareMaxWidth = (CONTAINER_SIZE - 2) / size;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size * size; ++i) {
        const square = createSquare(squareMaxWidth);
        fragment.appendChild(square);
    }

    container.appendChild(fragment);
}

function createSquare(maxWidth) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.maxWidth = `${maxWidth}px`
    square.addEventListener('mouseover', (event) => handleSquareHover(event));
    return square;
}

function setColorMode(mode) {
    colorMode = mode;
    generateGrid(gridSize);
}

function handleSquareHover(event) {
    if (colorMode === 'black') {
        paintBlack(event.target);
    } else {
        paintRandomColor(event.target);
    }
}

function paintBlack(square) {
    square.style.backgroundColor = 'black';
}

function paintRandomColor(square) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = `#${randomColor}`;
}

generateGrid(gridSize);