import React from "react";
import "./TipComponent.css";
function TipComponent() {
  return (
    <div className="tip">
      <p className="input-title">Select Tip %</p>
      <div className="tip-grid">
        <button className="tip-button">5%</button>
        <button className="tip-button">10%</button>
        <button className="tip-button">15%</button>
        <button className="tip-button">25%</button>
        <button className="tip-button">50%</button>
        <div>
          <input className="custom-input" type="text" placeholder="Custom" />
        </div>
      </div>
    </div>
  );
}

export default TipComponent;
