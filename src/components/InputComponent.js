import React from 'react'
import './InputComponent.css'
function InputComponent(props) {
    return (
        <div className="input-div">
            <p className="input-title">{props.title}</p>
            <input className="input-field" type='text'/>
            <img className="input-sign" src={props.logo} alt="$" />
        </div>
    )
}

export default InputComponent
