import React from 'react'
import ChessPiece from './ChessPiece'

const ChessBoard = () => {
  const renderSquare = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0
    const squareColor = isLight ? 'bg-amber-100' : 'bg-amber-800'
    
    return (
      <div
        key={`${row}-${col}`}
        className={`w-12 h-12 ${squareColor} flex items-center justify-center`}
      >
        <ChessPiece row={row} col={col} />
      </div>
    )
  }

  const renderBoard = () => {
    const board = []
    for (let row = 0; row < 8; row++) {
      const currentRow = []
      for (let col = 0; col < 8; col++) {
        currentRow.push(renderSquare(row, col))
      }
      board.push(
        <div key={row} className="flex">
          {currentRow}
        </div>
      )
    }
    return board
  }

  return (
    <div className="bg-amber-900 p-4 rounded-lg shadow-2xl">
      {renderBoard()}
    </div>
  )
}

export default ChessBoard