import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [winner, setWinner] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const [grid, setGrid] = useState(Array(3).fill(Array(3)))
    const [turn, setTurn] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const onSquareClick = (i,j) => {
        const newGrid = grid.map(row => row.map((column) => column));

        newGrid[i][j] = currentPlayer;
        setGrid(newGrid);

        if (!!isWinningGrid(newGrid)) {
            setWinner(currentPlayer);
        } else {
            toggleCurrentPlayer();
            setTurn(turn + 1);
        }
    }

    const isWinningGrid = (winningGrid) => {
        // check three horizontal lines
        debugger;
        if (winningGrid[0][0] && winningGrid[0][0] === winningGrid[0][1] && winningGrid[0][0] === winningGrid[0][2]) {
            return winningGrid[0][0];
        } else if (winningGrid[1][0] && winningGrid[1][0] === winningGrid[1][1] && winningGrid[1][0] === winningGrid[1][2]) {
            return winningGrid[1][0];
        } else if (winningGrid[2][0] && winningGrid[2][0] === winningGrid[2][1] && winningGrid[2][0] === winningGrid[2][2]) {
            return winningGrid[2][0];
        }

        // check three vertical lines
        if (winningGrid[0][0] && (winningGrid[0][0] === winningGrid[1][0]) && (winningGrid[0][0] === winningGrid[2][0])) {
            return winningGrid[0][0];
        } else if (winningGrid[0][1] && (winningGrid[0][1] === winningGrid[1][1]) && (winningGrid[1][1] === winningGrid[2][1])) {
            return winningGrid[0][1];
        } else if (winningGrid[0][2] && (winningGrid[0][2] === winningGrid[1][2]) && (winningGrid[1][2] === winningGrid[2][2])) {
            return winningGrid[2][2];
        }

        // check two diagonal lines
        if (winningGrid[0][0] && winningGrid[0][0] === winningGrid[1][1] && winningGrid[0][0] === winningGrid[2][2]) {
            return(winningGrid[0][0])
        } else if (winningGrid[0][2] && winningGrid[0][2] === winningGrid[1][1] && winningGrid[0][2] === winningGrid[2][0]) {
            return(winningGrid[0][2])
        }

        return false
    }

    const toggleCurrentPlayer = () => {
        if (currentPlayer === "x") {
            setCurrentPlayer("o");
        } else {
            setCurrentPlayer("x")
        }
    }

    const onRestartGame = () => {

    }

    const buildEmptyGrid = () => {

    }

    return(
        <div className="game">
            {
                winner && <div>{ `the winner is ${winner}` }</div>
            }

            {
                turn !== 9 && !winner && <div>{ `it is player ${currentPlayer}'s turn.` }</div>
            }

            {
                turn === 9 && <div>Stalemate</div>
            }

            <Board grid={grid} onSquareClick={onSquareClick}/>

            {
                gameOver && <div onClick={onRestartGame}>New Game</div>
            }
        </div>
    )
}

export default Game;