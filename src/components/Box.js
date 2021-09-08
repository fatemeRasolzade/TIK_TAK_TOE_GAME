import React from 'react'
import { RadioButtonUnchecked } from '@material-ui/icons'
import { Clear } from '@material-ui/icons'

const Box = ({OnClick, index, box}) => {
    
    return (
        <div className="box qol-4 d-flex flex-column justify-content-center align-items-center" onClick={() => OnClick(index)}>
            {box ?
                box===1?
                    <Clear/>
                    :
                    <RadioButtonUnchecked/>
                    :
                ""
            }
            
        </div>
    )
}

export default Box
