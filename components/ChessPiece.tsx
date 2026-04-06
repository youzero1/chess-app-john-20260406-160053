import React from 'react'

const pieceUnicode: { [key: string]: string } = {
  'br': '♜',
  'bn': '♞',
  'bb': '♝',
  'bq': '♛',
  'bk': '♚',
  'bp': '♟',
  'wr': '♖',
  'wn': '♘',
  'wb': '♗',
  'wq': '♕',
  'wk': '♔',
  'wp': '♙',
}

const ChessPiece = ({ row, col }: { row: number; col: number }) => {
  const getPiece = () => {
    // Initial chess piece setup
    if (row === 0) {
      if (col === 0 || col === 7) return pieceUnicode['br']
      if (col === 1 || col === 6) return pieceUnicode['bn']
      if (col === 2 || col === 5) return pieceUnicode['bb']
      if (col === 3) return pieceUnicode['bq']
      if (col === 4) return pieceUnicode['bk']
    }
    if (row === 1) return pieceUnicode['bp']
    
    if (row === 6) return pieceUnicode['wp']
    if (row === 7) {
      if (col === 0 || col === 7) return pieceUnicode['wr']
      if (col === 1 || col === 6) return pieceUnicode['wn']
      if (col === 2 || col === 5) return pieceUnicode['wb']
      if (col === 3) return pieceUnicode['wq']
      if (col === 4) return pieceUnicode['wk']
    }
    
    return null
  }

  const piece = getPiece()
  
  if (!piece) return null
  
  const isBlack = row < 2
  const pieceColor = isBlack ? 'text-amber-900' : 'text-amber-100'
  
  return (
    <span className={`text-4xl ${pieceColor} select-none`}>
      {piece}
    </span>
  )
}

export default ChessPiece