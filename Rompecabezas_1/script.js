const board = document.querySelector('.board');
const boardSize = 4;
const boardWidth = 100 * boardSize;
const tiles = Array.from({ length: boardSize * boardSize }, (_, i) => i + 1);
const emptyTileIndex = tiles.length - 1;
tiles[emptyTileIndex] = 0;
let emptyTilePos;

function renderBoard() {
    board.innerHTML = '';
    tiles.forEach((tile, i) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        tileElement.textContent = tile;
        tileElement.style.gridArea = `auto / ${(i % boardSize) + 1}`;
        board.appendChild(tileElement);

        if (tile === 0) {
            emptyTilePos = i;
        }
    });
}

function isValidMove(move) {
    return move === emptyTilePos - 1 ||
        move === emptyTilePos + 1 ||
        move === emptyTilePos - boardSize ||
        move === emptyTilePos + boardSize;
}

function handleTileClick(event) {
    const clickedTileIndex = Array.from(board.children).indexOf(event.target);
    const newEmptyTilePos = isValidMove(clickedTileIndex) ? clickedTileIndex : emptyTilePos;
    tiles[emptyTilePos] = tiles[newEmptyTilePos];
    tiles[newEmptyTilePos] = 0;
    emptyTilePos = newEmptyTilePos;
    renderBoard();
}

function moveRandomTile() {
    const possibleMoves = [
        emptyTilePos - 1,
        emptyTilePos + 1,
        emptyTilePos - boardSize,
        emptyTilePos + boardSize
    ].filter(move => move >= 0 && move < boardSize * boardSize);

    const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    tiles[emptyTilePos] = tiles[randomMove];
    tiles[randomMove] = 0;
    emptyTilePos = randomMove;
    renderBoard();
}

function setupBoard() {
    board.style.width = boardWidth + 'px';
    renderBoard();
    board.addEventListener('click', handleTileClick);

    const moveButton = document.getElementById('move-button');
    moveButton.addEventListener('click', moveRandomTile);
}

setupBoard();
