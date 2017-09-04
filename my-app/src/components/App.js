import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {
  constructor(props){
     super(props)
     this.testFunction= this.testFunction.bind(this);
  }
  
  testFunction(){
     alert("Function Executed Successfully");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" onClick={this.testFunction}>
          Test {this.props.name}
        </p>
      </div>
    );
  }
}

export default App;
