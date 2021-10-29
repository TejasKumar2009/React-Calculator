import React, { Component } from "react";
import Keypad from "./Keypad";
import Alert from "./Alert";

export class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      inputCalc: "",
      alert: { message: null, hideDuration: null, open: false },
      answer: "0"
    };
  }

  showAlert = (message, hideDuration, open) => {
    this.setState({
      alert: { message: message, hideDuration: hideDuration, open: open },
    });
    setTimeout(() => {
      this.setState({
        alert: { message: null, hideDuration: null, open: false },
      });
    }, hideDuration);
  };

  handleOnChange = (e) => this.setState({inputCalc: e.target.value})

  handleNumClick = (e) => {
    this.setState({ inputCalc: this.state.inputCalc.concat(e.target.id) });
  };

  handleClear = () => this.setState({ inputCalc: "" });

  handleBackspace = () => {
    this.setState({
      inputCalc: this.state.inputCalc.substring(
        0,
        this.state.inputCalc.length - 1
      ),
    });
  };

  handleCalculate = () => {
    try {
      this.setState({ inputCalc: eval(this.state.inputCalc).toString() }); // eslint-disable-line
    }
    catch(err){
      this.showAlert(`Invalid Calculation - ${this.state.inputCalc}, Please Try Again!!`, 5000, true);
    }
  };

  handleAnswer = () => {
    try {
      this.setState({ answer: eval(this.state.inputCalc).toString() }); // eslint-disable-line
    }
    catch(err){}
  }

componentDidUpdate(){
  this.handleAnswer()
}

  render() {
    return (
      <>
        <div className="background">
          <div className="container">
            <Keypad
              inputCalc={this.state.inputCalc}
              handleOnChange={this.handleOnChange}
              handleNumClick={this.handleNumClick}
              handleClear={this.handleClear}
              handleBackspace={this.handleBackspace}
              handleCalculate={this.handleCalculate}
              answer={this.state.answer}
            />
          </div>
        </div>

        <Alert alert={this.state.alert} />
      </>
    );
  }
}

export default Calculator;
