import logo from "./assets/images/logo.svg";
import "./App.css";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="calculator-body">
        <div className="calc-input">
          <div className="bill">bill</div>
          <div className="tip">tip</div>
          <div className="no-of-people">no of people</div>
        </div>
        <div className="calc-output">
          <div className="calc-output-body">
            <div className="amt-per-person">
              <Result />
            </div>
            <div className="amt-total">
              <Result />
            </div>
            <div className="reset-button">
              <button class="btn reset-btn" type="button">
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
