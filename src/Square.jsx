import React, { useState } from 'react'

function Square({value,onSquareClick}) {

    // const[value,setValue] = useState(null)
    // function onSquareClick()()=>handleClick(6)
    
    

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  ) 
}
export default Square

