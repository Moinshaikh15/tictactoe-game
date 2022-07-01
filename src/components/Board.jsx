import Sqaure from "./Sqaure"
import { useState } from 'react'
let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(' '));

function Board(props) {
    let [currBoard, setCurrBoard] = useState(startingBoard)
    let [isXplaying, setIsXPlaying] = useState(true)
    let [currStatus, setCurrStatus] = useState('Yet to Start')
    let [wonGame, setWonGame] = useState(false)
    let checkStatus = (checkBoard) => {
        console.log(checkBoard)

        if ((checkBoard[0][0] === 'X') && (checkBoard[0][1] === 'X') && (checkBoard[0][2] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }
        else if ((checkBoard[1][0] === 'X') && (checkBoard[1][1] === 'X') && (checkBoard[1][2] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }
        else if ((checkBoard[2][0] === 'X') && (checkBoard[2][1] === 'X') && (checkBoard[2][2] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }
        else if ((checkBoard[0][0] === 'X') && (checkBoard[1][0] === 'X') && (checkBoard[2][0] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }

        else if ((checkBoard[0][1] === 'X') && (checkBoard[1][1] === 'X') && (checkBoard[2][1] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }
        else if ((checkBoard[0][2] === 'X') && (checkBoard[1][2] === 'X') && (checkBoard[2][2] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }
        else if ((checkBoard[0][0] === 'X') && (checkBoard[1][1] === 'X') && (checkBoard[2][2] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }
        else if ((checkBoard[0][2] === 'X') && (checkBoard[1][1] === 'X') && (checkBoard[2][0] === 'X')) {
            setWonGame(true);
            return 'Player X has won'
        }


        // o has won
        else if ((checkBoard[0][0] === 'O') && (checkBoard[0][1] === 'O') && (checkBoard[0][2] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        else if ((checkBoard[1][0] === 'O') && (checkBoard[1][1] === 'O') && (checkBoard[1][2] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        else if ((checkBoard[2][0] === 'O') && (checkBoard[2][1] === 'O') && (checkBoard[2][2] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        else if ((checkBoard[0][0] === 'O') && (checkBoard[1][0] === 'O') && (checkBoard[2][0] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }

        else if ((checkBoard[0][1] === 'O') && (checkBoard[1][1] === 'O') && (checkBoard[2][1] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        else if ((checkBoard[0][2] === 'O') && (checkBoard[1][2] === 'O') && (checkBoard[2][2] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        else if ((checkBoard[0][0] === 'O') && (checkBoard[1][1] === 'O') && (checkBoard[2][2] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        else if ((checkBoard[0][2] === 'O') && (checkBoard[1][1] === 'O') && (checkBoard[2][0] === 'O')) {
            setWonGame(true);
            return 'Player O has won'
        }
        let result;
        for (let i = 0; i < checkBoard.length; i++) {
            for (let j = 0; j < checkBoard.length; j++) {
                if (checkBoard[i][j] === ' ') {
                    result = true
                }

            }
        }
        if (result === true) {
            return 'Game in progress'
        }
        else {
            return 'Game is drawn'
        }
    }




    let handleClick = (row, col) => {
        console.log(row, col)
        let copyBoard = JSON.parse(JSON.stringify(currBoard))
        if (copyBoard[row][col] === ' ' && wonGame !== true) {


            copyBoard[row][col] = isXplaying ? 'X' : 'O';
            setCurrBoard(copyBoard);
            setIsXPlaying(!isXplaying);
            setCurrStatus(checkStatus(copyBoard));
            console.log(currStatus)
        }
    };

    let generateRow = (rowNum) => <div className="row">{currBoard[rowNum].map((el, indx) => <Sqaure updateBoard={() => handleClick(rowNum, indx)} value={el} />)}</div>

    return (
        <div className="board">
            <p>Next Player: {isXplaying ? 'X' : 'O'}</p>
            <div className="board-background">
                <div className="line line-one"></div>
                <div className="line line-two"></div>
                <div className="line line-three"></div>
                <div className="line line-four"></div>
                {generateRow(0)}
                {generateRow(1)}
                {generateRow(2)}
            </div>


            <p className="status">{currStatus}</p>
        </div>
    )
}

export default Board