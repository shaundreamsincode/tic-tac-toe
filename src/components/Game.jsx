import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [winner, setWinner] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const [grid, setGrid] = useState(Array(3).fill(Array(3)))

    const onSquareClick = (i,j) => {
        const newGrid = grid.map(row => row.map((column) => column ));

        newGrid[i][j] = currentPlayer;
        setGrid(newGrid);

        if (isWinningGrid(newGrid)) {
            setWinner(currentPlayer);
        } else {
            toggleCurrentPlayer();
        }
    }

    const toggleCurrentPlayer = () => {
        if (currentPlayer === "x") {
            setCurrentPlayer("o");
        } else {
            setCurrentPlayer("x")
        }
    }

    const isWinningGrid = (newGrid) => {
        debugger;
    };

    return(
        <div className="game">
            {
                winner && <div>{ `the winner is ${winner}` }</div>
            }

            {
                !winner && <div>{ `it is player ${currentPlayer}'s turn.` }</div>
            }


            <Board grid={grid} onSquareClick={onSquareClick}/>
        </div>
    )
    // return(<div><Square /></div>)
}

export default Game;