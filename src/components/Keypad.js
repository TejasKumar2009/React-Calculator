import React, { Component } from "react";
import BackspaceIcon from "@material-ui/icons/Backspace";

export default class Keypad extends Component {

  render() {
    return (
      <>
        <div className="screen">
          <div className="calculator">
            <div className="calculator-screen">
              <p>Ans = {this.props.answer}</p>
              <div className="calculator-screen-top" id="screen-top"></div>
              <input
              onChange={this.props.handleOnChange}
                value={this.props.inputCalc}
                className="calculator-screen-bottom"
                type="text"
              />
            </div>
            <div className="calculator-layout">
              <div className="calculator-layout-row">
                <button
                  onClick={this.props.handleClear}
                  className="calculator-button gray main-btn1"
                >
                  C
                </button>
                <button
                  onClick={this.props.handleBackspace}
                  className="calculator-button gray symbol main-btn1"
                >
                  <BackspaceIcon />
                </button>
                <button id="%" onClick={this.props.handleNumClick} className="calculator-button gray symbol main-btn1">
                  %
                </button>
                <button
                  id="/"
                  onClick={this.props.handleNumClick}
                  className="calculator-button gray symbol main-btn2"
                >
                  &divide;
                </button>
              </div>
              <div className="calculator-layout-row">
                <button
                  id="7"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  7
                </button>
                <button
                  id="8"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  8
                </button>
                <button
                  id="9"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  9
                </button>
                <button
                  id="*"
                  onClick={this.props.handleNumClick}
                  className="calculator-button gray symbol main-btn2"
                >
                  &times;
                </button>
              </div>
              <div className="calculator-layout-row">
                <button
                  id="4"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  4
                </button>
                <button
                  id="5"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  5
                </button>
                <button
                  id="6"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  6
                </button>
                <button
                  id="-"
                  onClick={this.props.handleNumClick}
                  className="calculator-button gray symbol main-btn2"
                >
                  -
                </button>
              </div>
              <div className="calculator-layout-row">
                <button
                  id="1"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  1
                </button>
                <button
                  id="2"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  2
                </button>
                <button
                  id="3"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  3
                </button>
                <button
                  id="+"
                  onClick={this.props.handleNumClick}
                  className="calculator-button gray symbol main-btn2"
                >
                  +
                </button>
              </div>
              <div className="calculator-layout-row">
                <button
                  id="0"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  0
                </button>
                <button
                  id="00"
                  onClick={this.props.handleNumClick}
                  className="calculator-button"
                >
                  00
                </button>
                <button id="." onClick={this.props.handleNumClick} className="calculator-button">&middot;</button>
                <button
                  onClick={this.props.handleCalculate}
                  className="calculator-button gray equal"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
