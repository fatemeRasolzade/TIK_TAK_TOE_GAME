import React, {useState} from 'react'
import { Tooltip } from '@material-ui/core'

const InputPage = ({setStarting, setRounds}) => {

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

    return (
        <div className="input-box">
            <div className="text-center">
                <p>How many rounds do you want to play?</p>
                <div className="d-flex gap-2">
                    <input type="number" onChange={(e) => handleChange(e)}/>
                    <Tooltip title="start game">
                        <button onClick={handleStartGame}>OK</button>
                    </Tooltip> 
                </div>
                <p className="mt-2">{error}</p>
            </div>
        </div>
    )
}

export default InputPage
