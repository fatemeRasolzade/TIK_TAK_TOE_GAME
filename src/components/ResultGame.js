import React from 'react'

const ResultGame = ({playerWin}) => {
    return (
        <div className="result-box rtl">
            <h4 className="text-center" style={{paddingBottom: '10px'}}>Game Result</h4>
            <div className="d-flex justify-content-around">
                <h5>
                    player1: {playerWin[0]}
                </h5>
                <h5>
                    player2: {playerWin[1]}
                </h5>
            </div>
        </div>
    )
}

export default ResultGame
