import React, { useState } from "react";

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const [board, setBoard] = useState(Array(3).fill(Array(3)))

    const buildRows = () => {
        let rows = []

        for(let i = 0; i < board[0].length; i++) {
            let row = [];

            for (let j = 0; j < board[0].length; j++ ) {
                if(board[i][j]) {
                    row.push(board[i][j])
                } else {
                    row.push("-")
                }
                // row.push(<Square key={ `${ i + j }` } usedBy={board[i][j]}/>)
            }

            rows.push(row);
        }

        return rows;
    }


    return(
        <div className="game">
            it is player { `${currentPlayer}` } turn

            <div className="board">
                <table>
                    {
                        buildRows().map((row) => {
                            return(<tr>
                                {
                                    row.map((square) => {
                                        return(
                                            <td>
                                                {
                                                    square
                                                }
                                            </td>
                                        )
                                    })
                                }
                            </tr>)
                        })
                    }

                </table>
            </div>
        </div>
    )
    // return(<div><Square /></div>)
}

export default Game;