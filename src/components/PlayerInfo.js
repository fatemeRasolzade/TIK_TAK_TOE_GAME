import React from 'react'
import { RadioButtonUnchecked } from '@material-ui/icons'
import { Clear } from '@material-ui/icons'

const PlayerInfo = ({player}) => {
    return (
        <div>
            <div className="info-box mb-3">
                <div className="d-flex">
                    <p className={player === 1 && "activeStyle"}>player1 : </p>
                    <Clear/>
                </div>
                <div className="d-flex">
                    <p className={player === 2 && "activeStyle"}>player2 : </p>
                    <RadioButtonUnchecked/>
                </div>
            </div>
        </div>
    )
}

export default PlayerInfo