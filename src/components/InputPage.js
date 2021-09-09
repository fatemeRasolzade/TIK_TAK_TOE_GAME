import { Tooltip } from '@material-ui/core'
import React, {useState} from 'react'

const InputPage = ({setStarting, setRounds}) => {

    const [value, setValue] = useState("")
    const [error, setError] = useState("") 

    const handleStartGame = () => {
        if(value.toString().trim() === "" || value <= 0){
            setError('Please enter a positive number of game rounds')
        }else{
            setStarting(true)
            setRounds(value)
        }
    }

    const handleChange = (e) => {
        setError("")
        setValue(parseInt(e.target.value))
    }

    return (
        <div className="input-box">
            <div className="text-center">
                <p style={{marginBottom: "20px"}}>How many rounds do you want to play?</p>
                <input type="number" onChange={(e) => handleChange(e)}/>
                <Tooltip title="start game">
                    <button onClick={handleStartGame}>OK</button>
                </Tooltip>
                <p style={{margin: "15px 0 0 0"}}>{error}</p>
            </div>
        </div>
    )
}

export default InputPage
