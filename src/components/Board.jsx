import Sqaure from "./Sqaure"



function Board(props) {

    let generateRow = (rowNum, currBoard) => <div className="row">{currBoard[rowNum].map((el, indx) => <Sqaure updateBoard={() => props.handleClick(rowNum, indx)} value={el} />)}</div>

    return (
        <div className="board">

            <div className="board-background">
                <div className="line line-one"></div>
                <div className="line line-two"></div>
                <div className="line line-three"></div>
                <div className="line line-four"></div>
                {generateRow(0, props.currBoard)}
                {generateRow(1, props.currBoard)}
                {generateRow(2, props.currBoard)}
            </div>



        </div>
    )
}

export default Board