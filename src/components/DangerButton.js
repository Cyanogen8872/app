import React, { Component } from 'react'
import Button from './Button' // Import a component from another file

import calculateWinner from '../helpers/calculateWinner.helper.js'

class DangerButton extends Component {
  

  renderSquare(i) {
    return <Button value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default DangerButton