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

const grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function Game() {
  return <div>Game</div>
}
