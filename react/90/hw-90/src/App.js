import React, { Component } from 'react';
import './App.css';

export default class App extends Component {



  state = {
    current: "",
    last: "",
    operator: null
  }

  handleInput = (e) => {
    this.setState({
      last: this.state.current,
      current: e.target.value
    });
  }


  calculate(btn) {
    switch (btn) {

      case 'Clear':
        this.setState({
          current: "",
          last: "",
          operator: null
        })
        break;
      case '-':
      case '+':
      case '*':
      case '/':
        if (this.state.operator === btn) {
          break;
        }
        this.setState({
          last: this.state.current,
          current: "",
          operator: btn
        })
        break;

      case '=':

        if (this.state.operator === '-') {
          this.setState({
            current: Number(this.state.last) - Number(this.state.current)
          })
        }
        else if (this.state.operator === '+') {
          this.setState({
            current: Number(this.state.last) + Number(this.state.current)
          })
        }
        else if (this.state.operator === '*') {
          this.setState({
            current: Number(this.state.last) * Number(this.state.current)
          })
        }
        else if (this.state.operator === '/') {
          this.setState({
            current: Number(this.state.last) / Number(this.state.current)
          })
        }
        break;
      case '.':
        if (this.state.current.includes('.')) {
          break;
        }
      //fall through

      default:

        if (this.state.operator === null) {
          this.setState({
            current: "" + this.state.current + btn
          })
        }
        else if (typeof (this.state.operator) === "string") {
          this.setState({
            current: "" + this.state.current + btn
          })
        }

    }
  }

  render() {
    const btns = [7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '*', '.', 0, '=', '/', 'Clear'].map((btn) => {

      return (<button key={btn} onClick={() => this.calculate(btn)} value={btn} >{btn}</button>)
    })

    return (
      <>
        <div className="calculator">
          <input onChange={this.handleInput} value={this.state.current === "" ? this.state.last : this.state.current} />
          {btns}
        </div>
      </>
    )
  }
}