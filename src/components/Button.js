import React, { Component } from 'react'

function Button(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };

//     this.updateState = this.updateState.bind(this) 
//   }

//   updateState(){ 
//     this.setState({value: 'X'})
//   } 
  
//   render() {
//     // ...
//     return (
//       <button className="square" 
//         onClick={this.updateState}>
//         {this.state.value}
//       </button>
//     )
//   }

  
// }

export default Button