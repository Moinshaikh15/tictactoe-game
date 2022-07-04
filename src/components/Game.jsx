import Board from "./Board"
import { useState } from 'react'

let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(' '));

let move = 0;
// let historyObj = {};
function Game() {

    let [currBoard, setCurrBoard] = useState(startingBoard);
    let [isXplaying, setIsXPlaying] = useState(true);
    let [currStatus, setCurrStatus] = useState('Yet to Start');
    let [wonGame, setWonGame] = useState(false);
    let [history, setHistory] = useState([]);


    let isGameDrawn = (checkBoard) => checkBoard.every(row => row.every(elem => elem !== ' '));
    let checkStatus = (checkBoard = [[]], playerString) => {
        let rowWin = checkBoard.find(elm => elm.join('') === playerString) !== undefined
        let colWin = checkBoard.find((row, idx) => checkBoard[0][idx] + checkBoard[1][idx] + checkBoard[2][idx] === playerString) !== undefined
        let diagWin = checkBoard[0][0] + checkBoard[1][1] + checkBoard[2][2] === playerString || checkBoard[0][2] + checkBoard[1][1] + checkBoard[2][0] === playerString
        return rowWin || colWin || diagWin
    }


    let handleClick = (row, col) => {
        if (currStatus === 'Yet to Start')
            setCurrStatus('Game in Progess');

        let copyBoard = JSON.parse(JSON.stringify(currBoard))
        if (copyBoard[row][col] === ' ' && wonGame !== true) {

            copyBoard[row][col] = isXplaying ? 'X' : 'O';
            setCurrBoard(copyBoard);
            setIsXPlaying(!isXplaying);

            // console.log(copyBoard)
            if (isGameDrawn(copyBoard)) {

                setCurrStatus('Game is Drawn');
            }
            else if (checkStatus(copyBoard, 'XXX')) {
                setWonGame(true);
                setCurrStatus('X has won')
            } else if (checkStatus(copyBoard, 'OOO')) {
                setWonGame(true);
                setCurrStatus('O has won')
            }



            history.push([copyBoard, currStatus])
            let copyHistory = JSON.parse(JSON.stringify(history));
            setHistory(copyHistory);


        }
    };

    let goto = (elem) => {
        setCurrBoard(elem[0]);
        // // isXplaying(elem.player)
        // //  console.log(elem,)
        setCurrStatus(elem[1])


    }

    return (
        <div className="game-container">
            <div>
                <h1>Tic Tac Toe </h1>
                <p>Next Player: {isXplaying ? 'X' : 'O'}</p>
                <Board currBoard={currBoard} handleClick={handleClick} />
                <p className="status">{currStatus}</p>
            </div>

            <div className="history-container">
                <h1>History</h1>
                {history.map((elem, indx) => <button onClick={() => goto(elem)} className='history-btn'>Move{indx + 1}</button>)}
            </div>
        </div>
    )
}
export default Game;