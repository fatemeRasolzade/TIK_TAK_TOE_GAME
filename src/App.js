import React, { useState } from 'react'
import Box from './components/Box'
import InputPage from './components/InputPage'
import PlayerInfo from './components/PlayerInfo'
import ResultGame from './components/ResultGame'
import EndModal from './components/modal/EndModal'
import WinModal from './components/modal/WinModal'
import './styles/style.css'

const App = () => {

  const [starting, setStarting] = useState(false)
  const [rounds, setRounds] = useState()
  const [playerWin, setPlayerWin] = useState([0, 0])
  const [player, setPlayer] = useState(1);
  const [box, setBox] = useState(new Array(9).fill(null))
  const [open, setOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false)
  const [textModal, setTextModal] = useState("")
  const [aiPlayer, setAiPlayer] = useState(true)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleEndOpen = () => {
    setEndOpen(true)
  }

  const handleEndClose = () => {
    setEndOpen(false)
  }

  const handleClick = (index) => {
    if(box[index] === null){
      setPlayer(player===1 ? 2 : 1)
      handlePlay(index, aiPlayer ? 1 : player)
      !aiPlayer && checkWinning()
      if(!open && !endOpen && aiPlayer){
        handlePlay(randomIndex(), 2)
        checkWinning()
      }
    }
  }

  const handlePlay = (boxIndex, value) => {
    const newBox = box
    newBox[boxIndex] = value
    setBox(newBox)
  }

  const randomIndex = () => {
    let arr = []
    box.map((b, i) => {
      if(b===null){
        arr.push(i)
      }
    })
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  const checkWinning  = () => {  
    if((box[0] === box[1] && box[1] === box[2] && box[0]!==null) ||
       (box[3] === box[4] && box[4] === box[5] && box[3]!==null) ||
       (box[6] === box[7] && box[7] === box[8] && box[6]!==null) ||
       (box[0] === box[3] && box[3] === box[6] && box[0]!==null) ||
       (box[1] === box[4] && box[4] === box[7] && box[1]!==null) ||
       (box[2] === box[5] && box[5] === box[8] && box[2]!==null) ||
       (box[0] === box[4] && box[4] === box[8] && box[0]!==null) ||
       (box[2] === box[4] && box[4] === box[6] && box[2]!==null)
      ){
        if((playerWin[player-1]) === (rounds-1)){
          handleEndOpen()
          setTextModal(`The player${player} is the final winner :)))`)
        }else{
          handleOpen()
          setTextModal(`player${player} Win :)`)
          let newRes = playerWin
          newRes[player-1] += 1
          setPlayerWin(newRes)
        }
      }else if(box[0] !== null && box[1] !== null && box[2] !== null &&
               box[3] !== null && box[4] !== null && box[5] !== null &&
               box[6] !== null && box[7] !== null && box[8] !== null){
               handleOpen()
               setTextModal(`game draw :/`)
              }   
    }

  return (
    <div className="main">
      <div>
        {starting ?
          <div>
            <ResultGame playerWin={playerWin}/>
            <div className="game-box d-sm-flex justify-content-sm-between ">
              <PlayerInfo player={player}/>
              <div className="playground-box">
                <div className="row">
                  {box.map((b , index)=>(
                    <Box OnClick={handleClick} index={index} box={b} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          :
          <InputPage setStarting={setStarting} setRounds={setRounds} aiPlayer={aiPlayer} setAiPlayer={setAiPlayer} />
        }
        <WinModal
          open={open}
          handleClose={handleClose}
          textModal={textModal}
          setPlayer={setPlayer}
          setBox={setBox}
          setPlayerWin={setPlayerWin}
          setStarting={setStarting}
        />
        <EndModal
          open={endOpen}
          handleClose={handleEndClose}
          textModal={textModal}
          setPlayer={setPlayer}
          setBox={setBox}
          setPlayerWin={setPlayerWin}
          setStarting={setStarting}
        />
      </div>
    </div>
  )
}

export default App