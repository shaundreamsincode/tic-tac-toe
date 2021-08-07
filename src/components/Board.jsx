// import React from "react";
// import Square from "./Square";
//
// const Board = ({board}) => {
//     const onSquareClick = () => {
//
//     }
//     const buildRows = () => {
//         let rows = []
//
//         for(let i = 0; i < board[0].length; i++) {
//             let row = [];
//
//             for (let j = 0; j < board[0].length; j++ ) {
//                 if(board[i][j]) {
//                     row.push(board[i][j])
//                 } else {
//                     row.push("-")
//                 }
//                 // row.push(<Square key={ `${ i + j }` } usedBy={board[i][j]}/>)
//             }
//
//             rows.push(row);
//         }
//
//         return rows;
//     }
//
//     return(
//         <div className="board">
//             <table>
//                 {
//                     buildRows().map((row) => {
//                         return(<tr>
//                             {
//                                 row.map((square) => {
//                                     return(
//                                         <td>
//                                             {
//                                                 square
//                                             }
//                                         </td>
//                                     )
//                                 })
//                             }
//                         </tr>)
//                     })
//                 }
//
//             </table>
//         </div>
//     )
// }
//
// export default Board;