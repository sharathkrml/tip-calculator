import logo from "./assets/images/logo.svg";
import "./App.css";
import Result from "./components/Result";
import InputComponent from "./components/InputComponent";
import dollarSign from "./assets/images/icon-dollar.svg";
import personSign from "./assets/images/icon-person.svg";
import TipComponent from "./components/TipComponent";
import React, { useState, useEffect } from "react";
function App() {
  const resetAll = () => {
    setBill(0);
    setCount(0);
    setTipPercent(0);
    setTotalPerPerson("0.00");
    setTipPerPerson("0.00");
  };
  const [bill, setBill] = useState(0);
  const [count, setCount] = useState(1);
  const [tipPercent, setTipPercent] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [tipPerPerson, setTipPerPerson] = useState("0.00");
  useEffect(() => {
    var totalTip = (bill * tipPercent) / 100;
    console.log("totalTip=", totalTip);
    setTipPerPerson(Number((totalTip / count).toFixed(2)));
  }, [bill, tipPercent, count]);
  useEffect(() => {
    var billPerPerson = (bill / count).toFixed(2);
    setTotalPerPerson(tipPerPerson + Number(billPerPerson));
  }, [bill, tipPerPerson, count]);
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="calculator-body">
        <div className="calc-input">
          <InputComponent
            input={bill}
            setInput={setBill}
            title="Bill"
            logo={dollarSign}
          />
          <TipComponent setInput={setTipPercent} />
          <InputComponent
            input={count}
            setInput={setCount}
            title="Number of People"
            logo={personSign}
          />
        </div>
        <div className="calc-output">
          <div className="calc-output-body">
            <div className="amt-per-person">
              <Result amount={tipPerPerson} title="Tip Amount" />
            </div>
            <div className="amt-total">
              <Result amount={totalPerPerson} title="Total" />
            </div>
            <div className="reset-button">
              <button
                onClick={() => resetAll()}
                class="btn reset-btn"
                type="button"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
