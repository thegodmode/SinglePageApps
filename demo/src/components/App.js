import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import {observer} from "mobx-react";

@observer
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
        <h1>{this.props.store.todos[0]}</h1>
      </div>
    );
  }
}

export default App;
