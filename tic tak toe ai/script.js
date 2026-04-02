let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const boardDiv = document.getElementById("board");

// Create board UI
function createBoard() {
    boardDiv.innerHTML = "";
    board.forEach((cell, i) => {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.innerText = cell;
        div.onclick = () => humanMove(i);
        boardDiv.appendChild(div);
    });
}

createBoard();

// Check winner
function checkWinner(b, player) {
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return wins.some(combo => combo.every(i => b[i] === player));
}

// Check draw
function isDraw(b) {
    return b.every(cell => cell !== "");
}

// Minimax AI
function minimax(b, isMax) {
    if (checkWinner(b, "O")) return 1;
    if (checkWinner(b, "X")) return -1;
    if (isDraw(b)) return 0;

    if (isMax) {
        let best = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (b[i] === "") {
                b[i] = "O";
                best = Math.max(best, minimax(b, false));
                b[i] = "";
            }
        }
        return best;
    } else {
        let best = Infinity;
        for (let i = 0; i < 9; i++) {
            if (b[i] === "") {
                b[i] = "X";
                best = Math.min(best, minimax(b, true));
                b[i] = "";
            }
        }
        return best;
    }
}

// AI move
function aiMove() {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            board[i] = "O";
            let score = minimax(board, false);
            board[i] = "";
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    board[move] = "O";
}

// Human move
function humanMove(i) {
    if (board[i] !== "" || gameOver) return;

    board[i] = "X";
    createBoard();

    if (checkWinner(board, "X")) {
        alert("You win!");
        gameOver = true;
        return;
    }

    if (isDraw(board)) {
        alert("Draw!");
        gameOver = true;
        return;
    }

    aiMove();
    createBoard();

    if (checkWinner(board, "O")) {
        alert("AI wins!");
        gameOver = true;
        return;
    }

    if (isDraw(board)) {
        alert("Draw!");
        gameOver = true;
    }
}

// Restart game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    createBoard();
}