import React from "react";

const Board = ({grid, onSquareClick}) => {
    const buildRows = () => {
        let rows = []

        for(let i = 0; i < grid[0].length; i++) {
            let row = [];

            for (let j = 0; j < grid[0].length; j++ ) {
                if(grid[i][j]) {
                    row.push(grid[i][j])
                } else {
                    row.push(<div onClick={onSquareClick.bind(this, i, j)}> - </div>)
                }
            }

            rows.push(row);
        }

        return rows;
    }

    return(
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
    )
}

export default Board;