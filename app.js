const gameBoard = document.querySelector("#board")
const playerDisplay = document.querySelector('#player')
const info = document.querySelector('#info')
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]  

function createBoard () {
    startPieces.forEach((startPiece) => {
        const square = document.createElement('div')
        square.classList.add('square')
        gameBoard.append(square)
    })
}