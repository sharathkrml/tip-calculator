import React from 'react'
import './Result.css'
function Result() {
    return (
        <div className="result">
            <div className="result-heading">
                <p>Tip Amount</p>
                <p className="sm">/ person</p>
            </div>
            <div className="result-amount">
                $4.27
            </div>
        </div>
    )
}

export default Result
