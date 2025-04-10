import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleClick = (value) => {
    const { input } = this.state;
    if (value === 'C')
      this.setState({ input: '' });
    else if (value === '=') {
      this.setState({ input: eval(input).toString() });
    } else if (value === 'DEL')
      this.setState({ input: input.slice(0, -1) });
    else
      this.setState({ input: input + value });
  };

  render() {
    const buttons = [
      '(', ')', 'C', 'DEL',
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+'
    ];

    const getClass = (btn) => {
      if (['/', '*', '-', '+', '='].includes(btn)) return 'operator';
      if (['(', ')', 'DEL', 'C'].includes(btn)) return 'secondary';
      return '';
    };

    return (
      <div className="calculator">
        <div className="display">{this.state.input || '0'}</div>
        <div className="buttons">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className={getClass(btn)}
              onClick={() => this.handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;