import React from "react";
import "./InputComponent.css";
function InputComponent(props) {
  return (
    <div className="input-div">
      <div className="input-flex">
        <p className="input-title">{props.title}</p>
        <p className="input-title red-flag">Can't be zero</p>
      </div>
      <input
        onChange={(e) => props.setInput(Number(e.target.value))}
        className="input-field"
        type="number"
        min="1"
        placeholder={props.input}
      />
      <img className="input-sign" src={props.logo} alt="$" />
    </div>
  );
}

export default InputComponent;
