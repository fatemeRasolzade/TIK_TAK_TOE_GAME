import { Tooltip } from '@material-ui/core'
import React, {useState} from 'react'

const InputPage = ({setStarting, setRounds}) => {

    const [value, setValue] = useState()

    const handleStartGame = () => {
        setStarting(true)
        setRounds(value)
    }

    const handleChange = (e) => {
        setValue(parseInt(e.target.value))
    }

    return (
        <div className="input-box">
            <p style={{marginBottom: "20px"}}>How many rounds do you want to play?</p>
            <input type="number" onChange={(e) => handleChange(e)}/>
            <Tooltip title="start game">
                <button onClick={handleStartGame}>OK</button>
            </Tooltip>
        </div>
    )
}

export default InputPage
