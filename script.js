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
    container.appendChild(square);
}