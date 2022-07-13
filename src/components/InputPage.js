import React, {useState} from 'react'
import { Tooltip } from '@material-ui/core'

const InputPage = ({setStarting, setRounds, aiPlayer, setAiPlayer}) => {

    const [value, setValue] = useState("")
    const [error, setError] = useState("") 

    const handleStartGame = () => {
        if(value.toString().trim() === "" || value <= 0 || isNaN(value)){
            setError('Please enter a positive number of game rounds')
        }else{
            if(value > 10) setError("You cannot play more than 10 rounds")
            else{
                setStarting(true)
                setRounds(value)   
            }
        }
    }

    const handleChange = (e) => {
        setError("")
        setValue(parseInt(e.target.value))
    }

    const handleChangeRadio = (value) => {
        setAiPlayer(value)
    }

    return (
        <div className="input-box">
            <div>
                <p className="mb-1">How many rounds do you want to play?</p>
                <div className="d-flex gap-2 mb-3">
                    <input type="number" onChange={(e) => handleChange(e)}/>
                    <Tooltip title="start game">
                        <button onClick={handleStartGame}>OK</button>
                    </Tooltip>
                </div>
                <p className="mb-1">How do you want to play?</p>
                <div className="d-flex gap-2 justify-content-between align-items-center">
                    <div className="d-flex w-100 gap-1">
                        <input checked={aiPlayer===true} value={true} style={{width: '1rem'}} type="radio" onChange={() => handleChangeRadio(true)} />
                        <label className="w-100">Ai player</label>
                    </div>
                    <div className="d-flex w-100 gap-1">
                        <input checked={aiPlayer===false} value={false} style={{width: '1rem'}} type="radio" onChange={() => handleChangeRadio(false)} />
                        <label className="w-100">2 player</label>
                    </div>
                </div>
                <p className="mt-2">{error}</p>
            </div>
        </div>
    )
}

export default InputPage
