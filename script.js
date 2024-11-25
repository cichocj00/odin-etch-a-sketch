const container = document.querySelector(".container");

const gridSize = 16;
const squaresQuantity = gridSize ** 2;
const containerSize = 600;

container.style.height = `${containerSize}px`;
container.style.width = `${containerSize}px`;

for (let i = 0; i < squaresQuantity; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.maxWidth = `${(containerSize - 2) / gridSize}px`
    square.addEventListener('mouseover', (e) => paintRandomColor(e.target))

    container.appendChild(square);
}

function paintBlack(square) {
    square.style.backgroundColor = 'black';
}

function paintRandomColor(square) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = `#${randomColor}`;
}