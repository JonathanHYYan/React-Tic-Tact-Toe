import React, {useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  // Game States
  const [board, setBoard] =useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null)
  const winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  // useEffect to check win conditions on each board iteration when a player makes a move
  useEffect(()=>{
    checkWinCondition();
  },[board])

  // Add marker onto the square selected by player
  const handleClick = (squareIndex) => {
    const updateBoard = board.map((value, index) => {
      if(index === squareIndex) {
        return isX ? 'X' : 'O';
      } else {
        return value;
      }
    })
    
    setBoard(updateBoard);
    setIsX(!isX);
  }

  // Win condition logic
  const checkWinCondition = () => {
      winCondition.forEach(array => {
        let xWin = array.every(num => board[num] === 'X');
        if(xWin) {
          setWinner('Winner: X')
        }
      })
      winCondition.forEach(array => {
        let xWin = array.every(num => board[num] === 'O');
        if(xWin) {
          setWinner('Winner: O')
        }
      })
      
      // Tie logic, when all squares are filled and no winner exists
      if(!board.includes(null) && winner != null){
        setWinner('Tie');
      }
  }

  // Indicator for which players turn is next
  const playerTurn = isX ? 'Next player: X' : 'Next player O';
  const playerColor = isX? {color: "red"} : {color: "blue"};

  // Reset function to default states to restart the game
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsX(true)
    setWinner(null);
  };

  return (
    <div  className='app'>
      <div style={!winner ? playerColor : {color: 'black'}} className='status'>
        {winner ? winner : playerTurn}
      </div>
      <Board 
        board={board} 
        winner={winner} 
        onClick={handleClick}
      />
      <div className='reset' onClick={resetBoard}>
        Reset
      </div>
    </div>
  );
}

export default App;