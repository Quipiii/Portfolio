import React from 'react';
import './App.css';

let x = 5;

export default function App() {
  x = x + 1;
  return (
    <div>
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <p>{x}</p>
      <Game />   
    </div>
  )
}

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() =>
      Array(columns)
        .fill()
        .map(mapper)
    )
}

const newTicTacToeGrid = () =>
  generateGrid(3, 3, () => null)
  
/*function Game() {
  const grid = newTicTacToeGrid()
  return null
}*/

function Grid({ grid }) {
  return(
    <div style={{ display: 'inline-block'}}>
      <div
        style={{
          backgroundColor: '#000',
          display: 'grid',
          gridTemplateRows: `repeat(${grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
          gridGap: 2,
        }}
      >
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <Cell key={`${colIdx}-${rowIdx}`} cell={cell} />
          ))
        )}
      </div>
    </div>
  )
}

const cellStyle = {
  backgroundColor: '#fff',
  height: 75,
  width: 75,
}

function Cell({ cell }) {
  return <div style={cellStyle}>{cell}</div>
}

function Game() {
  const game = newTicTacToeGrid()
  return <Grid grid={game} />
}