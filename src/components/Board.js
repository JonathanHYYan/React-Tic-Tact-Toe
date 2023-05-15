import React from 'react'
import Square from './Square'
import './Board.css'

export const Board = ({board, onClick, winner}) => {
  // Interactivity limited by if a marker is placed or a winner has occured.
  const renderBoard = board.map((value, index) => {
    return (
    <Square 
      key={index}
      value={value} 
      onClick={() => (value === null && winner === null) && onClick(index)} 
    />)
  })

  return(
    <div className='board'>{renderBoard}</div>
  )
}

export default Board;