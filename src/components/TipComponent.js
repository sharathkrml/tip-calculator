import React from "react";
import "./TipComponent.css";
function TipComponent(props) {
  function setActive(val,props,e){
    if (document.querySelector('.active') !== null) {
      document.querySelector('.active').classList.remove('active');
    }
    props.setInput(val);
    e.target.className=e.target.className+' active';
  }
  return (
    <div className="tip">
      <p className="input-title">Select Tip %</p>
      <div className="tip-grid">
        <button onClick={(e) => {setActive(5,props,e)}} className="tip-button">
          5%
        </button>
        <button onClick={(e) => {setActive(10,props,e)}} className="tip-button">
          10%
        </button>
        <button onClick={(e) => {setActive(15,props,e)}} className="tip-button">
          15%
        </button>
        <button onClick={(e) => {setActive(25,props,e)}} className="tip-button">
          25%
        </button>
        <button onClick={(e) => {setActive(50,props,e)}} className="tip-button">
          50%
        </button>
        <div className="custom-input-div">
          <input
            onChange={(e) => props.setInput(e.target.value)}
            className="custom-input"
            type="number"
            min="1"
            placeholder="Custom"
          />
        </div>
      </div>
    </div>
  );
}

export default TipComponent;
