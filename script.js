const container = document.querySelector(".container");
const blackButton = document.querySelector('.black-button');
const randomColorsButton = document.querySelector('.random-colors-button');

const gridSize = 16;
const containerSize = 600;
let colorMode = 'black';

container.style.height = `${containerSize}px`;
container.style.width = `${containerSize}px`;

blackButton.addEventListener('click', () => {
    colorMode = 'black';
    generateGrid(gridSize);
})

randomColorsButton.addEventListener('click', () => {
    colorMode = 'random';
    generateGrid(gridSize);
})

function generateGrid(size) {
    removeAllChildNodes(container);
    const squaresQuantity = size ** 2;

    for (let i = 0; i < squaresQuantity; ++i) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.maxWidth = `${(containerSize - 2) / size}px`
        colorMode === 'black' 
            ? square.addEventListener('mouseover', (e) => paintBlack(e.target)) 
            : square.addEventListener('mouseover', (e) => paintRandomColor(e.target));
    
        container.appendChild(square);
    }
}

function paintBlack(square) {
    square.style.backgroundColor = 'black';
}

function paintRandomColor(square) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = `#${randomColor}`;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

generateGrid(gridSize);