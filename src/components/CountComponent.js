import React, { useEffect, useState } from "react";
import "./InputComponent.css";
function InputComponent(props) {
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (value === 0) {
      document
        .getElementsByClassName("count-red-flag")[0]
        .classList.add("zero");
      document
        .getElementsByClassName("count-input")[0]
        .classList.add("zero-input");
    } else {
      document
        .getElementsByClassName("count-red-flag")[0]
        .classList.remove("zero");
      document
        .getElementsByClassName("count-input")[0]
        .classList.remove("zero-input");

      props.setInput(value);
    }
  }, [value, props]);
  return (
    <div className="input-div">
      <div className="input-flex">
        <p className="input-title">{props.title}</p>
        <p className="input-title count-red-flag">Can't be zero</p>
      </div>
      <input
        onChange={(e) => setValue(Number(e.target.value))}
        className="input-field count-input"
        type="number"
        min="1"
        placeholder={props.input}
      />
      <img className="input-sign" src={props.logo} alt="$" />
    </div>
  );
}

export default InputComponent;
