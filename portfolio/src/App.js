import { accordionActionsClasses } from '@mui/material';
import Button from '@mui/material/Button';

import React from 'react';
import './App.css';



export default function App() {

  return (
    <div>
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      
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

const clone = x => JSON.parse(JSON.stringify(x))

  const NEXT_TURN = {
    O: 'X',
    X: 'O',
  }

  const getInitialState = () => ({
    grid: newTicTacToeGrid(),
    turn: 'X'
  })
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'RESET':
        return getInitialState()

    }
  }
  

function Game() {
  const [state, dispatch] = React.useReducer(reducer, getInitialState())
  const { grid, turn } = state

  const handleClick = (x,y) => {
    dispatch({ type: 'CLICK', payload: { x, y }})
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div sytle={{ textAlign: 'center'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>Next up: {turn}</div>
      <button onClick={reset} type="button">Reset</button>
      </div>
      <Grid Cell={Button} grid={grid} handleClick={handleClick} />
    </div>
  )
}

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



function Cell({ cell, handleClick}) {
  return (
    <div style={cellStyle}>
      <button type="button" onClick={handleClick}>
        {cell}
      </button>
    </div>
  )
}



 //{
    //   const { x, y } = action.payload
    //   const nextState = clone(state)
    //   const {grid, turn } = nextState
    //   if (grid[y][x]) {
    //     return state
    //   }

    //   grid [y][x] = turn
    //   nextState.turn = NEXT_TURN[turn]
    //   return nextState
    // }

    // default:
      
  


