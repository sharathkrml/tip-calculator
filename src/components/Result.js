import React from 'react'
import './Result.css'
function Result(props) {
    return (
        <div className="result">
            <div className="result-heading">
                <p>{props.title}</p>
                <p className="sm">/ person</p>
            </div>
            <div className="result-amount">
                ${props.amount}
            </div>
        </div>
    )
}

export default Result
